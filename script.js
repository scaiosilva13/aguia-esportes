let origemModalidade = "modalidades";
const estadoAulaExperimentalAdmin = {
    filtroModalidade: "",
    anoMes: "",
    diaSelecionado: ""
};

// Função utilitária para trocar conteúdo
function trocarConteudo(html, aplicarAnimacao = true, rolarTopo = true) {
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = html;

    if (aplicarAnimacao) {
        aplicarFadeUp();
    }

    if (rolarTopo) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

// Função mostrar inicio
function mostrarInicio() {
    mostrarMenu();

    trocarConteudo(`
    <section class="hero hero-marca">
        <div class="hero-bg"></div>
        <div class="particulas"></div>

        <div class="overlay hero-conteudo fade-up">
            <span class="tag-topo">CT de Alta Performance</span>

            <h2>Treine como uma Águia</h2>
            <p class="hero-subtitulo">Força • Disciplina • Evolução</p>

            <p class="hero-texto">
                Um centro de treinamento voltado para evolução física, técnica,
                disciplina e construção de performance em alto nível.
            </p>

            <div class="hero-botoes">
                <button onclick="mostrarEscolhaModalidadeExperimental()" class="btn-principal">
                🔥 Marque agora sua aula experimental
            </button>

                <button onclick="mostrarModalidades()" class="btn-secundario">
                Ver modalidades
                </button>
            </div>

            <div class="indicador-scroll" onclick="rolarParaConteudo()">
                <span>Role para explorar</span>
                <div class="seta-scroll">⌄</div>
            </div>
        </div>
    </section>

    <section class="bloco-destaque fade-up">
        <h2>Estrutura de marca forte</h2>

        <div class="cards">
            <div class="card">
                <h3>🦅 Identidade</h3>
                <p>Uma marca com presença visual forte, disciplina e proposta clara de evolução.</p>
            </div>

            <div class="card">
                <h3>🏋️ Metodologia</h3>
                <p>Treinos orientados para progresso real, técnica, força e constância.</p>
            </div>

            <div class="card">
                <h3>📈 Resultado</h3>
                <p>Construção de performance com organização, acompanhamento e visão de longo prazo.</p>
            </div>
        </div>
    </section>

    <section class="bloco-marca fade-up">
        <h2>Escolha sua modalidade</h2>
        <p>
            Ginástica, Calistenia, Street Workout e TAF com foco em desempenho,
            evolução e fortalecimento físico completo.
        </p>

        <div class="cards">
            <div class="card" onclick="abrirModalidadePelaHome('Ginástica')">
                <h3>Ginástica</h3>
                <p>Controle corporal, mobilidade e base técnica.</p>
            </div>

            <div class="card" onclick="abrirModalidadePelaHome('Calistenia')">
                <h3>Calistenia</h3>
                <p>Força com peso corporal e progressão técnica.</p>
            </div>

            <div class="card" onclick="abrirModalidadePelaHome('Street Workout')">
                <h3>Street Workout</h3>
                <p>Explosão, barras, técnica e impacto visual.</p>
            </div>

            <div class="card" onclick="abrirModalidadePelaHome('TAF')">
                <h3>TAF</h3>
                <p>Preparação física direcionada para performance e testes.</p>
            </div>
        </div>
    </section>

    <section class="cta-final fade-up">
        <h2>Comece sua evolução agora</h2>
        <p>Agende sua aula experimental e conheça a estrutura da Águia Esportes.</p>
        <button onclick="mostrarEscolhaModalidadeExperimental()" class="btn-principal">
            Quero agendar minha aula
        </button>
    </section>
    `);
}

// Função escolha modalidade experimental
function mostrarEscolhaModalidadeExperimental() {
    trocarConteudo(`
    <section class="modalidades fade-up">
        <h2>Escolha sua modalidade</h2>
        <p>Selecione a modalidade da sua aula experimental:</p>

        <div class="cards">
            <div class="card" onclick="abrirModalidadePelaHome('Ginástica')">Ginástica</div>
            <div class="card" onclick="abrirModalidadePelaHome('Calistenia')">Calistenia</div>
            <div class="card" onclick="abrirModalidadePelaHome('Street Workout')">Street Workout</div>
            <div class="card" onclick="abrirModalidadePelaHome('TAF')">TAF</div>
        </div>

        <button onclick="mostrarInicio()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função mostrar detalhe modalidade
function mostrarDetalheModalidade(modalidade) {
    let descricao = "";
    let subtitulo = "";
    let beneficios = [];
    let galeria = "";

    if (modalidade === "Ginástica") {
        subtitulo = "Base técnica, mobilidade e controle corporal";
        descricao = "A ginástica desenvolve coordenação, consciência corporal, mobilidade, força e controle do movimento. É uma modalidade essencial para construir base física sólida, melhorar postura, flexibilidade e capacidade técnica.";
        beneficios = [
            "Melhora da mobilidade e flexibilidade",
            "Desenvolvimento de força e coordenação",
            "Base técnica para outras modalidades",
            "Maior controle corporal"
        ];
        galeria = `
            <div class="galeria-modalidade">
                <div class="midia-card">Imagem / vídeo da Ginástica 1</div>
                <div class="midia-card">Imagem / vídeo da Ginástica 2</div>
                <div class="midia-card">Imagem / vídeo da Ginástica 3</div>
            </div>
        `;
    }

    if (modalidade === "Calistenia") {
        subtitulo = "Força com peso corporal e progressão inteligente";
        descricao = "A calistenia trabalha força, resistência e domínio corporal utilizando o próprio peso do corpo. É uma modalidade que permite evolução progressiva, desde movimentos básicos até técnicas avançadas.";
        beneficios = [
            "Ganho de força funcional",
            "Progressão técnica contínua",
            "Desenvolvimento de resistência e estabilidade",
            "Treino completo com peso corporal"
        ];
        galeria = `
            <div class="galeria-modalidade">
                <div class="midia-card">Imagem / vídeo da Calistenia 1</div>
                <div class="midia-card">Imagem / vídeo da Calistenia 2</div>
                <div class="midia-card">Imagem / vídeo da Calistenia 3</div>
            </div>
        `;
    }

    if (modalidade === "Street Workout") {
        subtitulo = "Explosão, técnica e movimentos de impacto";
        descricao = "O Street Workout combina força, explosão, técnica e movimentos avançados em barras e estruturas urbanas. É uma modalidade que une performance visual, potência física e domínio do corpo.";
        beneficios = [
            "Explosão e potência muscular",
            "Técnicas avançadas em barras",
            "Alta performance corporal",
            "Evolução visual e atlética"
        ];
        galeria = `
            <div class="galeria-modalidade">
                <div class="midia-card">Imagem / vídeo do Street Workout 1</div>
                <div class="midia-card">Imagem / vídeo do Street Workout 2</div>
                <div class="midia-card">Imagem / vídeo do Street Workout 3</div>
            </div>
        `;
    }

    if (modalidade === "TAF") {
        subtitulo = "Preparação física estratégica para testes";
        descricao = "O TAF é voltado para quem precisa desenvolver condicionamento físico, resistência, velocidade e força para avaliações e testes físicos. O foco é performance com planejamento e constância.";
        beneficios = [
            "Melhora de corrida e resistência",
            "Aumento de força e condicionamento",
            "Preparação específica para testes físicos",
            "Maior disciplina e regularidade"
        ];
        galeria = `
            <div class="galeria-modalidade">
                <div class="midia-card">Imagem / vídeo do TAF 1</div>
                <div class="midia-card">Imagem / vídeo do TAF 2</div>
                <div class="midia-card">Imagem / vídeo do TAF 3</div>
            </div>
        `;
    }

    trocarConteudo(`
    <section class="pagina-modalidade">
        <div class="modalidade-hero fade-up">
            <span class="tag-topo">Modalidade • ${modalidade}</span>
            <h2>${modalidade}</h2>
            <p class="modalidade-subtitulo">${subtitulo}</p>
            <p class="modalidade-descricao">${descricao}</p>
        </div>

        <div class="modalidade-bloco bloco-conteudo fade-up">
            <h3>Por que treinar ${modalidade}?</h3>
            <div class="beneficios-grid">
                ${beneficios.map(item => `<div class="beneficio-card">${item}</div>`).join("")}
            </div>
        </div>

        <div class="modalidade-bloco bloco-conteudo fade-up">
            <h3>Galeria / Mídias</h3>
            <p>Depois vamos substituir estes espaços pelas imagens e vídeos reais do CT.</p>
            ${galeria}
        </div>

        <div class="modalidade-bloco modalidade-cta bloco-conteudo fade-up">
            <h3>Pronto para conhecer essa modalidade?</h3>
            <p>Agende sua aula experimental e viva a experiência da Águia Esportes.</p>

            <div class="hero-botoes">
                <button class="btn-principal" onclick="abrirCalendarioModalidade('${modalidade}')">
                    Agendar aula experimental
                </button>

                <button class="btn-secundario" onclick="mostrarEscolhaModalidadeExperimental()">
                    Escolher outra modalidade
                </button>
            </div>

            <br>
            <button class="btn-voltar" onclick="voltarOrigemModalidade()">⬅ Voltar</button>
        </div>
    </section>
    `);
}

// Função abrir calendario modalidade
async function abrirCalendarioModalidade(modalidade) {
    try {
        const resposta = await fetch("/aula-experimental");
        const aulas = await resposta.json();

        const aulasFiltradas = aulas.filter(a => a.modalidade === modalidade);

        if (!aulasFiltradas.length) {
            trocarConteudo(`
            <section class="fade-up">
                <h2>${modalidade}</h2>
                <p>Não há aulas experimentais cadastradas para esta modalidade.</p>
                <button onclick="mostrarDetalheModalidade('${modalidade}')" class="btn-voltar">⬅ Voltar</button>
            </section>
            `);
            return;
        }

        renderCalendarioAulaExperimental(aulasFiltradas, modalidade);
    } catch (erro) {
        trocarConteudo(`
        <section class="fade-up">
            <h2>${modalidade}</h2>
            <p>Erro ao carregar calendário.</p>
            <button onclick="mostrarDetalheModalidade('${modalidade}')" class="btn-voltar">⬅ Voltar</button>
        </section>
        `);
    }
}

// Função mostrar modalidades
function mostrarModalidades() {
    trocarConteudo(`
    <section class="modalidades fade-up">
        <h2>Modalidades</h2>

        <div class="cards">
            <div class="card" onclick="abrirModalidadePelaPaginaModalidades('Ginástica')">Ginástica</div>
            <div class="card" onclick="abrirModalidadePelaPaginaModalidades('Calistenia')">Calistenia</div>
            <div class="card" onclick="abrirModalidadePelaPaginaModalidades('Street Workout')">Street Workout</div>
            <div class="card" onclick="abrirModalidadePelaPaginaModalidades('TAF')">TAF</div>
        </div>

        <p style="margin-top: 20px;">
            Trabalhamos força, disciplina, evolução física e preparação específica
            para diferentes objetivos esportivos.
        </p>

        <button onclick="mostrarInicio()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função mostrar horarios
async function mostrarHorarios() {
    const usuario = localStorage.getItem("usuario");

    // VISITANTE
    if (!usuario) {
        try {
            const resposta = await fetch("/aula-experimental");
            const aulas = await resposta.json();

            renderCalendarioAulaExperimental(aulas, "Aula Experimental");
        } catch (erro) {
            trocarConteudo(`
            <section class="fade-up">
                <h2>🔥 Aula Experimental</h2>
                <p>Erro ao carregar calendário.</p>
                <button onclick="mostrarInicio()" class="btn-voltar">⬅ Voltar</button>
            </section>
            `);
        }
        return;
    }

    // LOGADO
    const resposta = await fetch("/horarios");
    const dados = await resposta.json();

    let html = `<section class="fade-up"><h2>🕒 Horários</h2>`;

    if (!dados || dados.length === 0) {
        html += `<p>Nenhum horário cadastrado no momento.</p>`;
    } else {
        dados.forEach(h => {
            html += `<p>${h.dia} - ${h.horario} (${h.treino})</p>`;
        });
    }

    html += `<button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button></section>`;

    trocarConteudo(html);
}

// Função mostrar login
function mostrarLogin() {
    mostrarMenu();

    trocarConteudo(`
    <section class="fade-up">
        <h2>Login</h2>

        <form onsubmit="fazerLogin(event)">
            <input type="email"
                   id="email"
                   placeholder="Email"
                   required
                   autocomplete="username"
                   autocapitalize="none"
                   autocorrect="off"
                   spellcheck="false">

            <input type="password"
                   id="senha"
                   placeholder="Senha"
                   required
                   autocomplete="current-password">

            <button type="submit">Entrar</button>
        </form>

        <h3>Ou cadastre-se</h3>

        <form onsubmit="registrar(event)">
            <input type="text" id="nomeCadastro" placeholder="Nome" required>

            <input type="email"
                   id="emailCadastro"
                   placeholder="Email"
                   required
                   autocapitalize="none"
                   autocorrect="off"
                   spellcheck="false">

            <input type="text"
                   id="telefoneCadastro"
                   placeholder="Telefone (somente números)"
                   minlength="10"
                   maxlength="11"
                   required>

            <input type="password"
                   id="senhaCadastro"
                   placeholder="Senha (mín. 8 caracteres)"
                   minlength="8"
                   required>

            <button type="submit">Cadastrar</button>
        </form>

        <button onclick="mostrarInicio()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função fazer login
async function fazerLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        alert("Preencha email e senha.");
        return;
    }

    try {
        const resposta = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro || "Erro ao tentar fazer login.");
            return;
        }

        if (dados.sucesso) {
            localStorage.setItem("usuario", dados.email);
            localStorage.setItem("tipo", dados.tipo);

            esconderMenu();
            mostrarAreaLogada();
        } else {
            alert(dados.erro || "Login inválido");
        }
    } catch (erro) {
        alert("Erro ao tentar fazer login.");
    }
}

// Função registrar
async function registrar(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeCadastro").value.trim();
    const email = document.getElementById("emailCadastro").value.trim().toLowerCase();
    const telefone = document.getElementById("telefoneCadastro").value.trim();
    const senha = document.getElementById("senhaCadastro").value;

    const telefoneNumeros = telefone.replace(/\D/g, "");

    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
        alert("Informe um telefone válido com 10 ou 11 dígitos.");
        return;
    }

    try {
        const resposta = await fetch("/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&telefone=${encodeURIComponent(telefoneNumeros)}&senha=${encodeURIComponent(senha)}`
        });

        const texto = await resposta.text();
        alert(texto);
    } catch (erro) {
        alert("Erro ao cadastrar usuário.");
    }
}

// Função mostrar area logada
function mostrarAreaLogada() {
    const usuario = localStorage.getItem("usuario");
    const tipo = localStorage.getItem("tipo");

    if (!usuario || !tipo) {
        alert("Você precisa fazer login.");
        logout();
        return;
    }

    esconderMenu();

    if (tipo === "admin") {
        trocarConteudo(`
        <section class="dashboard fade-up">
            <h2>👨‍🏫 Painel do Professor</h2>

            <p class="bem-vindo">Bem-vindo, ${usuario}</p>

            <div class="dashboard-cards">
                <div class="dash-card" onclick="editarHorarios()">🛠 Editar Horários</div>
                <div class="dash-card" onclick="editarAvisos()">📢 Editar Avisos</div>
                <div class="dash-card" onclick="editarAulaExperimental()">📅 Aula Experimental</div>
                <div class="dash-card" onclick="verAgendamentosExperimental()">📋 Ver Agendamentos</div>
                <div class="dash-card" onclick="verAlunosAdmin()">👥 Ver Alunos</div>
                <div class="dash-card" onclick="editarCredenciaisAdmin()">🔐 Credenciais do Professor</div>
            </div>

            <button onclick="logout()" class="btn-sair">Sair</button>
        </section>
        `);
        return;
    }

    trocarConteudo(`
    <section class="dashboard fade-up">
        <h2>🔥 Área do Aluno</h2>

        <p class="bem-vindo">Bem-vindo, ${usuario}</p>

        <div class="dashboard-cards">
            <div class="dash-card" onclick="verTreinos()">💪 Treinos</div>
            <div class="dash-card" onclick="mostrarHorarios()">🕒 Horários</div>
            <div class="dash-card" onclick="verPlano()">💰 Meu Plano</div>
            <div class="dash-card" onclick="falarProfessor()">📩 Contato</div>
        </div>

        <button onclick="logout()" class="btn-sair">Sair</button>
    </section>
    `);
}

// Função ver treinos
function verTreinos() {
    trocarConteudo(`
    <section class="fade-up">
        <h2>💪 Treinos</h2>
        <p>Treino A: Peito + Tríceps</p>
        <p>Treino B: Costas + Bíceps</p>
        <p>Treino C: Pernas + Core</p>

        <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função ver plano
function verPlano() {
    trocarConteudo(`
    <section class="fade-up">
        <h2>💰 Meu Plano</h2>
        <p>Plano atual: Mensal</p>
        <p>Status: Ativo</p>
        <p>Valor: R$ 120</p>

        <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função falar professor
function falarProfessor() {
    trocarConteudo(`
    <section class="fade-up">
        <h2>📩 Contato</h2>
        <p>WhatsApp: (31) 99999-9999</p>

        <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função editar horarios
async function editarHorarios() {
    let conteudoTextarea = `[
  {"dia":"Segunda","horario":"18h","treino":"Treino A"},
  {"dia":"Terça","horario":"18h","treino":"Treino B"}
]`;

    try {
        const resposta = await fetch("/horarios");
        const dados = await resposta.json();

        if (dados && dados.length > 0) {
            conteudoTextarea = JSON.stringify(dados, null, 2);
        }
    } catch (erro) {}

    trocarConteudo(`
    <section class="fade-up">
        <h2>🛠 Editar Horários</h2>

        <p>Edite no formato JSON:</p>

        <textarea id="dados" rows="12" style="width:100%">${conteudoTextarea}</textarea>

        <br><br>
        <button onclick="salvarHorarios()">Salvar</button>
        <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função editar avisos
function editarAvisos() {
    trocarConteudo(`
    <section class="fade-up">
        <h2>📢 Editar Avisos</h2>
        <p>Em breve...</p>

        <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função salvar horarios
async function salvarHorarios() {
    try {
        const texto = document.getElementById("dados").value;
        const horarios = JSON.parse(texto);

        const resposta = await fetch("/salvar-horarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ horarios })
        });

        const textoResposta = await resposta.text();
        alert(textoResposta || "Horários salvos!");
    } catch (erro) {
        alert("Erro ao salvar horários. Verifique se o JSON está correto.");
    }
}

// Função esconder menu
function esconderMenu() {
    const header = document.getElementById("header");
    if (header) {
        header.style.display = "none";
    }
}

// Função mostrar menu
function mostrarMenu() {
    const header = document.getElementById("header");
    if (header) {
        header.style.display = "flex";
    }
}

// Função logout
async function logout() {
    try {
        await fetch("/logout", {
            method: "POST"
        });
    } catch (erro) {
        console.error("Erro ao fazer logout no servidor:", erro);
    }

    localStorage.removeItem("usuario");
    localStorage.removeItem("tipo");

    mostrarMenu();
    mostrarInicio();
}

// Função filtrar aula experimental professor
async function filtrarAulaExperimentalProfessor(modalidade) {
    estadoAulaExperimentalAdmin.filtroModalidade = modalidade;
    await atualizarPainelAulaExperimentalAdmin(true);
}



//Função atualizar painel aula experimental admin
async function atualizarPainelAulaExperimentalAdmin(maneterPainelDia = true) {
    try {
        const idsAnimados = [
            "filtroBotoesAdmin",
            "calendarioAdminWrapper",
            "listaAulasAdmin"
        ];

        animarAtualizacaoAdmin(idsAnimados);

        const resposta = await fetch("/aula-experimental");
        const aulas = await resposta.json();

        let aulasFiltradas = [...aulas];

        if (estadoAulaExperimentalAdmin.filtroModalidade) {
            aulasFiltradas = aulasFiltradas.filter(
                a => a.modalidade === estadoAulaExperimentalAdmin.filtroModalidade
            );
        }

        const [ano, mes] = estadoAulaExperimentalAdmin.anoMes.split("-").map(Number);

        const primeiroDia = new Date(ano, mes - 1, 1);
        const ultimoDia = new Date(ano, mes, 0);
        const diasNoMes = ultimoDia.getDate();
        const inicioSemana = primeiroDia.getDay();

        const aulasMes = aulasFiltradas.filter(a => a.data.startsWith(estadoAulaExperimentalAdmin.anoMes));

        const mapa = {};
        aulasMes.forEach(a => {
            if (!mapa[a.data]) mapa[a.data] = [];
            mapa[a.data].push(a);
        });

        renderizarFiltrosAdmin();
        renderizarCalendarioAdmin(mapa, ano, mes, diasNoMes, inicioSemana);
        renderizarListaAulasAdmin(aulasFiltradas);

        finalizarAnimacaoAdmin(idsAnimados);

        if (maneterPainelDia && estadoAulaExperimentalAdmin.diaSelecionado) {
            await selecionarDiaAdmin(
                estadoAulaExperimentalAdmin.diaSelecionado,
                estadoAulaExperimentalAdmin.filtroModalidade,
                false
            );
        }
    } catch (erro) {
        alert("Erro ao atualizar painel de aula experimental.");
    }
}

//Função renderizar Filtros admi
function renderizarFiltrosAdmin() {
    const filtro = estadoAulaExperimentalAdmin.filtroModalidade;

    document.getElementById("filtroBotoesAdmin").innerHTML = `
        <button class="btn-filtro-admin ${filtro === "" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('')">Todas</button>
        <button class="btn-filtro-admin ${filtro === "Ginástica" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('Ginástica')">Ginástica</button>
        <button class="btn-filtro-admin ${filtro === "Calistenia" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('Calistenia')">Calistenia</button>
        <button class="btn-filtro-admin ${filtro === "Street Workout" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('Street Workout')">Street Workout</button>
        <button class="btn-filtro-admin ${filtro === "TAF" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('TAF')">TAF</button>
    `;
}

//Função renderizar calendario admin
function renderizarCalendarioAdmin(mapa, ano, mes, diasNoMes, inicioSemana) {
    let html = `
    <div class="bloco-calendario-premium">
        <div class="admin-barra-mes">
            <button class="btn-filtro-admin" onclick="mudarMesAdmin(-1)">⬅ Mês anterior</button>

            <div class="admin-mes-label" id="mesAtualAdmin">
                ${estadoAulaExperimentalAdmin.anoMes}
            </div>

            <button class="btn-filtro-admin" onclick="mudarMesAdmin(1)">Próximo mês ➡</button>
        </div>

        <div class="legenda-calendario">
            <span class="legenda-item"><span class="cor verde"></span> Com vagas</span>
            <span class="legenda-item"><span class="cor vermelho"></span> Lotado</span>
            <span class="legenda-item"><span class="cor cinza"></span> Sem aula</span>
        </div>

        <div class="calendario">
    `;

    const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    nomesDias.forEach(d => {
        html += `<div class="dia-semana">${d}</div>`;
    });

    for (let i = 0; i < inicioSemana; i++) {
        html += `<div class="dia vazio"></div>`;
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
        const data = `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
        const aulasDia = mapa[data] || [];

        let classe = "sem-aula";
        let titulo = "Sem aula";

        if (aulasDia.length > 0) {
            const totalVagas = aulasDia.reduce((soma, a) => soma + Number(a.vagas || 0), 0);
            const temVaga = totalVagas > 0;
            classe = temVaga ? "disponivel" : "lotado";
            titulo = temVaga ? `${totalVagas} vaga(s)` : "Lotado";
        }

        const selecionado = estadoAulaExperimentalAdmin.diaSelecionado === data ? "dia-selecionado-admin" : "";

        html += `
        <div class="dia ${classe} ${selecionado}"
             onclick="selecionarDiaAdmin('${data}', '${estadoAulaExperimentalAdmin.filtroModalidade}')"
             title="${titulo}">
             ${dia}
        </div>
        `;
    }

    html += `
        </div>
    </div>
    `;

    document.getElementById("calendarioAdminWrapper").innerHTML = html;
}

//Função renderizar lista aulas admin
function renderizarListaAulasAdmin(aulasFiltradas) {
    const listaEl = document.getElementById("listaAulasAdmin");

    const ordenadas = [...aulasFiltradas].sort((a, b) => {
        const dataA = `${a.data} ${a.horario}`;
        const dataB = `${b.data} ${b.horario}`;
        return dataA.localeCompare(dataB);
    });

    if (!ordenadas.length) {
        listaEl.innerHTML = `<p style="text-align:center;">Nenhuma aula experimental cadastrada${estadoAulaExperimentalAdmin.filtroModalidade ? " para esta modalidade" : ""}.</p>`;
        return;
    }

    let html = `<div class="cards-aula-admin">`;

    ordenadas.forEach(a => {
        html += `
        <div class="card-aula-premium">
            <h4>${a.modalidade}</h4>
            <p><strong>Data:</strong> ${a.data}</p>
            <p><strong>Horário:</strong> ${a.horario}</p>
            <p><strong>Vagas:</strong> ${a.vagas}</p>

            <div class="acoes-card-admin">
                <button class="btn-acao-admin" onclick="abrirEdicaoAulaExperimental('${a._id}', '${a.modalidade}', '${a.data}', '${a.horario}', '${a.vagas}')">
                    Editar
                </button>
                <button class="btn-acao-admin btn-excluir-admin" onclick="excluirAulaExperimental('${a._id}')">
                    Excluir
                </button>
            </div>
        </div>
        `;
    });

    html += `</div>`;
    listaEl.innerHTML = html;
}

//Função mudar mês admin
async function mudarMesAdmin(direcao) {
    const [ano, mes] = estadoAulaExperimentalAdmin.anoMes.split("-").map(Number);

    const novaData = new Date(ano, mes - 1 + direcao, 1);
    estadoAulaExperimentalAdmin.anoMes = `${novaData.getFullYear()}-${String(novaData.getMonth() + 1).padStart(2, "0")}`;

    await atualizarPainelAulaExperimentalAdmin(true);
}

//Função selecionar dia admin
async function selecionarDiaAdmin(data, modalidadeFiltro = "", scrollSuave = true) {
    try {
        estadoAulaExperimentalAdmin.diaSelecionado = data;

        const resposta = await fetch("/aula-experimental");
        const aulas = await resposta.json();

        let aulasDia = aulas.filter(a => a.data === data);

        if (modalidadeFiltro) {
            aulasDia = aulasDia.filter(a => a.modalidade === modalidadeFiltro);
        }

        let html = `<div><h3>📌 Dia selecionado: ${data}</h3>`;

        if (!aulasDia.length) {
            html += `<p>Nenhuma aula cadastrada para este dia${modalidadeFiltro ? " nesta modalidade" : ""}.</p>`;
        } else {
            aulasDia.sort((a, b) => a.horario.localeCompare(b.horario));
            html += `<div class="cards-aula-admin">`;

            aulasDia.forEach(a => {
                html += `
                <div class="card-aula-premium">
                    <h4>${a.modalidade}</h4>
                    <p><strong>Horário:</strong> ${a.horario}</p>
                    <p><strong>Vagas:</strong> ${a.vagas}</p>

                    <div class="acoes-card-admin">
                        <button class="btn-acao-admin" onclick="abrirEdicaoAulaExperimental('${a._id}', '${a.modalidade}', '${a.data}', '${a.horario}', '${a.vagas}')">Editar</button>
                        <button class="btn-acao-admin btn-excluir-admin" onclick="excluirAulaExperimental('${a._id}')">Excluir</button>
                    </div>
                </div>
                `;
            });

            html += `</div>`;
        }

        html += `
            <hr class="linha-divisoria-admin">
            <h4 style="text-align:center;">➕ Adicionar aula neste dia</h4>

            <form onsubmit="adicionarAulaExperimentalDia(event, '${data}')" class="form-premium-admin">
                <div class="form-grid-admin">
                    <select id="novaModalidadeDia" required>
                        <option value="">Escolha a modalidade</option>
                        <option value="Ginástica">Ginástica</option>
                        <option value="Calistenia">Calistenia</option>
                        <option value="Street Workout">Street Workout</option>
                        <option value="TAF">TAF</option>
                    </select>

                    <input type="time" id="novoHorarioDia" required>
                    <input type="number" id="novasVagasDia" min="0" placeholder="Vagas" required>
                </div>

                <div style="text-align:center; margin-top:16px;">
                    <button class="btn-acao-admin" type="submit">Adicionar neste dia</button>
                </div>
            </form>
        </div>
        `;

        const painel = document.getElementById("painel-dia-admin");

        painel.classList.add("atualizando");
        painel.style.display = "block";

        setTimeout(() => {
        painel.innerHTML = html;
        painel.classList.remove("atualizando");
        painel.classList.add("entrou");

         setTimeout(() => {
        painel.classList.remove("entrou");
        }, 300);

    renderizarBordaDiaSelecionado();

    if (scrollSuave) {
        painel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}, 120);
    } catch (erro) {
        alert("Erro ao carregar o dia selecionado.");
    }
}






//Função adicionar aula experimental
async function adicionarAulaExperimental(event) {
    event.preventDefault();

    const modalidade = document.getElementById("novaModalidade").value;
    const data = document.getElementById("novaDataAulaExperimental").value;
    const horario = document.getElementById("novoHorarioAulaExperimental").value;
    const vagas = document.getElementById("novasVagasAulaExperimental").value;

    try {
        const resposta = await fetch("/admin/aula-experimental", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ modalidade, data, horario, vagas })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro || "Erro ao adicionar aula experimental.");
            return;
        }

        alert(dados.mensagem);
        editarAulaExperimental();
    } catch (erro) {
        alert("Erro ao adicionar aula experimental.");
    }
}

function animarAtualizacaoAdmin(ids = []) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove("entrou");
        el.classList.add("admin-conteudo-suave", "atualizando");
    });
}

