// Função utilitária para trocar conteúdo
function trocarConteudo(html, aplicarAnimacao = true) {
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = html;

    if (aplicarAnimacao) {
        aplicarFadeUp();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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
            <div class="card" onclick="mostrarDetalheModalidade('Ginástica')">
                <h3>Ginástica</h3>
                <p>Controle corporal, mobilidade e base técnica.</p>
            </div>

            <div class="card" onclick="mostrarDetalheModalidade('Calistenia')">
                <h3>Calistenia</h3>
                <p>Força com peso corporal e progressão técnica.</p>
            </div>

            <div class="card" onclick="mostrarDetalheModalidade('Street Workout')">
                <h3>Street Workout</h3>
                <p>Explosão, barras, técnica e impacto visual.</p>
            </div>

            <div class="card" onclick="mostrarDetalheModalidade('TAF')">
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
            <div class="card" onclick="mostrarDetalheModalidade('Ginástica')">Ginástica</div>
            <div class="card" onclick="mostrarDetalheModalidade('Calistenia')">Calistenia</div>
            <div class="card" onclick="mostrarDetalheModalidade('Street Workout')">Street Workout</div>
            <div class="card" onclick="mostrarDetalheModalidade('TAF')">TAF</div>
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
            <button class="btn-voltar" onclick="mostrarModalidades()">⬅ Voltar</button>
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
            <div class="card" onclick="mostrarDetalheModalidade('Ginástica')">Ginástica</div>
            <div class="card" onclick="mostrarDetalheModalidade('Calistenia')">Calistenia</div>
            <div class="card" onclick="mostrarDetalheModalidade('Street Workout')">Street Workout</div>
            <div class="card" onclick="mostrarDetalheModalidade('TAF')">TAF</div>
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
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="senha" placeholder="Senha" required>
            <button type="submit">Entrar</button>
        </form>

        <h3>Ou cadastre-se</h3>

        <form onsubmit="registrar(event)">
            <input type="email" id="emailCadastro" placeholder="Email" required>
            <input type="password" id="senhaCadastro" placeholder="Senha" required>
            <button type="submit">Cadastrar</button>
        </form>

        <button onclick="mostrarInicio()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função fazer login
async function fazerLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const resposta = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`
        });

        const dados = await resposta.json();

        if (dados.sucesso) {
            localStorage.setItem("usuario", dados.email);
            localStorage.setItem("tipo", dados.tipo);

            esconderMenu();
            mostrarAreaLogada();
        } else {
            alert("Login inválido");
        }
    } catch (erro) {
        alert("Erro ao tentar fazer login.");
    }
}

// Função registrar
async function registrar(event) {
    event.preventDefault();

    const email = document.getElementById("emailCadastro").value;
    const senha = document.getElementById("senhaCadastro").value;

    try {
        const resposta = await fetch("/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`
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

    if (!usuario) {
        alert("Você precisa fazer login.");
        mostrarLogin();
        return;
    }

    esconderMenu();

    // PROFESSOR / ADMIN
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
            </div>

            <button onclick="logout()" class="btn-sair">Sair</button>
        </section>
        `);
        return;
    }

    // ALUNO
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

function logout() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("tipo");
    mostrarMenu();
    mostrarInicio();
}

// Função editar aula experimental
async function editarAulaExperimental() {
    let conteudoTextarea = `[
  {"modalidade":"Street Workout","data":"2026-03-25","horario":"19:00","vagas":3},
  {"modalidade":"Street Workout","data":"2026-03-25","horario":"20:00","vagas":0},
  {"modalidade":"Calistenia","data":"2026-03-27","horario":"19:00","vagas":2}
]`;

    try {
        const resposta = await fetch("/aula-experimental");
        const dados = await resposta.json();

        if (dados && dados.length > 0) {
            conteudoTextarea = JSON.stringify(dados, null, 2);
        }
    } catch (erro) {}

    trocarConteudo(`
    <section class="fade-up">
        <h2>📅 Editar Aula Experimental</h2>
        <p>Cadastre no formato JSON:</p>

        <textarea id="dadosAulaExperimental" rows="12" style="width:100%">${conteudoTextarea}</textarea>

        <br><br>
        <button onclick="salvarAulaExperimental()">Salvar</button>
        <button onclick="mostrarAreaLogada()" class="btn-voltar">⬅ Voltar</button>
    </section>
    `);
}

// Função salvar aula experimental
async function salvarAulaExperimental() {
    try {
        const texto = document.getElementById("dadosAulaExperimental").value;
        const aulas = JSON.parse(texto);

        const resposta = await fetch("/salvar-aula-experimental", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ aulas })
        });

        const msg = await resposta.text();
        alert(msg);
    } catch (erro) {
        alert("Erro ao salvar aula experimental. Verifique o JSON.");
    }
}

// Função render calendario aula experimental
function renderCalendarioAulaExperimental(aulas, modalidade) {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth();

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);

    const diasNoMes = ultimoDia.getDate();
    const inicioSemana = primeiroDia.getDay();

    const mapa = {};

    aulas.forEach(a => {
        if (!mapa[a.data]) {
            mapa[a.data] = [];
        }
        mapa[a.data].push(a);
    });

    let html = `
    <section class="fade-up">
        <h2>📅 Aula Experimental - ${modalidade}</h2>
        <p>Escolha um dia disponível:</p>

        <div class="legenda-calendario">
            <span class="legenda-item"><span class="cor verde"></span> Disponível</span>
            <span class="legenda-item"><span class="cor vermelho"></span> Lotado</span>
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
        const data = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
        const aulasDia = mapa[data] || [];

        let classe = "sem-aula";
        let onclick = "";

        if (aulasDia.length > 0) {
            const temVaga = aulasDia.some(a => a.vagas > 0);
            classe = temVaga ? "disponivel" : "lotado";
            onclick = `onclick="mostrarHorariosDia('${data}', '${modalidade}')"`; 
        }

        html += `<div class="dia ${classe}" ${onclick}>${dia}</div>`;
    }

    html += `
        </div>

        <div id="horarios-dia" style="margin-top: 20px;"></div>
        <button onclick="mostrarDetalheModalidade('${modalidade}')" class="btn-voltar">⬅ Voltar</button>
    </section>
    `;

    trocarConteudo(html);
}

// Função mostrar horarios e dia
async function mostrarHorariosDia(data, modalidade) {
    const resposta = await fetch("/aula-experimental");
    const aulas = await resposta.json();

    const filtradas = aulas.filter(a => a.data === data && a.modalidade === modalidade);

    let html = `<h3>Horários de ${data} - ${modalidade}</h3>`;

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

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.98)";
        header.style.borderBottom = "1px solid gold";
    } else {
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

    if (usuario) {
        mostrarAreaLogada();
    } else {
        mostrarInicio();
    }
};