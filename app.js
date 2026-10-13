// ========================================================
// NEXUS ACADEMY - MOTOR PEDAGÓGICO & GERENCIADOR DE ESTADO
// ========================================================

const missions = [
    // ==========================================
    // MÓDULO 1: VARIÁVEIS, TIPOS E INPUTS (1.1 - 1.20)
    // ==========================================
    {
        id: '1.1', module: 1, title: "Hello World",
        objective: "Sua primeira invasão! Use o comando print para testar a comunicação.",
        tips: ["print('Hello World')"],
        validate: (p, c, code) => c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.2', module: 1, title: "Dados Textuais (Strings)",
        objective: "Crie uma variável chamada 'nome' e guarde um texto (string) nela. Depois dê print(nome).",
        tips: ["nome = 'Hacker'", "print(nome)"],
        validate: (p, c, code) => code.includes('nome') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.3', module: 1, title: "Dados Numéricos (Int)",
        objective: "Crie uma variável 'idade' e atribua um número inteiro (sem aspas). Dê print nela.",
        tips: ["idade = 25", "print(idade)"],
        validate: (p, c, code) => code.includes('idade') && c.some(cmd => cmd.type === 'print' && !isNaN(parseInt(cmd.value)))
    },
    {
        id: '1.4', module: 1, title: "Ponto Flutuante (Float)",
        objective: "Crie uma variável 'versao' com um número decimal (ex: 1.5). Dê print nela.",
        tips: ["versao = 1.5", "print(versao)"],
        validate: (p, c, code) => code.includes('versao') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('.'))
    },
    {
        id: '1.5', module: 1, title: "Verdadeiro ou Falso (Bool)",
        objective: "Crie uma variável 'acesso' e defina como True (maiúsculo no Python!). Dê print.",
        tips: ["acesso = True", "print(acesso)"],
        validate: (p, c, code) => code.includes('acesso') && code.includes('True') && c.some(cmd => cmd.type === 'print' && cmd.value === 'true')
    },
    {
        id: '1.6', module: 1, title: "Inspecionando Tipos",
        objective: "No Python usamos type() para ver o tipo de um dado. Dê print no tipo de um número inteiro.",
        tips: ["print(type(10))"],
        validate: (p, c, code) => code.includes('type') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('int'))
    },
    {
        id: '1.7', module: 1, title: "Múltiplas Variáveis",
        objective: "Crie duas variáveis 'a' e 'b'. Dê print nas duas.",
        tips: ["a = 10", "b = 20", "print(a)", "print(b)"],
        validate: (p, c, code) => c.filter(cmd => cmd.type === 'print').length >= 2
    },
    {
        id: '1.8', module: 1, title: "Operações: Soma",
        objective: "Crie uma variável 'soma' que guarde o resultado de 5 + 5. Dê print no resultado.",
        tips: ["soma = 5 + 5", "print(soma)"],
        validate: (p, c, code) => code.includes('+') && c.some(cmd => cmd.type === 'print' && cmd.value == 10)
    },
    {
        id: '1.9', module: 1, title: "Concatenação",
        objective: "Junte textos! Crie nome = 'Maria', e dê print('Ola ' + nome).",
        tips: ["nome = 'Maria'", "print('Ola ' + nome)"],
        validate: (p, c, code) => code.includes('+') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('Ola'))
    },
    {
        id: '1.10', module: 1, title: "Capturando Input",
        objective: "Use a função input() para pedir o nome do usuário e dê print no resultado.",
        tips: ["nome = input('Qual seu nome?')", "print(nome)"],
        validate: (p, c, code) => code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.11', module: 1, title: "Cuidado com o Input",
        objective: "Tudo que vem do input() é String! Peça um input de idade e dê print(type(idade)).",
        tips: ["idade = input('Sua idade:')", "print(type(idade))"],
        validate: (p, c, code) => code.includes('input') && code.includes('type') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('str'))
    },
    {
        id: '1.12', module: 1, title: "O Problema Matemático",
        objective: "Tente somar duas strings. Faça a = '5', b = '5', e dê print(a + b). Veja o resultado bizarro!",
        tips: ["a = '5'", "b = '5'", "print(a + b)"],
        validate: (p, c, code) => c.some(cmd => cmd.type === 'print' && cmd.value === '55')
    },
    {
        id: '1.13', module: 1, title: "Conversão: int()",
        objective: "Para somar números vindos de textos, converta com int(). Dê print(int('5') + int('5')).",
        tips: ["print(int('5') + int('5'))"],
        validate: (p, c, code) => code.includes('int') && c.some(cmd => cmd.type === 'print' && cmd.value == 10)
    },
    {
        id: '1.14', module: 1, title: "Input com Conversão",
        objective: "Peça um número usando input(), converta para int() e guarde na variável 'x'. Dê print(x + 10).",
        tips: ["texto = input('Número:')", "x = int(texto)", "print(x + 10)"],
        validate: (p, c, code) => code.includes('int') && code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.15', module: 1, title: "Input e int() de uma vez",
        objective: "Você pode juntar os dois: x = int(input('Número:')). Dê print no tipo(x) para provar que é int.",
        tips: ["x = int(input('Número:'))", "print(type(x))"],
        validate: (p, c, code) => code.includes('int(input') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('int'))
    },
    {
        id: '1.16', module: 1, title: "Calculadora de Soma",
        objective: "Peça dois inputs e converta ambos para int. Some e dê print no resultado.",
        tips: ["a = int(input('N1:'))", "b = int(input('N2:'))", "print(a + b)"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('+') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.17', module: 1, title: "Conversão: float()",
        objective: "E se o usuário digitar 2.5? Use float()! Peça um peso com float(input()) e dê print(peso).",
        tips: ["peso = float(input('Peso:'))", "print(peso)"],
        validate: (p, c, code) => code.includes('float') && code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.18', module: 1, title: "Conversão: str()",
        objective: "Você não pode concatenar string com número! Faça: print('Meu nível é ' + str(99)).",
        tips: ["print('Meu nível é ' + str(99))"],
        validate: (p, c, code) => code.includes('str') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('99'))
    },
    {
        id: '1.19', module: 1, title: "Desafio Variáveis",
        objective: "Crie nome (string), idade (int convertido), altura (float convertido). Dê print neles.",
        tips: ["n = input()", "i = int(input())", "a = float(input())", "print(n, i, a)"],
        validate: (p, c, code) => code.includes('int') && code.includes('float') && code.includes('input')
    },
    {
        id: '1.20', module: 1, title: "BOSS FINAL DAS VARIÁVEIS",
        objective: "O Firewall exige: Leia uma senha(input), converta para int, some 10 e ande para a frente com esse valor!",
        tips: ["senha = int(input('Senha (digite 50):'))", "frente(senha + 10)"],
        validate: (p, c, code) => code.includes('int(input') && c.some(cmd => cmd.type === 'frente')
    },

    // ==========================================
    // MÓDULO 2: CONDICIONAIS (IF, ELIF, ELSE) (2.1 - 2.20)
    // ==========================================
    {
        id: '2.1', module: 2, title: "O Primeiro IF",
        objective: "Teste a tomada de decisão! Crie porta_aberta = True. Se for True, dê print('Passagem liberada').",
        tips: ["porta_aberta = True", "if porta_aberta:", "    print('Passagem liberada')"],
        validate: (p, c, code) => code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('passagem'))
    },
    {
        id: '2.2', module: 2, title: "Comparação de Igualdade (==)",
        objective: "No Python usamos == para checar igualdade. Crie chave = 'nexus'. Se chave == 'nexus': dê print('Chave aceita').",
        tips: ["chave = 'nexus'", "if chave == 'nexus':", "    print('Chave aceita')"],
        validate: (p, c, code) => code.includes('==') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('chave'))
    },
    {
        id: '2.3', module: 2, title: "Comparação de Diferença (!=)",
        objective: "Use != para verificar se é diferente. Crie status = 'perigo'. Se status != 'seguro': dê print('Alerta de intruso').",
        tips: ["status = 'perigo'", "if status != 'seguro':", "    print('Alerta de intruso')"],
        validate: (p, c, code) => code.includes('!=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('alerta'))
    },
    {
        id: '2.4', module: 2, title: "Maior Que (>)",
        objective: "Verifique números! Crie energia = 80. Se energia > 50: dê print('Sistemas operando').",
        tips: ["energia = 80", "if energia > 50:", "    print('Sistemas operando')"],
        validate: (p, c, code) => code.includes('>') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('sistemas'))
    },
    {
        id: '2.5', module: 2, title: "Menor Que (<)",
        objective: "Alerta de emergência! Crie vida = 15. Se vida < 20: dê print('Vida critica').",
        tips: ["vida = 15", "if vida < 20:", "    print('Vida critica')"],
        validate: (p, c, code) => code.includes('<') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('vida'))
    },
    {
        id: '2.6', module: 2, title: "Maior ou Igual (>=)",
        objective: "O nível mínimo é 18. Crie nivel = 20. Se nivel >= 18: dê print('Acesso master').",
        tips: ["nivel = 20", "if nivel >= 18:", "    print('Acesso master')"],
        validate: (p, c, code) => code.includes('>=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('acesso'))
    },
    {
        id: '2.7', module: 2, title: "Menor ou Igual (<=)",
        objective: "Limite de tentativas! Crie tentativas = 2. Se tentativas <= 3: dê print('Permissao mantida').",
        tips: ["tentativas = 2", "if tentativas <= 3:", "    print('Permissao mantida')"],
        validate: (p, c, code) => code.includes('<=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('permissao'))
    },
    {
        id: '2.8', module: 2, title: "A Bifurcação: IF e ELSE",
        objective: "Crie senha = 999. Se senha == 123 dê print('Liberado'), senão (else:) dê print('Bloqueado').",
        tips: ["senha = 999", "if senha == 123:", "    print('Liberado')", "else:", "    print('Bloqueado')"],
        validate: (p, c, code) => code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('bloqueado'))
    },
    {
        id: '2.9', module: 2, title: "IF / ELSE com Input",
        objective: "Peça resposta = input('Sim ou Nao: '). Se resposta == 'Sim' dê print('Confirmado'), senão dê print('Cancelado').",
        tips: ["resposta = input('Sim ou Nao: ')", "if resposta == 'Sim':", "    print('Confirmado')", "else:", "    print('Cancelado')"],
        validate: (p, c, code) => code.includes('input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.10', module: 2, title: "Validação Numérica com IF / ELSE",
        objective: "Peça idade = int(input('Idade: ')). Se idade >= 18 dê print('Maior de idade'), senão dê print('Menor de idade').",
        tips: ["idade = int(input('Idade: '))", "if idade >= 18:", "    print('Maior de idade')", "else:", "    print('Menor de idade')"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.11', module: 2, title: "Três Caminhos: O ELIF",
        objective: "Crie pontos = 70. Se pontos > 80 dê print('Excelente'). elif pontos >= 50: dê print('Regular'). else: dê print('Reprovado').",
        tips: ["pontos = 70", "if pontos > 80:", "    print('Excelente')", "elif pontos >= 50:", "    print('Regular')", "else:", "    print('Reprovado')"],
        validate: (p, c, code) => code.includes('if') && code.includes('elif') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.12', module: 2, title: "Semáforo do Sistema (ELIF)",
        objective: "Peça sinal = input('Cor: '). Se for 'verde' dê print('Acelerar'), elif 'amarelo' print('Atencao'), senão print('Parar').",
        tips: ["sinal = input('Cor: ')", "if sinal == 'verde':", "    print('Acelerar')", "elif sinal == 'amarelo':", "    print('Atencao')", "else:", "    print('Parar')"],
        validate: (p, c, code) => code.includes('input') && code.includes('elif') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.13', module: 2, title: "Operador Lógico AND (E)",
        objective: "Ambas devem ser verdadeiras! Crie usuario = 'admin' e codigo = 777. Se usuario == 'admin' and codigo == 777: dê print('Super Acesso').",
        tips: ["usuario = 'admin'", "codigo = 777", "if usuario == 'admin' and codigo == 777:", "    print('Super Acesso')"],
        validate: (p, c, code) => code.includes('and') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('super'))
    },
    {
        id: '2.14', module: 2, title: "Operador Lógico OR (OU)",
        objective: "Basta uma ser verdadeira! Crie cargo = 'gerente'. Se cargo == 'gerente' or cargo == 'diretor': dê print('Autorizado').",
        tips: ["cargo = 'gerente'", "if cargo == 'gerente' or cargo == 'diretor':", "    print('Autorizado')"],
        validate: (p, c, code) => code.includes('or') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('autorizado'))
    },
    {
        id: '2.15', module: 2, title: "Operador NOT (NÃO)",
        objective: "Invertendo booleanos! Crie bloqueado = False. Se not bloqueado: dê print('Conexao ativa').",
        tips: ["bloqueado = False", "if not bloqueado:", "    print('Conexao ativa')"],
        validate: (p, c, code) => code.includes('not') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('conexao'))
    },
    {
        id: '2.16', module: 2, title: "Faixas Numéricas com AND",
        objective: "Verifique intervalo! Crie nota = 9. Se nota >= 7 and nota <= 10: dê print('Aprovado com merito').",
        tips: ["nota = 9", "if nota >= 7 and nota <= 10:", "    print('Aprovado com merito')"],
        validate: (p, c, code) => code.includes('and') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('aprovado'))
    },
    {
        id: '2.17', module: 2, title: "Condicionais Aninhadas (IF dentro de IF)",
        objective: "Crie login = True e nivel = 2. Se login: e dentro se nivel > 1: dê print('Painel VIP').",
        tips: ["login = True", "nivel = 2", "if login:", "    if nivel > 1:", "        print('Painel VIP')"],
        validate: (p, c, code) => (code.match(/if\b/g) || []).length >= 2 && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('vip'))
    },
    {
        id: '2.18', module: 2, title: "Decisão com Ações na Arena",
        objective: "Se direcao == 'direita', vire direita(90), senão esquerda(90). Depois ande frente(100).",
        tips: ["direcao = 'direita'", "if direcao == 'direita':", "    direita(90)", "else:", "    esquerda(90)", "frente(100)"],
        validate: (p, c, code) => code.includes('if') && code.includes('else') && (c.some(cmd => cmd.type === 'direita') || c.some(cmd => cmd.type === 'esquerda')) && c.some(cmd => cmd.type === 'frente')
    },
    {
        id: '2.19', module: 2, title: "Decisão com Cores e Manobra",
        objective: "Peça modo = input('Modo: '). Se for 'ataque', defina cor('red') e frente(120), senão cor('blue') e frente(60).",
        tips: ["modo = input('Modo: ')", "if modo == 'ataque':", "    cor('red')", "    frente(120)", "else:", "    cor('blue')", "    frente(60)"],
        validate: (p, c, code) => code.includes('input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'cor') && c.some(cmd => cmd.type === 'frente')
    },
    {
        id: '2.20', module: 2, title: "BOSS DO FIREWALL: O GUARDIÃO CONDICIONAL",
        objective: "Peça codigo = int(input('Codigo: ')). Se for 100: direita(90) e frente(150). elif for 50: esquerda(90) e frente(150). else: print('Codigo Invalido').",
        tips: ["codigo = int(input('Codigo: '))", "if codigo == 100:", "    direita(90)", "    frente(150)", "elif codigo == 50:", "    esquerda(90)", "    frente(150)", "else:", "    print('Codigo Invalido')"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('if') && code.includes('elif') && (c.some(cmd => cmd.type === 'frente') || c.some(cmd => cmd.type === 'print'))
    }
];

// ========================================================
// GERENCIADOR DE DADOS EM JSON (LOCALSTORAGE)
// ========================================================
const STORAGE_KEY = 'nexus_python_academy_data_v2';

const StorageManager = {
    getData() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try { return JSON.parse(raw); } catch(e) { /* fallback */ }
        }
        // Estado inicial com rivais para demonstração imediata do ranking
        const initial = {
            users: {
                "Trinity": { name: "Trinity", avatar: "⚡", currentMissionIndex: 26, completedMissions: 26, score: 2600, lastActive: Date.now() - 3600000 },
                "ZeroCool": { name: "ZeroCool", avatar: "🤖", currentMissionIndex: 17, completedMissions: 17, score: 1700, lastActive: Date.now() - 7200000 },
                "Neo": { name: "Neo", avatar: "🥷", currentMissionIndex: 11, completedMissions: 11, score: 1100, lastActive: Date.now() - 10800000 }
            },
            currentUser: null
        };
        this.saveData(initial);
        return initial;
    },

    saveData(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },

    getCurrentUser() {
        const data = this.getData();
        if (!data.currentUser || !data.users[data.currentUser]) return null;
        return data.users[data.currentUser];
    },

    loginOrCreateUser(name, avatar) {
        const data = this.getData();
        const trimmed = name.trim();
        if (!data.users[trimmed]) {
            data.users[trimmed] = {
                name: trimmed,
                avatar: avatar || "🥷",
                currentMissionIndex: 0,
                completedMissions: 0,
                score: 0,
                lastActive: Date.now()
            };
        } else {
            // Atualiza avatar e data de acesso se já existia
            if (avatar) data.users[trimmed].avatar = avatar;
            data.users[trimmed].lastActive = Date.now();
        }
        data.currentUser = trimmed;
        this.saveData(data);
        return data.users[trimmed];
    },

    saveUserProgress(missionIndexCompleted) {
        const data = this.getData();
        if (!data.currentUser || !data.users[data.currentUser]) return;
        const u = data.users[data.currentUser];
        
        if (missionIndexCompleted >= u.currentMissionIndex) {
            u.currentMissionIndex = missionIndexCompleted + 1;
            u.completedMissions = u.currentMissionIndex;
            u.score = u.completedMissions * 100;
        }
        u.lastActive = Date.now();
        this.saveData(data);
    },

    logout() {
        const data = this.getData();
        data.currentUser = null;
        this.saveData(data);
    }
};