function finalizarAnimacaoAdmin(ids = []) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove("atualizando");
        el.classList.add("entrou");

        setTimeout(() => {
            el.classList.remove("entrou");
        }, 300);
    });
}

async function editarAulaExperimental(filtroModalidade = "", anoMes = null) {
    const hoje = new Date();

    estadoAulaExperimentalAdmin.filtroModalidade = filtroModalidade || "";
    estadoAulaExperimentalAdmin.anoMes =
        anoMes || `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;

    if (!estadoAulaExperimentalAdmin.diaSelecionado) {
        estadoAulaExperimentalAdmin.diaSelecionado = "";
    }

    trocarConteudo(`
    <section class="fade-up painel-exp-admin">
        <div class="admin-topo-premium">
            <h2>📅 Gerenciar Aula Experimental</h2>
            <p>Cadastre, filtre e gerencie as aulas experimentais com uma visualização mais organizada e profissional.</p>
        </div>

        <div class="form-premium-admin">
            <h3>➕ Adicionar nova aula</h3>

            <form onsubmit="adicionarAulaExperimental(event)">
                <div class="form-grid-admin">
                    <select id="novaModalidade" required>
                        <option value="">Escolha a modalidade</option>
                        <option value="Ginástica">Ginástica</option>
                        <option value="Calistenia">Calistenia</option>
                        <option value="Street Workout">Street Workout</option>
                        <option value="TAF">TAF</option>
                    </select>

                    <input type="date" id="novaDataAulaExperimental" required>
                    <input type="time" id="novoHorarioAulaExperimental" required>
                    <input type="number" id="novasVagasAulaExperimental" min="0" placeholder="Vagas" required>
                </div>

                <div style="margin-top:16px; text-align:center;">
                    <button class="btn-acao-admin" type="submit">Adicionar aula</button>
                </div>
            </form>
        </div>

        <div class="filtro-area-admin">
            <h3>Filtrar por modalidade</h3>
            <div class="filtro-botoes-admin admin-conteudo-suave" id="filtroBotoesAdmin"></div>
        </div>

        <div id="calendarioAdminWrapper" class="admin-conteudo-suave"></div>

        <div id="painel-dia-admin" class="bloco-dia-admin admin-conteudo-suave" style="display:none;"></div>

        <div id="form-edicao-aula" class="admin-conteudo-suave" style="margin-top:24px;"></div>

        <hr class="linha-divisoria-admin">

        <h3 style="text-align:center;">Aulas cadastradas</h3>
        <div id="listaAulasAdmin" class="admin-conteudo-suave"></div>

        <div style="text-align:center; margin-top:30px;">
            <button onclick="mostrarAreaLogada()" class="btn-voltar-premium btn-filtro-admin">⬅ Voltar</button>
        </div>
    </section>
    `, true, false);

    await atualizarPainelAulaExperimentalAdmin(false);
}

async function atualizarPainelAulaExperimentalAdmin(manterPainelDia = true) {
    try {
        const idsAnimados = [
            "filtroBotoesAdmin",
            "calendarioAdminWrapper",
            "listaAulasAdmin"
        ];

        animarAtualizacaoAdmin(idsAnimados);

        const resposta = await fetch("/aula-experimental");
        const aulas = await resposta.json();

        let aulasFiltradas = [...aulas];

        if (estadoAulaExperimentalAdmin.filtroModalidade) {
            aulasFiltradas = aulasFiltradas.filter(
                a => a.modalidade === estadoAulaExperimentalAdmin.filtroModalidade
            );
        }

        const [ano, mes] = estadoAulaExperimentalAdmin.anoMes.split("-").map(Number);

        const primeiroDia = new Date(ano, mes - 1, 1);
        const ultimoDia = new Date(ano, mes, 0);
        const diasNoMes = ultimoDia.getDate();
        const inicioSemana = primeiroDia.getDay();

        const aulasMes = aulasFiltradas.filter(a =>
            a.data.startsWith(estadoAulaExperimentalAdmin.anoMes)
        );

        const mapa = {};
        aulasMes.forEach(a => {
            if (!mapa[a.data]) mapa[a.data] = [];
            mapa[a.data].push(a);
        });

        renderizarFiltrosAdmin();
        renderizarCalendarioAdmin(mapa, ano, mes, diasNoMes, inicioSemana);
        renderizarListaAulasAdmin(aulasFiltradas);

        finalizarAnimacaoAdmin(idsAnimados);

        if (manterPainelDia && estadoAulaExperimentalAdmin.diaSelecionado) {
            await selecionarDiaAdmin(
                estadoAulaExperimentalAdmin.diaSelecionado,
                estadoAulaExperimentalAdmin.filtroModalidade,
                false
            );
        }
    } catch (erro) {
        alert("Erro ao atualizar painel de aula experimental.");
        console.error(erro);
    }
}

function renderizarFiltrosAdmin() {
    const filtro = estadoAulaExperimentalAdmin.filtroModalidade;
    const el = document.getElementById("filtroBotoesAdmin");
    if (!el) return;

    el.innerHTML = `
        <button class="btn-filtro-admin ${filtro === "" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('')">Todas</button>
        <button class="btn-filtro-admin ${filtro === "Ginástica" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('Ginástica')">Ginástica</button>
        <button class="btn-filtro-admin ${filtro === "Calistenia" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('Calistenia')">Calistenia</button>
        <button class="btn-filtro-admin ${filtro === "Street Workout" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('Street Workout')">Street Workout</button>
        <button class="btn-filtro-admin ${filtro === "TAF" ? "ativo" : ""}" onclick="filtrarAulaExperimentalProfessor('TAF')">TAF</button>
    `;
}

function renderizarCalendarioAdmin(mapa, ano, mes, diasNoMes, inicioSemana) {
    const el = document.getElementById("calendarioAdminWrapper");
    if (!el) return;

    let html = `
    <div class="bloco-calendario-premium">
        <div class="admin-barra-mes">
            <button class="btn-filtro-admin" onclick="mudarMesAdmin(-1)">⬅ Mês anterior</button>

            <div class="admin-mes-label" id="mesAtualAdmin">
                ${estadoAulaExperimentalAdmin.anoMes}
            </div>

            <button class="btn-filtro-admin" onclick="mudarMesAdmin(1)">Próximo mês ➡</button>
        </div>

        <div class="legenda-calendario">
            <span class="legenda-item"><span class="cor verde"></span> Com vagas</span>
            <span class="legenda-item"><span class="cor vermelho"></span> Lotado</span>
            <span class="legenda-item"><span class="cor cinza"></span> Sem aula</span>
        </div>

        <div class="calendario">
    `;

    const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    nomesDias.forEach(d => {
        html += `<div class="dia-semana">${d}</div>`;
    });

    for (let i = 0; i < inicioSemana; i++) {
        html += `<div class="dia vazio"></div>`;
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
        const data = `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
        const aulasDia = mapa[data] || [];

        let classe = "sem-aula";
        let titulo = "Sem aula";

        if (aulasDia.length > 0) {
            const totalVagas = aulasDia.reduce((soma, a) => soma + Number(a.vagas || 0), 0);
            const temVaga = totalVagas > 0;
            classe = temVaga ? "disponivel" : "lotado";
            titulo = temVaga ? `${totalVagas} vaga(s)` : "Lotado";
        }

        const selecionado = estadoAulaExperimentalAdmin.diaSelecionado === data ? "dia-selecionado-admin" : "";

        html += `
        <div class="dia ${classe} ${selecionado}"
             onclick="selecionarDiaAdmin('${data}', '${estadoAulaExperimentalAdmin.filtroModalidade}')"
             title="${titulo}">
             ${dia}
        </div>
        `;
    }

    html += `</div></div>`;
    el.innerHTML = html;
}

