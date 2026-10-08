const missions = [
    {
        id: 1,
        title: "Hello World",
        objective: "Sua primeira invasão! Use o comando print para testar a comunicação.",
        tips: ["print('Hello World')"],
        validate: (points, commands) => commands.some(c => c.type === 'print')
    },
    {
        id: 2,
        title: "Variáveis de Acesso",
        objective: "Crie uma variável 'senha' com o valor 1234 e dê print nela.",
        tips: ["senha = 1234", "print(senha)"],
        validate: (points, commands) => commands.some(c => c.type === 'print' && c.value === 1234)
    },
    {
        id: 3,
        title: "Controle do Avatar",
        objective: "O avatar está online! Mova para frente 100 pixels e vire à direita 90 graus.",
        tips: ["frente(100)", "direita(90)"],
        validate: (points, commands) => commands.some(c => c.type === 'frente' && c.value === 100) && commands.some(c => c.type === 'direita' && c.value === 90)
    },
    {
        id: 4,
        title: "Loop de Injeção",
        objective: "Economize código! Use o 'for' do Python para desenhar um quadrado (4 lados de 100px). Preste atenção na indentação (espaços)!",
        tips: ["for i in range(4):", "    frente(100)", "    direita(90)"],
        validate: (points, commands) => {
            if (points.length < 5) return false;
            const start = points[0];
            const end = points[points.length - 1];
            return Math.hypot(start.x - end.x, start.y - end.y) < 10 && commands.filter(c => c.type === 'frente').length >= 4;
        }
    },
    {
        id: 5,
        title: "Sistemas Condicionais",
        objective: "Se a variável 'nivel' for 5, ande 150px. Defina nivel = 5 e faça o if.",
        tips: ["nivel = 5", "if nivel == 5:", "    frente(150)"],
        validate: (points, commands) => commands.some(c => c.type === 'frente' && c.value === 150)
    },
    {
        id: 6,
        title: "Funções de Scripting",
        objective: "Crie uma função 'atacar()' que mude a cor para 'red' e ande 50px. Depois, chame-a.",
        tips: ["def atacar():", "    cor('red')", "    frente(50)", "atacar()"],
        validate: (points, commands) => commands.some(c => c.type === 'cor' && c.value === 'red') && commands.some(c => c.type === 'frente' && c.value === 50)
    },
    {
        id: 7,
        title: "Arrays de Dados (Listas)",
        objective: "Crie a lista passos = [50, 100]. Use 'for p in passos:' para andar essas distâncias.",
        tips: ["passos = [50, 100]", "for p in passos:", "    frente(p)"],
        validate: (points, commands) => {
            const moves = commands.filter(c => c.type === 'frente').map(c => c.value);
            return moves.includes(50) && moves.includes(100);
        }
    },
    {
        id: 8,
        title: "Desafio Final: O Pentagrama",
        objective: "Mostre o nível avançado: Desenhe uma estrela de 5 pontas vermelha usando loop.",
        tips: ["cor('red')", "for i in range(5):", "    frente(150)", "    direita(144)"],
        validate: (points, commands) => {
            if (points.length < 6) return false;
            const start = points[0];
            const end = points[points.length - 1];
            return Math.hypot(start.x - end.x, start.y - end.y) < 15 && commands.filter(c => c.type === 'frente').length >= 5;
        }
    }
];

let currentMissionIndex = 0;
let xp = 0;
let level = 1;
let bossHp = 100;

const parser = new Parser();
const engine = new Engine('arena');

// UI Elements
const uiTitle = document.getElementById('mission-title');
const uiObjective = document.getElementById('mission-objective');
const uiTips = document.getElementById('mission-tips');
const uiConsole = document.getElementById('console-output');
const uiXpFill = document.getElementById('xp-fill');
const uiLevel = document.getElementById('level-display');
const uiBossHp = document.getElementById('boss-hp');
const uiAchievementList = document.getElementById('achievement-list');

// Initialize Achievements List
function initAchievements() {
    uiAchievementList.innerHTML = '';
    missions.forEach((m, i) => {
        const li = document.createElement('li');
        li.id = `achiev-${i}`;
        li.className = i === 0 ? 'unlocked' : 'locked';
        li.innerText = i === 0 ? `🔓 ${m.title}` : `🔒 ${m.title}`;
        uiAchievementList.appendChild(li);
    });
}
initAchievements();

