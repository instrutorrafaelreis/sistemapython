const missions = [
    {
        id: '1.1', title: "Hello World",
        objective: "Sua primeira invasão! Use o comando print para testar a comunicação.",
        tips: ["print('Hello World')"],
        validate: (p, c, code) => c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.2', title: "Dados Textuais (Strings)",
        objective: "Crie uma variável chamada 'nome' e guarde um texto (string) nela. Depois dê print(nome).",
        tips: ["nome = 'Hacker'", "print(nome)"],
        validate: (p, c, code) => code.includes('nome') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.3', title: "Dados Numéricos (Int)",
        objective: "Crie uma variável 'idade' e atribua um número inteiro (sem aspas). Dê print nela.",
        tips: ["idade = 25", "print(idade)"],
        validate: (p, c, code) => code.includes('idade') && c.some(cmd => cmd.type === 'print' && !isNaN(parseInt(cmd.value)))
    },
    {
        id: '1.4', title: "Ponto Flutuante (Float)",
        objective: "Crie uma variável 'versao' com um número decimal (ex: 1.5). Dê print nela.",
        tips: ["versao = 1.5", "print(versao)"],
        validate: (p, c, code) => code.includes('versao') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('.'))
    },
    {
        id: '1.5', title: "Verdadeiro ou Falso (Bool)",
        objective: "Crie uma variável 'acesso' e defina como True (maiúsculo no Python!). Dê print.",
        tips: ["acesso = True", "print(acesso)"],
        validate: (p, c, code) => code.includes('acesso') && code.includes('True') && c.some(cmd => cmd.type === 'print' && cmd.value === 'true')
    },
    {
        id: '1.6', title: "Inspecionando Tipos",
        objective: "No Python usamos type() para ver o tipo de um dado. Dê print no tipo de um número inteiro.",
        tips: ["print(type(10))"],
        validate: (p, c, code) => code.includes('type') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('int'))
    },
    {
        id: '1.7', title: "Múltiplas Variáveis",
        objective: "Crie duas variáveis 'a' e 'b'. Dê print nas duas.",
        tips: ["a = 10", "b = 20", "print(a)", "print(b)"],
        validate: (p, c, code) => c.filter(cmd => cmd.type === 'print').length >= 2
    },
    {
        id: '1.8', title: "Operações: Soma",
        objective: "Crie uma variável 'soma' que guarde o resultado de 5 + 5. Dê print no resultado.",
        tips: ["soma = 5 + 5", "print(soma)"],
        validate: (p, c, code) => code.includes('+') && c.some(cmd => cmd.type === 'print' && cmd.value == 10)
    },
    {
        id: '1.9', title: "Concatenação",
        objective: "Junte textos! Crie nome = 'Maria', e dê print('Ola ' + nome).",
        tips: ["nome = 'Maria'", "print('Ola ' + nome)"],
        validate: (p, c, code) => code.includes('+') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('Ola'))
    },
    {
        id: '1.10', title: "Capturando Input",
        objective: "Use a função input() para pedir o nome do usuário e dê print no resultado.",
        tips: ["nome = input('Qual seu nome?')", "print(nome)"],
        validate: (p, c, code) => code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.11', title: "Cuidado com o Input",
        objective: "Tudo que vem do input() é String! Peça um input de idade e dê print(type(idade)).",
        tips: ["idade = input('Sua idade:')", "print(type(idade))"],
        validate: (p, c, code) => code.includes('input') && code.includes('type') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('str'))
    },
    {
        id: '1.12', title: "O Problema Matemático",
        objective: "Tente somar duas strings. Faça a = '5', b = '5', e dê print(a + b). Veja o resultado bizarrro!",
        tips: ["a = '5'", "b = '5'", "print(a + b)"],
        validate: (p, c, code) => c.some(cmd => cmd.type === 'print' && cmd.value === '55')
    },
    {
        id: '1.13', title: "Conversão: int()",
        objective: "Para somar números vindos de textos, converta com int(). Dê print(int('5') + int('5')).",
        tips: ["print(int('5') + int('5'))"],
        validate: (p, c, code) => code.includes('int') && c.some(cmd => cmd.type === 'print' && cmd.value == 10)
    },
    {
        id: '1.14', title: "Input com Conversão",
        objective: "Peça um número usando input(), converta para int() e guarde na variável 'x'. Dê print(x + 10).",
        tips: ["texto = input('Número:')", "x = int(texto)", "print(x + 10)"],
        validate: (p, c, code) => code.includes('int') && code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.15', title: "Input e int() de uma vez",
        objective: "Você pode juntar os dois: x = int(input('Número:')). Dê print no tipo(x) para provar que é int.",
        tips: ["x = int(input('Número:'))", "print(type(x))"],
        validate: (p, c, code) => code.includes('int(input') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('int'))
    },
    {
        id: '1.16', title: "Calculadora de Soma",
        objective: "Peça dois inputs e converta ambos para int. Some e dê print no resultado.",
        tips: ["a = int(input('N1:'))", "b = int(input('N2:'))", "print(a + b)"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('+') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.17', title: "Conversão: float()",
        objective: "E se o usuário digitar 2.5? Use float()! Peça um peso com float(input()) e dê print(peso).",
        tips: ["peso = float(input('Peso:'))", "print(peso)"],
        validate: (p, c, code) => code.includes('float') && code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.18', title: "Conversão: str()",
        objective: "Você não pode concatenar string com número! Faça: print('Meu nível é ' + str(99)).",
        tips: ["print('Meu nível é ' + str(99))"],
        validate: (p, c, code) => code.includes('str') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('99'))
    },
    {
        id: '1.19', title: "Desafio Variáveis",
        objective: "Crie nome (string), idade (int convertido), altura (float convertido). Dê print neles.",
        tips: ["n = input()", "i = int(input())", "a = float(input())", "print(n, i, a)"],
        validate: (p, c, code) => code.includes('int') && code.includes('float') && code.includes('input')
    },
    {
        id: '1.20', title: "BOSS FINAL DAS VARIÁVEIS",
        objective: "O Firewall exige: Leia uma senha(input), converta para int, some 10 e ande para a frente com esse valor!",
        tips: ["senha = int(input('Senha (digite 50):'))", "frente(senha + 10)"],
        validate: (p, c, code) => code.includes('int(input') && c.some(cmd => cmd.type === 'frente')
    }
];