function renderizarListaAulasAdmin(aulasFiltradas) {
    const listaEl = document.getElementById("listaAulasAdmin");
    if (!listaEl) return;

    const ordenadas = [...aulasFiltradas].sort((a, b) => {
        const dataA = `${a.data} ${a.horario}`;
        const dataB = `${b.data} ${b.horario}`;
        return dataA.localeCompare(dataB);
    });

    if (!ordenadas.length) {
        listaEl.innerHTML = `<p style="text-align:center;">Nenhuma aula experimental cadastrada${estadoAulaExperimentalAdmin.filtroModalidade ? " para esta modalidade" : ""}.</p>`;
        return;
    }

    let html = `<div class="cards-aula-admin">`;

    ordenadas.forEach(a => {
        html += `
        <div class="card-aula-premium">
            <h4>${a.modalidade}</h4>
            <p><strong>Data:</strong> ${a.data}</p>
            <p><strong>Horário:</strong> ${a.horario}</p>
            <p><strong>Vagas:</strong> ${a.vagas}</p>

            <div class="acoes-card-admin">
                <button class="btn-acao-admin" onclick="abrirEdicaoAulaExperimental('${a._id}', '${a.modalidade}', '${a.data}', '${a.horario}', '${a.vagas}')">Editar</button>
                <button class="btn-acao-admin btn-excluir-admin" onclick="excluirAulaExperimental('${a._id}')">Excluir</button>
            </div>
        </div>
        `;
    });

    html += `</div>`;
    listaEl.innerHTML = html;
}

