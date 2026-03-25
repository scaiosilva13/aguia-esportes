require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 3000;

// 🔗 CONEXÃO COM O BANCO
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Banco conectado com sucesso"))
.catch(err => console.log("Erro ao conectar:", err));

// ✅ MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "aguia-esportes-chave-secreta",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 12
    }
}));
app.use(express.static(__dirname));

// =============================
// 📦 MODELOS
// =============================

// Modelo de aluno
const Aluno = mongoose.model("Aluno", {
    nome: String,
    idade: Number,
    telefone: String
});

// ✅ Modelo de agendamento experimental (CORRIGIDO COM SCHEMA)
const AgendamentoExperimentalSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    modalidade: String,
    data: String,
    horario: String
}, { timestamps: true });

const AgendamentoExperimental = mongoose.model(
    "AgendamentoExperimental",
    AgendamentoExperimentalSchema
);

// Modelo aula experimental
const AulaExperimental = mongoose.model("AulaExperimental", {
    modalidade: String,
    data: String,
    horario: String,
    vagas: Number
});

// Modelo de usuário
const Usuario = mongoose.model("Usuario", {
    nome: String,
    email: String,
    senha: String,
    telefone: String,
    tipo: String,
    plano: String,
    horarioAulas: String,
    treinos: String
});

// Modelo de gararantir admin padrao
async function garantirAdminPadrao() {
    try {
        const adminExistente = await Usuario.findOne({ tipo: "admin" });

        if (!adminExistente) {
            const senhaCriptografada = await bcrypt.hash("admin12345", 10);

            await Usuario.create({
                nome: "Professor",
                email: "admin@aguia.com",
                senha: senhaCriptografada,
                telefone: "31999999999",
                tipo: "admin",
                plano: "",
                horarioAulas: "",
                treinos: ""
            });

            console.log("✅ Admin padrão criado com sucesso");
        }
    } catch (erro) {
        console.log("Erro ao garantir admin padrão:", erro.message);
    }
}

// Modelo de horários
const Horario = mongoose.model("Horario", {
    dia: String,
    horario: String,
    treino: String
});

function verificarLogin(req, res, next) {
    if (!req.session.usuario) {
        return res.status(401).json({ erro: "Usuário não autenticado." });
    }
    next();
}

function verificarAdmin(req, res, next) {
    if (!req.session.usuario) {
        return res.status(401).json({ erro: "Usuário não autenticado." });
    }

    if (req.session.usuario.tipo !== "admin") {
        return res.status(403).json({ erro: "Acesso permitido apenas para admin." });
    }

    next();
}

// =============================
// 📥 ROTAS
// =============================

app.get("/teste-banco", async (req, res) => {
    try {
        const usuarios = await Usuario.find({}, "-senha").limit(5);
        res.json({
            sucesso: true,
            mensagem: "Banco conectado com sucesso!",
            totalEncontrado: usuarios.length,
            usuarios
        });
    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao consultar banco",
            erro: erro.message
        });
    }
});

// Cadastro de aluno
app.post("/cadastro", async (req, res) => {
    const novoAluno = new Aluno({
        nome: req.body.nome,
        idade: req.body.idade,
        telefone: req.body.telefone
    });

    await novoAluno.save();
    res.send("Aluno cadastrado com sucesso!");
});

// Agendar aula experimental
app.post("/agendar-aula-experimental", async (req, res) => {
    const { nome, telefone, modalidade, data, horario } = req.body;

    const aula = await AulaExperimental.findOne({ modalidade, data, horario });

    if (!aula) {
        return res.send("Horário não encontrado.");
    }

    if (aula.vagas <= 0) {
        return res.send("Esse horário já está lotado.");
    }

    const agendamentoExistente = await AgendamentoExperimental.findOne({
        telefone,
        modalidade,
        data
    });

    if (agendamentoExistente) {
        return res.send("Este telefone já possui um agendamento nesta modalidade nesta data.");
    }

    const novoAgendamento = new AgendamentoExperimental({
        nome,
        telefone,
        modalidade,
        data,
        horario
    });

    await novoAgendamento.save();

    aula.vagas = aula.vagas - 1;
    await aula.save();

    res.send("Aula experimental agendada com sucesso!");
});

// admin/aula-experimental
app.post("/admin/aula-experimental", verificarAdmin, async (req, res) => {
    try {
        const modalidade = (req.body.modalidade || "").trim();
        const data = (req.body.data || "").trim();
        const horario = (req.body.horario || "").trim();
        const vagas = Number(req.body.vagas);

        if (!modalidade || !data || !horario) {
            return res.status(400).json({ erro: "Modalidade, data e horário são obrigatórios." });
        }

        if (Number.isNaN(vagas) || vagas < 0) {
            return res.status(400).json({ erro: "Informe uma quantidade válida de vagas." });
        }

        const existente = await AulaExperimental.findOne({ modalidade, data, horario });

        if (existente) {
            return res.status(400).json({ erro: "Esse horário já está cadastrado para essa modalidade." });
        }

        const novaAula = new AulaExperimental({
            modalidade,
            data,
            horario,
            vagas
        });

        await novaAula.save();

        res.json({
            sucesso: true,
            mensagem: "Aula experimental cadastrada com sucesso!"
        });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao cadastrar aula experimental." });
    }
});