// ========================================================
// CONTROLE DE ESTADO DA APLICAÇÃO
// ========================================================
let currentUser = null;
let activeTab = 'mod1'; // 'mod1' | 'mod2' | 'rank'
let selectedMissionIndex = 0; // Missão sendo visualizada no momento

const parser = new Parser();
const engine = new Engine('arena');

// Elementos da UI
const authModal = document.getElementById('auth-modal');
const authForm = document.getElementById('auth-form');
const authNicknameInput = document.getElementById('auth-nickname');
const avatarPicker = document.getElementById('avatar-picker');
const savedProfilesSection = document.getElementById('saved-profiles-section');
const profileChips = document.getElementById('profile-chips');

const navUserAvatar = document.getElementById('nav-user-avatar');
const navUserName = document.getElementById('nav-user-name');
const navUserLevel = document.getElementById('nav-user-level');
const navXpPercent = document.getElementById('nav-xp-percent');
const xpFill = document.getElementById('xp-fill');

const tabBtnMod1 = document.getElementById('tab-btn-mod1');
const tabBtnMod2 = document.getElementById('tab-btn-mod2');
const tabBtnRank = document.getElementById('tab-btn-rank');

const tabContentMissions = document.getElementById('tab-content-missions');
const tabContentRank = document.getElementById('tab-content-rank');