async function filtrarAulaExperimentalProfessor(modalidade) {
    estadoAulaExperimentalAdmin.filtroModalidade = modalidade;
    await atualizarPainelAulaExperimentalAdmin(true);
}

async function mudarMesAdmin(direcao) {
    const [ano, mes] = estadoAulaExperimentalAdmin.anoMes.split("-").map(Number);
    const novaData = new Date(ano, mes - 1 + direcao, 1);

    estadoAulaExperimentalAdmin.anoMes =
        `${novaData.getFullYear()}-${String(novaData.getMonth() + 1).padStart(2, "0")}`;

    await atualizarPainelAulaExperimentalAdmin(true);
}

async function selecionarDiaAdmin(data, modalidadeFiltro = "", scrollSuave = true) {
    try {
        estadoAulaExperimentalAdmin.diaSelecionado = data;

        const resposta = await fetch("/aula-experimental");
        const aulas = await resposta.json();

        let aulasDia = aulas.filter(a => a.data === data);

        if (modalidadeFiltro) {
            aulasDia = aulasDia.filter(a => a.modalidade === modalidadeFiltro);
        }

        let html = `<div><h3>📌 Dia selecionado: ${data}</h3>`;

        if (!aulasDia.length) {
            html += `<p>Nenhuma aula cadastrada para este dia${modalidadeFiltro ? " nesta modalidade" : ""}.</p>`;
        } else {
            aulasDia.sort((a, b) => a.horario.localeCompare(b.horario));
            html += `<div class="cards-aula-admin">`;

            aulasDia.forEach(a => {
                html += `
                <div class="card-aula-premium">
                    <h4>${a.modalidade}</h4>
                    <p><strong>Horário:</strong> ${a.horario}</p>
                    <p><strong>Vagas:</strong> ${a.vagas}</p>

                    <div class="acoes-card-admin">
                        <button class="btn-acao-admin" onclick="abrirEdicaoAulaExperimental('${a._id}', '${a.modalidade}', '${a.data}', '${a.horario}', '${a.vagas}')">Editar</button>
                        <button class="btn-acao-admin btn-excluir-admin" onclick="excluirAulaExperimental('${a._id}')">Excluir</button>
                    </div>
                </div>
                `;
            });

            html += `</div>`;
        }

        html += `
            <hr class="linha-divisoria-admin">
            <h4 style="text-align:center;">➕ Adicionar aula neste dia</h4>

            <form onsubmit="adicionarAulaExperimentalDia(event, '${data}')" class="form-premium-admin">
                <div class="form-grid-admin">
                    <select id="novaModalidadeDia" required>
                        <option value="">Escolha a modalidade</option>
                        <option value="Ginástica">Ginástica</option>
                        <option value="Calistenia">Calistenia</option>
                        <option value="Street Workout">Street Workout</option>
                        <option value="TAF">TAF</option>
                    </select>

                    <input type="time" id="novoHorarioDia" required>
                    <input type="number" id="novasVagasDia" min="0" placeholder="Vagas" required>
                </div>

                <div style="text-align:center; margin-top:16px;">
                    <button class="btn-acao-admin" type="submit">Adicionar neste dia</button>
                </div>
            </form>
        </div>
        `;

        const painel = document.getElementById("painel-dia-admin");
        if (!painel) return;

        painel.classList.add("atualizando");
        painel.style.display = "block";

        setTimeout(() => {
            painel.innerHTML = html;
            painel.classList.remove("atualizando");
            painel.classList.add("entrou");

            setTimeout(() => {
                painel.classList.remove("entrou");
            }, 300);

            renderizarBordaDiaSelecionado();

            if (scrollSuave) {
                painel.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 120);
    } catch (erro) {
        alert("Erro ao carregar o dia selecionado.");
        console.error(erro);
    }
}

function renderizarBordaDiaSelecionado() {
    document.querySelectorAll(".calendario .dia").forEach(el => {
        el.classList.remove("dia-selecionado-admin");
    });

    const dataSelecionada = estadoAulaExperimentalAdmin.diaSelecionado;
    if (!dataSelecionada) return;

    const diaSelecionado = Number(dataSelecionada.split("-")[2]);
    const dias = Array.from(document.querySelectorAll(".calendario .dia"))
        .filter(el => !el.classList.contains("vazio"));

    let contador = 1;
    for (const el of dias) {
        if (contador === diaSelecionado) {
            el.classList.add("dia-selecionado-admin");
            break;
        }
        contador++;
    }
}

async function adicionarAulaExperimental(event) {
    event.preventDefault();

    const modalidade = document.getElementById("novaModalidade").value;
    const data = document.getElementById("novaDataAulaExperimental").value;
    const horario = document.getElementById("novoHorarioAulaExperimental").value;
    const vagas = document.getElementById("novasVagasAulaExperimental").value;

    try {
        const resposta = await fetch("/admin/aula-experimental", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ modalidade, data, horario, vagas })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro || "Erro ao adicionar aula experimental.");
            return;
        }

        alert(dados.mensagem);
        await atualizarPainelAulaExperimentalAdmin(true);
    } catch (erro) {
        alert("Erro ao adicionar aula experimental.");
        console.error(erro);
    }
}

