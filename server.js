require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// 🔗 CONEXÃO COM O BANCO
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Banco conectado com sucesso"))
.catch(err => console.log("Erro ao conectar:", err));

// ✅ MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

// Modelo de horários
const Horario = mongoose.model("Horario", {
    dia: String,
    horario: String,
    treino: String
});

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

// Cadastro de usuário
app.post("/registrar", async (req, res) => {
    try {
        let tipo = "aluno";

        if (req.body.email === "admin@aguia.com") {
            tipo = "admin";
        }

        const usuarioExistente = await Usuario.findOne({ email: req.body.email });

        if (usuarioExistente) {
            return res.send("Já existe um usuário com esse email.");
        }

        const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);

        const novoUsuario = new Usuario({
            nome: req.body.nome || "",
            email: req.body.email,
            senha: senhaCriptografada,
            telefone: req.body.telefone || "",
            tipo: tipo,
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
        const usuario = await Usuario.findOne({
            email: req.body.email
        });

        if (!usuario) {
            return res.json({
                sucesso: false
            });
        }

        const senhaCorreta = await bcrypt.compare(req.body.senha, usuario.senha);

        if (senhaCorreta) {
            res.json({
                sucesso: true,
                email: usuario.email,
                tipo: usuario.tipo
            });
        } else {
            res.json({
                sucesso: false
            });
        }
    } catch (erro) {
        res.status(500).json({
            sucesso: false
        });
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

// =============================
// 🚀 INICIAR SERVIDOR
// =============================
app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