const missionBadge = document.getElementById('mission-badge');
const missionTitle = document.getElementById('mission-title');
const missionObjective = document.getElementById('mission-objective');
const trackTitle = document.getElementById('track-title');
const trackCounter = document.getElementById('track-counter');
const achievementList = document.getElementById('achievement-list');

const btnPrevMission = document.getElementById('btn-prev-mission');
const btnNextMission = document.getElementById('btn-next-mission');
const currentStageIndicator = document.getElementById('current-stage-indicator');
const codeEditor = document.getElementById('code-editor');
const consoleOutput = document.getElementById('console-output');

const bossName = document.getElementById('boss-name');
const bossHpText = document.getElementById('boss-hp-text');
const bossHpBar = document.getElementById('boss-hp');

// ========================================================
// SISTEMA DE AUTENTICAÇÃO / CADASTRO DO ALUNO
// ========================================================
let selectedAvatar = '🥷';

avatarPicker.addEventListener('click', (e) => {
    const btn = e.target.closest('.avatar-opt');
    if (!btn) return;
    document.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedAvatar = btn.getAttribute('data-avatar');
});

function renderSavedProfileChips() {
    const data = StorageManager.getData();
    const names = Object.keys(data.users);
    if (names.length === 0) {
        savedProfilesSection.style.display = 'none';
        return;
    }
    savedProfilesSection.style.display = 'block';
    profileChips.innerHTML = '';
    names.forEach(name => {
        const u = data.users[name];
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'profile-chip';
        chip.innerHTML = `<span>${u.avatar}</span> <strong>${u.name}</strong> (${u.completedMissions}/40)`;
        chip.addEventListener('click', () => {
            selectUser(u.name, u.avatar);
        });
        profileChips.appendChild(chip);
    });
}

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = authNicknameInput.value.trim();
    if (!name) return;
    selectUser(name, selectedAvatar);
});