async function adicionarAulaExperimentalDia(event, data) {
    event.preventDefault();

    const modalidade = document.getElementById("novaModalidadeDia").value;
    const horario = document.getElementById("novoHorarioDia").value;
    const vagas = document.getElementById("novasVagasDia").value;

    try {
        const resposta = await fetch("/admin/aula-experimental", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ modalidade, data, horario, vagas })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro || "Erro ao adicionar aula.");
            return;
        }

        alert(dados.mensagem);

        await atualizarPainelAulaExperimentalAdmin(true);
        await selecionarDiaAdmin(data, estadoAulaExperimentalAdmin.filtroModalidade, false);
    } catch (erro) {
        alert("Erro ao adicionar aula neste dia.");
        console.error(erro);
    }
}

async function excluirAulaExperimental(id) {
    const confirmar = confirm("Deseja realmente excluir esta aula experimental?");
    if (!confirmar) return;

    try {
        const resposta = await fetch(`/admin/aula-experimental/${id}`, {
            method: "DELETE"
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro || "Erro ao excluir aula experimental.");
            return;
        }

        alert(dados.mensagem);
        await atualizarPainelAulaExperimentalAdmin(true);
    } catch (erro) {
        alert("Erro ao excluir aula experimental.");
        console.error(erro);
    }
}