app.delete("/admin/aula-experimental/:id", verificarAdmin, async (req, res) => {
    try {
        const aula = await AulaExperimental.findById(req.params.id);

        if (!aula) {
            return res.status(404).json({ erro: "Aula não encontrada." });
        }

        await AulaExperimental.findByIdAndDelete(req.params.id);

        res.json({
            sucesso: true,
            mensagem: "Aula experimental removida com sucesso!"
        });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao remover aula experimental." });
    }
});

app.put("/admin/aula-experimental/:id", async (req, res) => {
    try {
        const modalidade = (req.body.modalidade || "").trim();
        const data = (req.body.data || "").trim();
        const horario = (req.body.horario || "").trim();
        const vagas = Number(req.body.vagas);

        if (!modalidade || !data || !horario) {
            return res.status(400).json({ erro: "Modalidade, data e horário são obrigatórios." });
        }

        if (Number.isNaN(vagas) || vagas < 0) {
            return res.status(400).json({ erro: "Informe uma quantidade válida de vagas." });
        }

        const aulaAtual = await AulaExperimental.findById(req.params.id);

        if (!aulaAtual) {
            return res.status(404).json({ erro: "Aula não encontrada." });
        }

        const duplicada = await AulaExperimental.findOne({
            modalidade,
            data,
            horario,
            _id: { $ne: req.params.id }
        });

        if (duplicada) {
            return res.status(400).json({ erro: "Já existe outra aula com essa modalidade, data e horário." });
        }

        aulaAtual.modalidade = modalidade;
        aulaAtual.data = data;
        aulaAtual.horario = horario;
        aulaAtual.vagas = vagas;

        await aulaAtual.save();

        res.json({
            sucesso: true,
            mensagem: "Aula experimental atualizada com sucesso!"
        });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao atualizar aula experimental." });
    }
});

// Cadastro de usuário
app.post("/registrar", async (req, res) => {
    try {
        const nome = (req.body.nome || "").trim();
        const email = (req.body.email || "").trim().toLowerCase();
        const telefoneOriginal = (req.body.telefone || "").trim();
        const senha = req.body.senha || "";

        const telefone = telefoneOriginal.replace(/\D/g, "");

        if (!nome) {
            return res.status(400).send("Informe o nome.");
        }

        if (senha.length < 8) {
            return res.status(400).send("A senha deve ter pelo menos 8 caracteres.");
        }

        if (telefone.length < 10 || telefone.length > 11) {
            return res.status(400).send("Informe um telefone válido com 10 ou 11 dígitos.");
        }

        const usuarioExistente = await Usuario.findOne({ email });

        if (usuarioExistente) {
            return res.status(400).send("Já existe um usuário com esse email.");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoUsuario = new Usuario({
            nome,
            email,
            senha: senhaCriptografada,
            telefone,
            tipo: "aluno",
            plano: "Mensal",
            horarioAulas: "Não definido",
            treinos: "Não definido"
        });

        await novoUsuario.save();
        res.send("Usuário registrado com sucesso!");
    } catch (erro) {
        res.status(500).send("Erro ao registrar usuário.");
    }
});

// Login
app.post("/login", async (req, res) => {
    try {
        const email = (req.body.email || "").trim().toLowerCase();
        const senha = req.body.senha || "";

        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(401).json({ erro: "Usuário inválido" });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ erro: "Senha inválida" });
        }

        req.session.usuario = {
            id: usuario._id,
            email: usuario.email,
            tipo: usuario.tipo,
            nome: usuario.nome
        };

        res.json({
            sucesso: true,
            email: usuario.email,
            tipo: usuario.tipo,
            nome: usuario.nome
        });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao fazer login." });
    }
});

// Salvar horários
app.post("/salvar-horarios", async (req, res) => {
    await Horario.deleteMany();

    const horarios = req.body.horarios;

    for (let h of horarios) {
        await new Horario(h).save();
    }

    res.send("Horários atualizados com sucesso!");
});

// Buscar horários
app.get("/horarios", async (req, res) => {
    const horarios = await Horario.find();
    res.json(horarios);
});

// Salvar horários da aula experimental
app.post("/salvar-aula-experimental", async (req, res) => {
    await AulaExperimental.deleteMany();

    const aulas = req.body.aulas;

    for (let a of aulas) {
        await new AulaExperimental(a).save();
    }

    res.send("Aulas experimentais atualizadas com sucesso!");
});

// Buscar horários da aula experimental
app.get("/aula-experimental", async (req, res) => {
    const aulas = await AulaExperimental.find();
    res.json(aulas);
});