function selectUser(name, avatar) {
    currentUser = StorageManager.loginOrCreateUser(name, avatar);
    authModal.classList.add('hidden');
    
    // Define a missão atual baseada no progresso salvo
    selectedMissionIndex = Math.min(currentUser.currentMissionIndex, missions.length - 1);
    
    // Se o aluno já estiver no módulo 2, abre automaticamente a aba do Módulo 2
    if (selectedMissionIndex >= 20) {
        switchTab('mod2');
    } else {
        switchTab('mod1');
    }

    updateUI();
    logConsole(`Bem-vindo, ${currentUser.name}! Progresso carregado: ${currentUser.completedMissions} missões concluídas.`, 'success');
}

document.getElementById('btn-switch-user').addEventListener('click', () => {
    authNicknameInput.value = '';
    renderSavedProfileChips();
    authModal.classList.remove('hidden');
});

document.getElementById('btn-open-ranking').addEventListener('click', () => {
    switchTab('rank');
});

// ========================================================
// SISTEMA DE NAVEGAÇÃO POR GUIAS (TABS)
// ========================================================
function switchTab(tabId) {
    activeTab = tabId;
    [tabBtnMod1, tabBtnMod2, tabBtnRank].forEach(b => b.classList.remove('active'));

    if (tabId === 'mod1') {
        tabBtnMod1.classList.add('active');
        tabContentMissions.style.display = 'flex';
        tabContentRank.style.display = 'none';
        trackTitle.innerText = "Trilha: Módulo 1 (Variáveis e Input)";
        
        // Se a missão selecionada for do módulo 2, ajusta para a última aberta do módulo 1
        if (selectedMissionIndex >= 20) {
            selectedMissionIndex = Math.min(currentUser ? currentUser.currentMissionIndex : 0, 19);
        }
    } else if (tabId === 'mod2') {
        tabBtnMod2.classList.add('active');
        tabContentMissions.style.display = 'flex';
        tabContentRank.style.display = 'none';
        trackTitle.innerText = "Trilha: Módulo 2 (Condicionais If/Else)";
        
        // Se a missão selecionada for do módulo 1, ajusta para o módulo 2
        if (selectedMissionIndex < 20) {
            selectedMissionIndex = Math.max(20, Math.min(currentUser ? currentUser.currentMissionIndex : 20, missions.length - 1));
        }
    } else if (tabId === 'rank') {
        tabBtnRank.classList.add('active');
        tabContentMissions.style.display = 'none';
        tabContentRank.style.display = 'flex';
        renderRankingTable();
    }
    updateUI();
}