function abrirEdicaoAulaExperimental(id, modalidade, data, horario, vagas) {
    const area = document.getElementById("form-edicao-aula");
    if (!area) return;

    area.classList.add("atualizando");

    setTimeout(() => {
        area.innerHTML = `
        <div class="form-premium-admin">
            <h3>✏️ Editar Aula Experimental</h3>

            <form onsubmit="salvarEdicaoAulaExperimental(event, '${id}')">
                <div class="form-grid-admin">
                    <select id="editarModalidadeAulaExperimental" required>
                        <option value="Ginástica" ${modalidade === "Ginástica" ? "selected" : ""}>Ginástica</option>
                        <option value="Calistenia" ${modalidade === "Calistenia" ? "selected" : ""}>Calistenia</option>
                        <option value="Street Workout" ${modalidade === "Street Workout" ? "selected" : ""}>Street Workout</option>
                        <option value="TAF" ${modalidade === "TAF" ? "selected" : ""}>TAF</option>
                    </select>

                    <input type="date" id="editarDataAulaExperimental" value="${data}" required>
                    <input type="time" id="editarHorarioAulaExperimental" value="${horario}" required>
                    <input type="number" id="editarVagasAulaExperimental" value="${vagas}" min="0" required>
                </div>

                <div class="acoes-card-admin" style="justify-content:center; margin-top:18px;">
                    <button class="btn-acao-admin" type="submit">Salvar alterações</button>
                    <button class="btn-acao-admin btn-secundario-admin" type="button" onclick="fecharEdicaoAulaExperimental()">Cancelar</button>
                </div>
            </form>
        </div>
        `;

        area.classList.remove("atualizando");
        area.classList.add("entrou");

        setTimeout(() => {
            area.classList.remove("entrou");
        }, 300);

        area.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
}

function fecharEdicaoAulaExperimental() {
    const area = document.getElementById("form-edicao-aula");
    if (area) {
        area.innerHTML = "";
    }
}

async function salvarEdicaoAulaExperimental(event, id) {
    event.preventDefault();

    const modalidade = document.getElementById("editarModalidadeAulaExperimental").value;
    const data = document.getElementById("editarDataAulaExperimental").value;
    const horario = document.getElementById("editarHorarioAulaExperimental").value;
    const vagas = document.getElementById("editarVagasAulaExperimental").value;

    try {
        const resposta = await fetch(`/admin/aula-experimental/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ modalidade, data, horario, vagas })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro || "Erro ao atualizar aula experimental.");
            return;
        }

        alert(dados.mensagem);
        fecharEdicaoAulaExperimental();
        await atualizarPainelAulaExperimentalAdmin(true);
        await selecionarDiaAdmin(data, estadoAulaExperimentalAdmin.filtroModalidade, false);
    } catch (erro) {
        alert("Erro ao atualizar aula experimental.");
        console.error(erro);
    }
}

// Função render calendario aula experimental
function renderCalendarioAulaExperimental(aulas, modalidade, anoMes = null) {
    if (!aulas || aulas.length === 0) {
        trocarConteudo(`
        <section class="fade-up">
            <h2>📅 Aula Experimental - ${modalidade}</h2>
            <p>Nenhuma aula experimental cadastrada para esta modalidade.</p>
            <button onclick="mostrarDetalheModalidade('${modalidade}')" class="btn-voltar">⬅ Voltar</button>
        </section>
        `);
        return;
    }

    const mesesDisponiveis = [...new Set(aulas.map(a => a.data.slice(0, 7)))].sort();

    if (!anoMes || !mesesDisponiveis.includes(anoMes)) {
        anoMes = mesesDisponiveis[0];
    }

    const [ano, mes] = anoMes.split("-").map(Number);

    const primeiroDia = new Date(ano, mes - 1, 1);
    const ultimoDia = new Date(ano, mes, 0);

    const diasNoMes = ultimoDia.getDate();
    const inicioSemana = primeiroDia.getDay();

    const aulasMes = aulas.filter(a => a.data.startsWith(anoMes));

    const mapa = {};
    aulasMes.forEach(a => {
        if (!mapa[a.data]) {
            mapa[a.data] = [];
        }
        mapa[a.data].push(a);
    });

    const indiceMesAtual = mesesDisponiveis.indexOf(anoMes);
    const mesAnterior = indiceMesAtual > 0 ? mesesDisponiveis[indiceMesAtual - 1] : null;
    const proximoMes = indiceMesAtual < mesesDisponiveis.length - 1 ? mesesDisponiveis[indiceMesAtual + 1] : null;

    let html = `
    <section class="fade-up">
        <h2>📅 Aula Experimental - ${modalidade}</h2>
        <p>Escolha um dia disponível:</p>

        <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
            ${mesAnterior ? `<button onclick="renderCalendarioAulaExperimental(window.aulasCalendarioAtual, '${modalidade}', '${mesAnterior}')">⬅ Mês anterior</button>` : ""}
            <strong style="align-self:center;">${anoMes}</strong>
            ${proximoMes ? `<button onclick="renderCalendarioAulaExperimental(window.aulasCalendarioAtual, '${modalidade}', '${proximoMes}')">Próximo mês ➡</button>` : ""}
        </div>

        <div class="legenda-calendario">
            <span class="legenda-item"><span class="cor verde"></span> Disponível</span>
            <span class="legenda-item"><span class="cor vermelho"></span> Lotado</span>
            <span class="legenda-item"><span class="cor cinza"></span> Sem aula</span>
        </div>

        <div class="calendario">
    `;

    const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    nomesDias.forEach(d => {
        html += `<div class="dia-semana">${d}</div>`;
    });

    for (let i = 0; i < inicioSemana; i++) {
        html += `<div class="dia vazio"></div>`;
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
        const data = `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
        const aulasDia = mapa[data] || [];

        let classe = "sem-aula";
        let onclick = "";
        let titulo = "Sem aula";

        if (aulasDia.length > 0) {
            const totalVagas = aulasDia.reduce((soma, a) => soma + Number(a.vagas || 0), 0);
            const temVaga = totalVagas > 0;

            classe = temVaga ? "disponivel" : "lotado";
            titulo = temVaga ? `${totalVagas} vaga(s)` : "Lotado";

            if (temVaga) {
                onclick = `onclick="mostrarHorariosDia('${data}', '${modalidade}')"`;
            }
        }

        html += `<div class="dia ${classe}" ${onclick} title="${titulo}">${dia}</div>`;
    }

    html += `
        </div>

        <div id="horarios-dia" style="margin-top: 20px;"></div>
        <button onclick="mostrarDetalheModalidade('${modalidade}')" class="btn-voltar">⬅ Voltar</button>
    </section>
    `;

    window.aulasCalendarioAtual = aulas;
    trocarConteudo(html);
}

// Função mostrar horarios e dia
async function mostrarHorariosDia(data, modalidade) {
    const resposta = await fetch("/aula-experimental");
    const aulas = await resposta.json();

    const filtradas = aulas.filter(a => a.data === data && a.modalidade === modalidade);

    let html = `<h3>Horários de ${data} - ${modalidade}</h3>`;

    if (!filtradas.length) {
        html += `<p>Nenhum horário encontrado para este dia.</p>`;
        document.getElementById("horarios-dia").innerHTML = html;
        return;
    }

    filtradas.forEach(a => {
        if (a.vagas > 0) {
            html += `
            <div style="margin-bottom: 10px;">
                <p>🟢 ${a.horario} - ${a.vagas} vaga(s)</p>
                <button onclick="mostrarFormularioAgendamento('${data}', '${a.horario}', '${modalidade}')">
                    Agendar este horário
                </button>
            </div>
            `;
        } else {
            html += `<p>🔴 ${a.horario} - Lotado</p>`;
        }
    });

    document.getElementById("horarios-dia").innerHTML = html;
}

// Função mostrar formularios agendamento
function mostrarFormularioAgendamento(data, horario, modalidade) {
    document.getElementById("horarios-dia").innerHTML = `
    <h3>Agendar aula experimental</h3>

    <p><strong>Modalidade:</strong> ${modalidade}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Horário:</strong> ${horario}</p>

    <form onsubmit="agendarAulaExperimental(event, '${data}', '${horario}', '${modalidade}')">
        <input type="text" id="nomeVisitante" placeholder="Seu nome" required>
        <input type="text" id="telefoneVisitante" placeholder="Seu telefone" required>
        <button type="submit">Confirmar Agendamento</button>
    </form>
    `;
}

// Função agendar aula experimental
async function agendarAulaExperimental(event, data, horario, modalidade) {
    event.preventDefault();

    const nome = document.getElementById("nomeVisitante").value;
    const telefone = document.getElementById("telefoneVisitante").value;

    const resposta = await fetch("/agendar-aula-experimental", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            telefone,
            modalidade,
            data,
            horario
        })
    });

    const mensagem = await resposta.text();
    alert(mensagem);

    const respostaAulas = await fetch("/aula-experimental");
    const aulas = await respostaAulas.json();
    const aulasFiltradas = aulas.filter(a => a.modalidade === modalidade);

    renderCalendarioAulaExperimental(aulasFiltradas, modalidade);
}

