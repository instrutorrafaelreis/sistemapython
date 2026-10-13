const missions = [
    // ==========================================
    // MÓDULO 1: VARIÁVEIS, TIPOS E INPUTS (1.1 - 1.20)
    // ==========================================
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
        objective: "Tente somar duas strings. Faça a = '5', b = '5', e dê print(a + b). Veja o resultado bizarro!",
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
    },

    // ==========================================
    // MÓDULO 2: CONDICIONAIS (IF, ELIF, ELSE) (2.1 - 2.20)
    // ==========================================
    {
        id: '2.1', title: "O Primeiro IF",
        objective: "Teste a tomada de decisão! Crie porta_aberta = True. Se for True, dê print('Passagem liberada').",
        tips: ["porta_aberta = True", "if porta_aberta:", "    print('Passagem liberada')"],
        validate: (p, c, code) => code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('passagem'))
    },
    {
        id: '2.2', title: "Comparação de Igualdade (==)",
        objective: "No Python usamos == para checar igualdade. Crie chave = 'nexus'. Se chave == 'nexus': dê print('Chave aceita').",
        tips: ["chave = 'nexus'", "if chave == 'nexus':", "    print('Chave aceita')"],
        validate: (p, c, code) => code.includes('==') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('chave'))
    },
    {
        id: '2.3', title: "Comparação de Diferença (!=)",
        objective: "Use != para verificar se é diferente. Crie status = 'perigo'. Se status != 'seguro': dê print('Alerta de intruso').",
        tips: ["status = 'perigo'", "if status != 'seguro':", "    print('Alerta de intruso')"],
        validate: (p, c, code) => code.includes('!=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('alerta'))
    },
    {
        id: '2.4', title: "Maior Que (>)",
        objective: "Verifique números! Crie energia = 80. Se energia > 50: dê print('Sistemas operando').",
        tips: ["energia = 80", "if energia > 50:", "    print('Sistemas operando')"],
        validate: (p, c, code) => code.includes('>') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('sistemas'))
    },
    {
        id: '2.5', title: "Menor Que (<)",
        objective: "Alerta de emergência! Crie vida = 15. Se vida < 20: dê print('Vida critica').",
        tips: ["vida = 15", "if vida < 20:", "    print('Vida critica')"],
        validate: (p, c, code) => code.includes('<') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('vida'))
    },
    {
        id: '2.6', title: "Maior ou Igual (>=)",
        objective: "O nível mínimo é 18. Crie nivel = 20. Se nivel >= 18: dê print('Acesso master').",
        tips: ["nivel = 20", "if nivel >= 18:", "    print('Acesso master')"],
        validate: (p, c, code) => code.includes('>=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('acesso'))
    },
    {
        id: '2.7', title: "Menor ou Igual (<=)",
        objective: "Limite de tentativas! Crie tentativas = 2. Se tentativas <= 3: dê print('Permissao mantida').",
        tips: ["tentativas = 2", "if tentativas <= 3:", "    print('Permissao mantida')"],
        validate: (p, c, code) => code.includes('<=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('permissao'))
    },
    {
        id: '2.8', title: "A Bifurcação: IF e ELSE",
        objective: "Crie senha = 999. Se senha == 123 dê print('Liberado'), senão (else:) dê print('Bloqueado').",
        tips: ["senha = 999", "if senha == 123:", "    print('Liberado')", "else:", "    print('Bloqueado')"],
        validate: (p, c, code) => code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('bloqueado'))
    },
    {
        id: '2.9', title: "IF / ELSE com Input",
        objective: "Peça resposta = input('Sim ou Nao: '). Se resposta == 'Sim' dê print('Confirmado'), senão dê print('Cancelado').",
        tips: ["resposta = input('Sim ou Nao: ')", "if resposta == 'Sim':", "    print('Confirmado')", "else:", "    print('Cancelado')"],
        validate: (p, c, code) => code.includes('input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.10', title: "Validação Numérica com IF / ELSE",
        objective: "Peça idade = int(input('Idade: ')). Se idade >= 18 dê print('Maior de idade'), senão dê print('Menor de idade').",
        tips: ["idade = int(input('Idade: '))", "if idade >= 18:", "    print('Maior de idade')", "else:", "    print('Menor de idade')"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.11', title: "Três Caminhos: O ELIF",
        objective: "Crie pontos = 70. Se pontos > 80 dê print('Excelente'). elif pontos >= 50: dê print('Regular'). else: dê print('Reprovado').",
        tips: ["pontos = 70", "if pontos > 80:", "    print('Excelente')", "elif pontos >= 50:", "    print('Regular')", "else:", "    print('Reprovado')"],
        validate: (p, c, code) => code.includes('if') && code.includes('elif') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.12', title: "Semáforo do Sistema (ELIF)",
        objective: "Peça sinal = input('Cor: '). Se for 'verde' dê print('Acelerar'), elif 'amarelo' print('Atencao'), senão print('Parar').",
        tips: ["sinal = input('Cor: ')", "if sinal == 'verde':", "    print('Acelerar')", "elif sinal == 'amarelo':", "    print('Atencao')", "else:", "    print('Parar')"],
        validate: (p, c, code) => code.includes('input') && code.includes('elif') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.13', title: "Operador Lógico AND (E)",
        objective: "Ambas devem ser verdadeiras! Crie usuario = 'admin' e codigo = 777. Se usuario == 'admin' and codigo == 777: dê print('Super Acesso').",
        tips: ["usuario = 'admin'", "codigo = 777", "if usuario == 'admin' and codigo == 777:", "    print('Super Acesso')"],
        validate: (p, c, code) => code.includes('and') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('super'))
    },
    {
        id: '2.14', title: "Operador Lógico OR (OU)",
        objective: "Basta uma ser verdadeira! Crie cargo = 'gerente'. Se cargo == 'gerente' or cargo == 'diretor': dê print('Autorizado').",
        tips: ["cargo = 'gerente'", "if cargo == 'gerente' or cargo == 'diretor':", "    print('Autorizado')"],
        validate: (p, c, code) => code.includes('or') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('autorizado'))
    },
    {
        id: '2.15', title: "Operador NOT (NÃO)",
        objective: "Invertendo booleanos! Crie bloqueado = False. Se not bloqueado: dê print('Conexao ativa').",
        tips: ["bloqueado = False", "if not bloqueado:", "    print('Conexao ativa')"],
        validate: (p, c, code) => code.includes('not') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('conexao'))
    },
    {
        id: '2.16', title: "Faixas Numéricas com AND",
        objective: "Verifique intervalo! Crie nota = 9. Se nota >= 7 and nota <= 10: dê print('Aprovado com merito').",
        tips: ["nota = 9", "if nota >= 7 and nota <= 10:", "    print('Aprovado com merito')"],
        validate: (p, c, code) => code.includes('and') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('aprovado'))
    },
    {
        id: '2.17', title: "Condicionais Aninhadas (IF dentro de IF)",
        objective: "Crie login = True e nivel = 2. Se login: e dentro se nivel > 1: dê print('Painel VIP'). Preste atenção na indentação!",
        tips: ["login = True", "nivel = 2", "if login:", "    if nivel > 1:", "        print('Painel VIP')"],
        validate: (p, c, code) => (code.match(/if\b/g) || []).length >= 2 && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('vip'))
    },
    {
        id: '2.18', title: "Decisão com Ações na Arena",
        objective: "Se direcao == 'direita', vire direita(90), senão esquerda(90). Depois ande frente(100).",
        tips: ["direcao = 'direita'", "if direcao == 'direita':", "    direita(90)", "else:", "    esquerda(90)", "frente(100)"],
        validate: (p, c, code) => code.includes('if') && code.includes('else') && (c.some(cmd => cmd.type === 'direita') || c.some(cmd => cmd.type === 'esquerda')) && c.some(cmd => cmd.type === 'frente')
    },
    {
        id: '2.19', title: "Decisão com Cores e Manobra",
        objective: "Peça modo = input('Modo: '). Se for 'ataque', defina cor('red') e frente(120), senão cor('blue') e frente(60).",
        tips: ["modo = input('Modo: ')", "if modo == 'ataque':", "    cor('red')", "    frente(120)", "else:", "    cor('blue')", "    frente(60)"],
        validate: (p, c, code) => code.includes('input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'cor') && c.some(cmd => cmd.type === 'frente')
    },
    {
        id: '2.20', title: "BOSS DO FIREWALL: O GUARDIÃO CONDICIONAL",
        objective: "Peça codigo = int(input('Codigo: ')). Se for 100: direita(90) e frente(150). elif for 50: esquerda(90) e frente(150). else: print('Codigo Invalido').",
        tips: ["codigo = int(input('Codigo: '))", "if codigo == 100:", "    direita(90)", "    frente(150)", "elif codigo == 50:", "    esquerda(90)", "    frente(150)", "else:", "    print('Codigo Invalido')"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('if') && code.includes('elif') && (c.some(cmd => cmd.type === 'frente') || c.some(cmd => cmd.type === 'print'))
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
const uiBossName = document.querySelector('.boss-name');
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
        uiTitle.innerText = "🏆 NEXUS ACADEMY HACKEADA COM SUCESSO!";
        uiObjective.innerText = "Parabéns, Hacker Lendário! Você dominou Variáveis, Tipos de Dados, Inputs e Condicionais no Python!";
        uiXpFill.style.width = '100%';
        uiBossHp.style.width = '0%';
        if (uiBossName) uiBossName.innerText = "SISTEMA TOTALMENTE DOMINADO";
        return;
    }

    const mission = missions[currentMissionIndex];
    uiTitle.innerText = `Nível ${mission.id}: ${mission.title}`;
    uiObjective.innerText = mission.objective;

    // Nível atual (Módulo 1 ou Módulo 2)
    level = currentMissionIndex < 20 ? 1 : 2;
    uiLevel.innerText = `Lvl: ${level}`;

    // Nome e HP do Boss
    if (currentMissionIndex < 20) {
        if (uiBossName) uiBossName.innerText = "FIREWALL DO SISTEMA (MÓDULO 1)";
        bossHp = Math.max(0, 100 - (currentMissionIndex * 5));
    } else {
        if (uiBossName) uiBossName.innerText = "GUARDIÃO CONDICIONAL (MÓDULO 2)";
        bossHp = Math.max(0, 100 - ((currentMissionIndex - 20) * 5));
    }
    uiBossHp.style.width = `${bossHp}%`;

    // Barra de XP contínua
    xp = (currentMissionIndex / missions.length) * 100;
    uiXpFill.style.width = `${xp}%`;
    
    // Atualiza a lista lateral de conquistas
    for (let i = 0; i < missions.length; i++) {
        const li = document.getElementById(`achiev-${i}`);
        if (!li) continue;
        if (i < currentMissionIndex) {
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
    logConsole("Executando Script Python...");

    try {
        const commands = parser.parse(code);
        
        if (commands.length === 0) {
            logConsole("Nenhum comando válido executado.", "error");
            return;
        }
        
        const onPrint = (msg) => logConsole(`[Print] ${msg}`, 'print');

        engine.execute(commands, (points) => {
            logConsole("Processo finalizado.", "normal");
            
            if (currentMissionIndex < missions.length) {
                const mission = missions[currentMissionIndex];
                if (mission.validate(points, commands, code)) {
                    logConsole(`SUCESSO: Nível ${mission.id} concluído!`, "success");
                    
                    document.getElementById('code-editor').value = '';
                    completeMission();
                } else {
                    logConsole("FALHA: Seu código não atendeu ao objetivo da missão.", "error");
                }
            }
        }, onPrint);

    } catch (e) {
        logConsole(e.message, "error");
    }
});

function completeMission() {
    const overlay = document.getElementById('success-overlay');
    const bossContainer = document.querySelector('.boss-container');
    const xpText = document.getElementById('xp-gain-text');
    
    const isBossDefeated = (currentMissionIndex === 19 || currentMissionIndex === 39);
    if (xpText) {
        xpText.innerText = isBossDefeated 
            ? `💥 BOSS DESTRUÍDO! +XP MÁXIMO!`
            : `+ 2.5% XP | Dano no Sistema!`;
    }
    
    if (overlay) overlay.classList.add('active');
    if (bossContainer) bossContainer.classList.add('shake');
    
    setTimeout(() => { 
        if (bossContainer) bossContainer.classList.remove('shake'); 
    }, 500);

    setTimeout(() => {
        if (overlay) overlay.classList.remove('active');
        currentMissionIndex++;
        updateUI();
    }, 2200);
}

// Init
updateUI();