tabBtnMod1.addEventListener('click', () => switchTab('mod1'));
tabBtnMod2.addEventListener('click', () => switchTab('mod2'));
tabBtnRank.addEventListener('click', () => switchTab('rank'));

// Navegação por setas (Anterior / Próxima)
btnPrevMission.addEventListener('click', () => {
    if (selectedMissionIndex > 0) {
        selectedMissionIndex--;
        const m = missions[selectedMissionIndex];
        if (m.module === 1 && activeTab !== 'mod1') switchTab('mod1');
        else if (m.module === 2 && activeTab !== 'mod2') switchTab('mod2');
        else updateUI();
    }
});

btnNextMission.addEventListener('click', () => {
    const maxUnlocked = currentUser ? currentUser.currentMissionIndex : 0;
    if (selectedMissionIndex < maxUnlocked && selectedMissionIndex < missions.length - 1) {
        selectedMissionIndex++;
        const m = missions[selectedMissionIndex];
        if (m.module === 1 && activeTab !== 'mod1') switchTab('mod1');
        else if (m.module === 2 && activeTab !== 'mod2') switchTab('mod2');
        else updateUI();
    }
});

// ========================================================
// RENDERIZAÇÃO DA INTERFACE (UI)
// ========================================================
function updateUI() {
    if (!currentUser) return;

    // Atualiza cabeçalho do aluno
    navUserAvatar.innerText = currentUser.avatar;
    navUserName.innerText = currentUser.name;
    const currentModule = selectedMissionIndex < 20 ? 1 : 2;
    navUserLevel.innerText = `Nível ${currentModule} // ${selectedMissionIndex < 20 ? 'Operador de Variáveis' : 'Mestre Condicional'}`;

    const totalPct = Math.round((currentUser.completedMissions / missions.length) * 100);
    navXpPercent.innerText = `${totalPct}% (${currentUser.completedMissions}/40)`;
    xpFill.style.width = `${totalPct}%`;

    // Atualiza Card da Missão
    const m = missions[selectedMissionIndex];
    missionBadge.innerText = `NÍVEL ${m.id}`;
    currentStageIndicator.innerText = `NÍVEL ${m.id}`;
    missionTitle.innerText = m.title;
    missionObjective.innerText = m.objective;

    // Setas de navegação
    btnPrevMission.disabled = (selectedMissionIndex === 0);
    const maxUnlocked = currentUser.currentMissionIndex;
    btnNextMission.disabled = (selectedMissionIndex >= maxUnlocked || selectedMissionIndex >= missions.length - 1);

    // Atualiza Boss e Barra de Vida
    if (selectedMissionIndex < 20) {
        bossName.innerText = "FIREWALL DO SISTEMA (MÓDULO 1)";
        const hp = Math.max(0, 100 - (Math.min(currentUser.completedMissions, 20) * 5));
        bossHpText.innerText = `${hp}%`;
        bossHpBar.style.width = `${hp}%`;
    } else {
        bossName.innerText = "GUARDIÃO CONDICIONAL (MÓDULO 2)";
        const completedInMod2 = Math.max(0, currentUser.completedMissions - 20);
        const hp = Math.max(0, 100 - (completedInMod2 * 5));
        bossHpText.innerText = `${hp}%`;
        bossHpBar.style.width = `${hp}%`;
    }

    // Renderiza Lista de Missões da Guia Atual
    renderMissionsList();
}