// Função ver agendamentos experimental
async function verAgendamentosExperimental() {
    try {
        const resposta = await fetch("/agendamentos-aula-experimental");
        const agendamentos = await resposta.json();

        let html = `
        <section class="fade-up">
            <h2>📋 Agendamentos da Aula Experimental</h2>
        `;

        if (!agendamentos || agendamentos.length === 0) {
            html += `<p>Nenhum agendamento encontrado.</p>`;
        } else {
            agendamentos.forEach(a => {
                html += `
                <div class="card" style="margin-bottom: 15px;">
                    <p><strong>Nome:</strong> ${a.nome}</p>
                    <p><strong>Telefone:</strong> ${a.telefone}</p>
                    <p><strong>Modalidade:</strong> ${a.modalidade}</p>
                    <p><strong>Data:</strong> ${a.data}</p>
                    <p><strong>Horário:</strong> ${a.horario}</p>

                    <button onclick="cancelarAgendamentoExperimental('${a._id}')">
                        ❌ Cancelar
                    </button>
                </div>
                `;
            });
        }

        html += `<button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button></section>`;

        trocarConteudo(html);
    } catch (erro) {
        trocarConteudo(`
        <section class="fade-up">
            <h2>📋 Agendamentos da Aula Experimental</h2>
            <p>Erro ao carregar agendamentos.</p>
            <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
        </section>
        `);
    }
}

// Função cancelar agendamentos experimental
async function cancelarAgendamentoExperimental(id) {
    const confirmar = confirm("Deseja realmente cancelar este agendamento?");

    if (!confirmar) return;

    const resposta = await fetch("/cancelar-agendamento-aula-experimental", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
    });

    const mensagem = await resposta.text();
    alert(mensagem);

    verAgendamentosExperimental();
}