let currentMissionIndex = 0;
let xp = 0;
let level = 1;
let bossHp = 100;

const parser = new Parser();
const engine = new Engine('arena');

const uiTitle = document.getElementById('mission-title');
const uiObjective = document.getElementById('mission-objective');
const uiConsole = document.getElementById('console-output');
const uiXpFill = document.getElementById('xp-fill');
const uiLevel = document.getElementById('level-display');
const uiBossHp = document.getElementById('boss-hp');
const uiAchievementList = document.getElementById('achievement-list');

function initAchievements() {
    uiAchievementList.innerHTML = '';
    missions.forEach((m, i) => {
        const li = document.createElement('li');
        li.id = `achiev-${i}`;
        li.className = i === 0 ? 'unlocked' : 'locked';
        li.innerText = i === 0 ? `🔓 Nível ${m.id}` : `🔒 Nível ${m.id}`;
        li.title = m.title;
        uiAchievementList.appendChild(li);
    });
}
initAchievements();

function updateUI() {
    if (currentMissionIndex >= missions.length) {
        uiTitle.innerText = "Módulo Concluído!";
        uiObjective.innerText = "Você dominou as Variáveis, Tipos de Dados e Inputs no Python!";
        return;
    }

    const mission = missions[currentMissionIndex];
    uiTitle.innerText = `Nível ${mission.id}: ${mission.title}`;
    uiObjective.innerText = mission.objective;

    uiXpFill.style.width = `${xp}%`;
    uiLevel.innerText = `Lvl: ${level}`;
    uiBossHp.style.width = `${bossHp}%`;
    
    for(let i=0; i<missions.length; i++){
        const li = document.getElementById(`achiev-${i}`);
        if(i < currentMissionIndex) {
            li.className = 'unlocked';
            li.innerText = `✅ ${missions[i].id} - ${missions[i].title}`;
        } else if (i === currentMissionIndex) {
            li.className = 'unlocked';
            li.innerText = `🔓 ${missions[i].id} - ${missions[i].title}`;
        } else {
            li.className = 'locked';
            li.innerText = `🔒 ${missions[i].id} - ${missions[i].title}`;
        }
    }
    
    // Auto-scroll da lista de conquistas
    const currentAchiev = document.getElementById(`achiev-${currentMissionIndex}`);
    if (currentAchiev) {
        currentAchiev.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    logConsole("Executando Script...");

    try {
        const commands = parser.parse(code);
        
        if (commands.length === 0) {
            logConsole("Nenhum comando válido encontrado.", "error");
            return;
        }
        
        const onPrint = (msg) => logConsole(`[Print] ${msg}`, 'print');

        engine.execute(commands, (points) => {
            logConsole("Processo finalizado.", "normal");
            
            if (currentMissionIndex < missions.length) {
                const mission = missions[currentMissionIndex];
                // Passa points, commands e code
                if (mission.validate(points, commands, code)) {
                    logConsole(`SUCESSO: Nível ${mission.id} concluído!`, "success");
                    
                    document.getElementById('code-editor').value = '';
                    completeMission();
                } else {
                    logConsole("FALHA: Seu código não atendeu ao objetivo exato da missão.", "error");
                }
            }
        }, onPrint);

    } catch (e) {
        logConsole(e.message, "error");
    }
});

function completeMission() {
    const stepXp = 100 / missions.length;
    
    const overlay = document.getElementById('success-overlay');
    const bossContainer = document.querySelector('.boss-container');
    const xpText = document.getElementById('xp-gain-text');
    if (xpText) xpText.innerText = `+ ${stepXp.toFixed(1)} XP | Conhecimento Absorvido!`;
    
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
        level = Math.floor(currentMissionIndex / 3) + 1;
        
        updateUI();
    }, 2500);
}

// Init
updateUI();
