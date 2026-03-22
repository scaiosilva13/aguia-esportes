const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// 🔗 CONEXÃO COM O BANCO
mongoose.connect("mongodb://localhost:27017/meubanco")
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
    email: String,
    senha: String,
    tipo: String
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
    let tipo = "aluno";

    if (req.body.email === "admin@aguia.com") {
        tipo = "admin";
    }

    const novoUsuario = new Usuario({
        email: req.body.email,
        senha: req.body.senha,
        tipo: tipo
    });

    await novoUsuario.save();
    res.send("Usuário registrado com sucesso!");
});

// Login
app.post("/login", async (req, res) => {
    const usuario = await Usuario.findOne({
        email: req.body.email,
        senha: req.body.senha
    });

    if (usuario) {
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

// =============================
// 🚀 INICIAR SERVIDOR
// =============================
app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000");
});