// Função aplicar efeito no header com scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (!header) return;

    if (window.scrollY > 60) {
        header.classList.add("header-compacto");
        header.style.background = "rgba(0,0,0,0.97)";
        header.style.borderBottom = "1px solid rgba(255,215,0,0.18)";
    } else {
        header.classList.remove("header-compacto");
        header.style.background = "rgba(0,0,0,0.92)";
        header.style.borderBottom = "1px solid rgba(255,215,0,0.25)";
    }
});

// Função animação fade up
function aplicarFadeUp() {
    const elementos = document.querySelectorAll(".fade-up");

    elementos.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
            el.style.transition = "all 0.7s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 120 * i);
    });
}

// Função Abrir modalidade pela home
function abrirModalidadePelaHome(modalidade) {
    origemModalidade = "inicio";
    mostrarDetalheModalidade(modalidade);
}

// Função Abrir modalidade pela pagina modalidades
function abrirModalidadePelaPaginaModalidades(modalidade) {
    origemModalidade = "modalidades";
    mostrarDetalheModalidade(modalidade);
}

// Função voltar origem modalidade
function voltarOrigemModalidade() {
    if (origemModalidade === "inicio") {
        mostrarInicio();
    } else {
        mostrarModalidades();
    }
}

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 900);
    }
});

// Auto login
window.onload = function() {
    const usuario = localStorage.getItem("usuario");
    const tipo = localStorage.getItem("tipo");

    if (usuario && tipo) {
        mostrarAreaLogada();
    } else {
        mostrarInicio();
    }
};

// Função rolar para conteudo
function rolarParaConteudo() {
    const destino = document.querySelector(".bloco-destaque");

    if (destino) {
        destino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Função Ver alunos admin
async function verAlunosAdmin() {
    try {
        const resposta = await fetch("/admin/usuarios");
        const usuarios = await resposta.json();

        let html = `
        <section class="fade-up">
            <h2>👥 Alunos cadastrados</h2>

            <input type="text" id="buscaAluno" placeholder="Buscar por nome ou email" oninput="filtrarAlunosAdmin()" style="max-width: 400px; margin: 0 auto 20px; display:block;">

            <div id="listaAlunosAdmin">
        `;

        if (!usuarios || usuarios.length === 0) {
            html += `<p>Nenhum usuário encontrado.</p>`;
        } else {
            usuarios.forEach(usuario => {
                html += `
                <div class="card aluno-admin-card" data-nome="${(usuario.nome || "").toLowerCase()}" data-email="${(usuario.email || "").toLowerCase()}" style="margin-bottom: 15px;">
                    <p><strong>Nome:</strong> ${usuario.nome || "Não informado"}</p>
                    <p><strong>Email:</strong> ${usuario.email}</p>
                    <p><strong>Plano:</strong> ${usuario.plano || "Não definido"}</p>

                    <button onclick="abrirPerfilAluno('${usuario._id}')">Abrir perfil</button>
                </div>
                `;
            });
        }

        html += `
            </div>

            <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
        </section>
        `;

        trocarConteudo(html);
    } catch (erro) {
        console.error("Erro ao carregar usuários:", erro);

        trocarConteudo(`
        <section class="fade-up">
            <h2>👥 Alunos cadastrados</h2>
            <p>Erro ao carregar usuários.</p>
            <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
        </section>
        `);
    }
}

// Função Abrir perfil aluno
async function abrirPerfilAluno(id) {
    try {
        const resposta = await fetch(`/admin/usuarios/${id}`);
        const usuario = await resposta.json();

        trocarConteudo(`
        <section class="fade-up">
            <h2>👤 Perfil do Aluno</h2>

            <form onsubmit="salvarPerfilAluno(event, '${usuario._id}')">
                <input type="text" id="editarNome" value="${usuario.nome || ""}" placeholder="Nome">
                <input type="email" id="editarEmail" value="${usuario.email || ""}" placeholder="Email">
                <input type="text" id="editarTelefone" value="${usuario.telefone || ""}" placeholder="Telefone">
                <input type="text" id="editarPlano" value="${usuario.plano || ""}" placeholder="Plano">
                <input type="text" id="editarHorarioAulas" value="${usuario.horarioAulas || ""}" placeholder="Horário das aulas">
                <textarea id="editarTreinos" rows="6" placeholder="Treinos">${usuario.treinos || ""}</textarea>

                <button type="submit">Salvar alterações</button>
            </form>

            <br>
            <button onclick="excluirAluno('${usuario._id}')">🗑 Excluir perfil</button>
            <button onclick="verAlunosAdmin()" class="btn-voltar">⬅ Voltar</button>
        </section>
        `);
    } catch (erro) {
        console.error("Erro ao abrir perfil:", erro);
        alert("Erro ao abrir perfil do aluno.");
    }
}

// Função Salvar perfil aluno
async function salvarPerfilAluno(event, id) {
    event.preventDefault();

    const nome = document.getElementById("editarNome").value;
    const email = document.getElementById("editarEmail").value;
    const telefone = document.getElementById("editarTelefone").value;
    const plano = document.getElementById("editarPlano").value;
    const horarioAulas = document.getElementById("editarHorarioAulas").value;
    const treinos = document.getElementById("editarTreinos").value;

    try {
        const resposta = await fetch(`/admin/usuarios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                telefone,
                plano,
                horarioAulas,
                treinos
            })
        });

        if (resposta.ok) {
            alert("Perfil atualizado com sucesso!");
            abrirPerfilAluno(id);
        } else {
            alert("Erro ao atualizar perfil.");
        }
    } catch (erro) {
        console.error("Erro ao salvar perfil:", erro);
        alert("Erro ao salvar alterações.");
    }
}

// Função Excluir aluno
async function excluirAluno(id) {
    const confirmar = confirm("Deseja realmente excluir este perfil?");

    if (!confirmar) return;

    try {
        const resposta = await fetch(`/admin/usuarios/${id}`, {
            method: "DELETE"
        });

        const dados = await resposta.json();
        alert(dados.mensagem || "Usuário excluído com sucesso!");
        verAlunosAdmin();
    } catch (erro) {
        console.error("Erro ao excluir usuário:", erro);
        alert("Erro ao excluir usuário.");
    }
}

// Função Filtrar alunos admin
function filtrarAlunosAdmin() {
    const busca = document.getElementById("buscaAluno").value.toLowerCase();
    const cards = document.querySelectorAll(".aluno-admin-card");

    cards.forEach(card => {
        const nome = card.getAttribute("data-nome");
        const email = card.getAttribute("data-email");

        if (nome.includes(busca) || email.includes(busca)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

async function editarCredenciaisAdmin() {
    try {
        const resposta = await fetch("/admin/credenciais");
        const admin = await resposta.json();

        if (!resposta.ok) {
            alert(admin.erro || "Erro ao carregar credenciais do professor.");
            return;
        }

        trocarConteudo(`
        <section class="fade-up">
            <h2>🔐 Credenciais do Professor</h2>

            <form onsubmit="salvarCredenciaisAdmin(event)">
                <input type="text" id="adminNome" value="${admin.nome || ""}" placeholder="Nome do professor" required>
                <input type="email" id="adminEmail" value="${admin.email || ""}" placeholder="Email" required>
                <input type="text" id="adminTelefone" value="${admin.telefone || ""}" placeholder="Telefone" required>
                <input type="password" id="adminSenha" placeholder="Nova senha (deixe vazio para não alterar)">
                <button type="submit">Salvar credenciais</button>
            </form>

            <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
        </section>
        `);
    } catch (erro) {
        alert("Erro ao carregar credenciais do professor.");
    }
}

// Função Salvar credenciais admn
async function salvarCredenciaisAdmin(event) {
    event.preventDefault();

    const nome = document.getElementById("adminNome").value.trim();
    const email = document.getElementById("adminEmail").value.trim().toLowerCase();
    const telefone = document.getElementById("adminTelefone").value.trim();
    const senha = document.getElementById("adminSenha").value;

    try {
        const resposta = await fetch("/admin/credenciais", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, email, telefone, senha })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.erro || "Erro ao salvar credenciais.");
            return;
        }

        localStorage.setItem("usuario", dados.admin.email);
        localStorage.setItem("tipo", "admin");

        alert(dados.mensagem);
        mostrarAreaLogada();
    } catch (erro) {
        alert("Erro ao atualizar credenciais do professor.");
    }
}