function updateUI() {
    if (currentMissionIndex >= missions.length) {
        uiTitle.innerText = "Sistema Dominado!";
        uiObjective.innerText = "Você derrotou o Firewall usando Python e hackeou a Nexus Academy.";
        uiTips.innerHTML = "";
        return;
    }

    const mission = missions[currentMissionIndex];
    uiTitle.innerText = `Missão ${mission.id}: ${mission.title}`;
    uiObjective.innerText = mission.objective;
    
    uiTips.innerHTML = "";
    mission.tips.forEach(tip => {
        const li = document.createElement('li');
        li.innerText = tip;
        li.style.whiteSpace = "pre"; // Preserva a indentação visual
        uiTips.appendChild(li);
    });

    uiXpFill.style.width = `${xp}%`;
    uiLevel.innerText = `Lvl: ${level}`;
    uiBossHp.style.width = `${bossHp}%`;
    
    // Atualiza a lista lateral
    for(let i=0; i<missions.length; i++){
        const li = document.getElementById(`achiev-${i}`);
        if(i < currentMissionIndex) {
            li.className = 'unlocked';
            li.innerText = `✅ ${missions[i].title}`;
        } else if (i === currentMissionIndex) {
            li.className = 'unlocked';
            li.innerText = `🔓 ${missions[i].title}`;
        } else {
            li.className = 'locked';
            li.innerText = `🔒 ${missions[i].title}`;
        }
    }
}

function logConsole(msg, type = 'normal') {
    const div = document.createElement('div');
    div.innerText = `> ${msg}`;
    if (type === 'error') div.className = 'console-error';
    if (type === 'success') div.className = 'console-success';
    if (type === 'print') div.style.color = '#fff';
    uiConsole.appendChild(div);
    uiConsole.scrollTop = uiConsole.scrollHeight;
}

document.getElementById('run-btn').addEventListener('click', () => {
    if (engine.isAnimating) return;

    const code = document.getElementById('code-editor').value;
    logConsole("Compilando Python...");

    try {
        const commands = parser.parse(code);
        
        if (commands.length === 0) {
            logConsole("Nenhum comando válido encontrado.", "error");
            return;
        }

        logConsole("Iniciando execução...", "normal");
        
        const onPrint = (msg) => logConsole(`[Print] ${msg}`, 'print');

        engine.execute(commands, (points) => {
            logConsole("Execução finalizada.", "normal");
            
            if (currentMissionIndex < missions.length) {
                const mission = missions[currentMissionIndex];
                if (mission.validate(points, commands)) {
                    logConsole(`SUCESSO: Missão ${mission.id} concluída!`, "success");
                    
                    // Limpa o editor de código quando acertar
                    document.getElementById('code-editor').value = '';
                    
                    completeMission();
                } else {
                    logConsole("FALHA: O código não atendeu ao objetivo da missão.", "error");
                }
            }
        }, onPrint);

    } catch (e) {
        logConsole(e.message, "error");
    }
});

function completeMission() {
    const stepXp = 100 / missions.length;
    
    // Animação de sucesso
    const overlay = document.getElementById('success-overlay');
    const bossContainer = document.querySelector('.boss-container');
    document.getElementById('xp-gain-text').innerText = `+ ${stepXp.toFixed(0)} XP | Dano no Firewall!`;
    
    if (overlay) overlay.classList.add('active');
    if (bossContainer) bossContainer.classList.add('shake');
    
    setTimeout(() => { 
        if (bossContainer) bossContainer.classList.remove('shake'); 
    }, 500);

    setTimeout(() => {
        if (overlay) overlay.classList.remove('active');
        
        xp += stepXp;
        if (xp > 99) xp = 100;
        
        bossHp -= stepXp;
        if (bossHp < 0) bossHp = 0;
        
        currentMissionIndex++;
        level = Math.floor(currentMissionIndex / 2) + 1;
        
        updateUI();
    }, 2500);
}

// Init
updateUI();