function renderMissionsList() {
    achievementList.innerHTML = '';
    const isMod1 = (activeTab === 'mod1');
    const startIdx = isMod1 ? 0 : 20;
    const endIdx = isMod1 ? 20 : 40;
    
    let completedInCurrentTab = 0;
    const maxUnlocked = currentUser ? currentUser.currentMissionIndex : 0;

    for (let i = startIdx; i < endIdx; i++) {
        const m = missions[i];
        const isCompleted = (i < currentUser.completedMissions);
        const isUnlocked = (i <= maxUnlocked);
        const isSelected = (i === selectedMissionIndex);

        if (isCompleted) completedInCurrentTab++;

        const li = document.createElement('li');
        li.className = 'achievement-item';
        
        if (isCompleted) li.classList.add('completed');
        if (isUnlocked) li.classList.add('unlocked');
        else li.classList.add('locked');
        if (isSelected) li.classList.add('active');

        let icon = isCompleted ? '✅' : (isUnlocked ? '🔓' : '🔒');
        li.innerHTML = `<span>${icon}</span> <span><strong>${m.id}</strong> - ${m.title}</span>`;

        if (isUnlocked) {
            li.addEventListener('click', () => {
                selectedMissionIndex = i;
                updateUI();
            });
        }

        achievementList.appendChild(li);
    }

    trackCounter.innerText = `${completedInCurrentTab} / 20`;
}