// Agendamentos da aula experimental
app.get("/agendamentos-aula-experimental", async (req, res) => {
    const agendamentos = await AgendamentoExperimental.find();
    res.json(agendamentos);
});

// Cancelar agendamento da aula experimental
app.post("/cancelar-agendamento-aula-experimental", async (req, res) => {
    const { id } = req.body;

    const agendamento = await AgendamentoExperimental.findById(id);

    if (!agendamento) {
        return res.send("Agendamento não encontrado.");
    }

    const aula = await AulaExperimental.findOne({
        modalidade: agendamento.modalidade, 
        data: agendamento.data,
        horario: agendamento.horario
});

    if (aula) {
        aula.vagas = aula.vagas + 1;
        await aula.save();
    }

    await AgendamentoExperimental.findByIdAndDelete(id);

    res.send("Agendamento cancelado com sucesso!");
});

app.get("/painel-teste", async (req, res) => {
    try {
        const usuarios = await Usuario.find({}, "-senha"); 
        const horarios = await Horario.find();
        const aulas = await AulaExperimental.find();
        const agendamentos = await AgendamentoExperimental.find();

        res.json({
            usuarios,
            horarios,
            aulasExperimentais: aulas,
            agendamentos
        });

    } catch (erro) {
        res.status(500).json({
            erro: "Erro ao carregar dados",
            detalhe: erro.message
        });
    }
});

// Listar usuários
app.get("/admin/usuarios", async (req, res) => {
    try {
        const usuarios = await Usuario.find({ tipo: { $ne: "admin" } }, "-senha");
        res.json(usuarios);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
});

// Buscar usuário por ID
app.get("/admin/usuarios/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id, "-senha");

        if (!usuario || usuario.tipo === "admin") {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        res.json(usuario);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar usuário" });
    }
});

// Editar usuário
app.put("/admin/usuarios/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);

        if (!usuario || usuario.tipo === "admin") {
            return res.status(403).json({ erro: "Não permitido alterar este usuário" });
        }

        usuario.nome = req.body.nome;
        usuario.email = req.body.email;
        usuario.telefone = req.body.telefone;
        usuario.plano = req.body.plano;
        usuario.horarioAulas = req.body.horarioAulas;
        usuario.treinos = req.body.treinos;

        await usuario.save();

        res.json(usuario);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao atualizar usuário" });
    }
});

// Excluir usuário
app.delete("/admin/usuarios/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);

        if (!usuario || usuario.tipo === "admin") {
            return res.status(403).json({ erro: "Não permitido excluir este usuário" });
        }

        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ sucesso: true, mensagem: "Usuário excluído com sucesso!" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao excluir usuário" });
    }
});

app.get("/admin/credenciais", verificarAdmin, async (req, res) => {
    try {
        const admin = await Usuario.findOne({ tipo: "admin" }, "-senha");

        if (!admin) {
            return res.status(404).json({ erro: "Admin não encontrado" });
        }

        res.json(admin);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar credenciais do admin" });
    }
});

app.put("/admin/credenciais", verificarAdmin, async (req, res) => {
    try {
        const { nome, email, telefone, senha } = req.body;

        const admin = await Usuario.findOne({ tipo: "admin" });

        if (!admin) {
            return res.status(404).json({ erro: "Admin não encontrado" });
        }

        const emailLimpo = (email || "").trim().toLowerCase();
        const telefoneLimpo = (telefone || "").replace(/\D/g, "");

        if (!nome || !emailLimpo) {
            return res.status(400).json({ erro: "Nome e email são obrigatórios" });
        }

        if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
            return res.status(400).json({ erro: "Telefone inválido" });
        }

        const emailEmUso = await Usuario.findOne({
            email: emailLimpo,
            _id: { $ne: admin._id }
        });

        if (emailEmUso) {
            return res.status(400).json({ erro: "Esse email já está em uso" });
        }

        admin.nome = nome.trim();
        admin.email = emailLimpo;
        admin.telefone = telefoneLimpo;

        if (senha && senha.trim() !== "") {
            if (senha.length < 8) {
                return res.status(400).json({ erro: "A senha deve ter pelo menos 8 caracteres" });
            }

            admin.senha = await bcrypt.hash(senha, 10);
        }

        await admin.save();

        res.json({
            sucesso: true,
            mensagem: "Credenciais do admin atualizadas com sucesso!",
            admin: {
                nome: admin.nome,
                email: admin.email,
                telefone: admin.telefone,
                tipo: admin.tipo
            }
        });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao atualizar credenciais do admin" });
    }
});

app.post("/logout", (req, res) => {
    req.session.destroy((erro) => {
        if (erro) {
            return res.status(500).json({ erro: "Erro ao fazer logout." });
        }

        res.clearCookie("connect.sid");
        res.json({ sucesso: true });
    });
});

// =============================
// 🚀 INICIAR SERVIDOR
// =============================
app.listen(port, async () => {
    console.log("Servidor rodando em http://localhost:3000");
    await garantirAdminPadrao();
});