// ========================================================
// RENDERIZAÇÃO DO RANKING DOS ALUNOS
// ========================================================
function renderRankingTable() {
    const data = StorageManager.getData();
    const tbody = document.getElementById('ranking-table-body');
    tbody.innerHTML = '';

    const sortedUsers = Object.values(data.users).sort((a, b) => {
        if (b.completedMissions !== a.completedMissions) {
            return b.completedMissions - a.completedMissions;
        }
        return b.score - a.score;
    });

    sortedUsers.forEach((u, index) => {
        const tr = document.createElement('tr');
        if (currentUser && u.name === currentUser.name) {
            tr.classList.add('current-user-row');
        }

        let badge = `${index + 1}º`;
        if (index === 0) badge = '🥇';
        else if (index === 1) badge = '🥈';
        else if (index === 2) badge = '🥉';

        tr.innerHTML = `
            <td><span class="rank-badge">${badge}</span></td>
            <td>${u.avatar} <strong>${u.name}</strong></td>
            <td>${u.completedMissions}/40</td>
            <td><span style="color: var(--neon-green)">${u.score || (u.completedMissions * 100)} XP</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Exportar JSON com o banco de dados dos alunos
document.getElementById('btn-export-json').addEventListener('click', () => {
    const data = StorageManager.getData();
    const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", str);
    dlAnchor.setAttribute("download", `nexus_academy_ranking_${Date.now()}.json`);
    dlAnchor.click();
});

// ========================================================
// TERMINAL & EXECUÇÃO DO SCRIPT PYTHON
// ========================================================
function logConsole(msg, type = 'normal') {
    const div = document.createElement('div');
    div.innerText = `> ${msg}`;
    if (type === 'error') div.className = 'console-error';
    if (type === 'success') div.className = 'console-success';
    if (type === 'print') div.style.color = '#fff';
    consoleOutput.appendChild(div);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

document.getElementById('btn-clear-console').addEventListener('click', () => {
    consoleOutput.innerHTML = '';
});

document.getElementById('btn-reset-code').addEventListener('click', () => {
    codeEditor.value = '';
});

document.getElementById('run-btn').addEventListener('click', () => {
    if (engine.isAnimating) return;

    const code = codeEditor.value;
    logConsole("Compilando e Executando Script...", "normal");

    try {
        const commands = parser.parse(code);
        
        if (commands.length === 0) {
            logConsole("Nenhum comando reconhecido ou executado.", "error");
            return;
        }
        
        const onPrint = (msg) => logConsole(`[Print] ${msg}`, 'print');

        engine.execute(commands, (points) => {
            logConsole("Execução finalizada.", "normal");
            
            const currentMission = missions[selectedMissionIndex];
            if (currentMission.validate(points, commands, code)) {
                logConsole(`SUCESSO! Nível ${currentMission.id} concluído com perfeição!`, "success");
                
                // Limpa o terminal de código após acerto
                codeEditor.value = '';
                completeCurrentMission();
            } else {
                logConsole("FALHA: O script não atendeu ao objetivo da missão. Tente novamente!", "error");
            }
        }, onPrint);

    } catch (e) {
        logConsole(e.message, "error");
    }
});

function completeCurrentMission() {
    const overlay = document.getElementById('success-overlay');
    const bossContainer = document.querySelector('.boss-container');
    const xpText = document.getElementById('xp-gain-text');
    
    const isLastOfMod1 = (selectedMissionIndex === 19);
    const isLastOfMod2 = (selectedMissionIndex === 39);

    if (xpText) {
        if (isLastOfMod1) xpText.innerText = "💥 FIREWALL DESTRUÍDO! MÓDULO 2 DESBLOQUEADO!";
        else if (isLastOfMod2) xpText.innerText = "👑 GUARDIÃO DERROTADO! VOCÊ VENCEU A NEXUS ACADEMY!";
        else xpText.innerText = "+ 100 XP | Conhecimento Absorvido!";
    }

    if (overlay) overlay.classList.add('active');
    if (bossContainer) bossContainer.classList.add('shake');

    setTimeout(() => {
        if (bossContainer) bossContainer.classList.remove('shake');
    }, 500);

    setTimeout(() => {
        if (overlay) overlay.classList.remove('active');

        // Salva o progresso do aluno no JSON / LocalStorage
        StorageManager.saveUserProgress(selectedMissionIndex);
        currentUser = StorageManager.getCurrentUser();

        // Se estava na missão de fronteira, avança automaticamente
        if (selectedMissionIndex < missions.length - 1) {
            selectedMissionIndex++;
            // Se acabou de passar para o Módulo 2, muda de guia automaticamente
            if (selectedMissionIndex === 20 && activeTab !== 'mod2') {
                switchTab('mod2');
            }
        }

        updateUI();
    }, 2200);
}

// ========================================================
// INICIALIZAÇÃO
// ========================================================
function init() {
    const savedUser = StorageManager.getCurrentUser();
    if (savedUser) {
        currentUser = savedUser;
        authModal.classList.add('hidden');
        selectedMissionIndex = Math.min(currentUser.currentMissionIndex, missions.length - 1);
        if (selectedMissionIndex >= 20) activeTab = 'mod2';
        updateUI();
    } else {
        renderSavedProfileChips();
        authModal.classList.remove('hidden');
    }
}

init();
