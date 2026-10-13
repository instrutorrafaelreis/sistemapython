// ========================================================
// HUNTER × BUG - MOTOR PEDAGÓGICO & GERENCIADOR TÁTICO
// Inspirado no Exame Hunter e Torre Celestial
// ========================================================

const missions = [
    // ==========================================
    // FASE 1: NEN & MANIPULAÇÃO DE DADOS (1.1 - 1.20)
    // ==========================================
    {
        id: '1.1', module: 1, rank: 'RANK D', rewardJeny: 500,
        title: "Hello World (Manifestação de Ten)",
        objective: "Sua primeira manifestação de Nen! Use print() para emitir seu sinal no terminal Hunter.",
        tips: ["print('Hello World')"],
        validate: (p, c, code) => c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.2', module: 1, rank: 'RANK D', rewardJeny: 500,
        title: "Dados Textuais (Armazenamento de Aura)",
        objective: "Crie uma variável chamada 'nome' e guarde um texto (string) nela. Depois dê print(nome).",
        tips: ["nome = 'Hacker'", "print(nome)"],
        validate: (p, c, code) => code.includes('nome') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.3', module: 1, rank: 'RANK D', rewardJeny: 500,
        title: "Dados Numéricos (Nível de Força Int)",
        objective: "Crie uma variável 'idade' e atribua um número inteiro (sem aspas). Dê print nela.",
        tips: ["idade = 25", "print(idade)"],
        validate: (p, c, code) => code.includes('idade') && c.some(cmd => cmd.type === 'print' && !isNaN(parseInt(cmd.value)))
    },
    {
        id: '1.4', module: 1, rank: 'RANK D', rewardJeny: 500,
        title: "Ponto Flutuante (Fração de Energia Float)",
        objective: "Crie uma variável 'versao' com um número decimal (ex: 1.5). Dê print nela.",
        tips: ["versao = 1.5", "print(versao)"],
        validate: (p, c, code) => code.includes('versao') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('.'))
    },
    {
        id: '1.5', module: 1, rank: 'RANK D', rewardJeny: 500,
        title: "Verdadeiro ou Falso (Sensor de Presença Bool)",
        objective: "Crie uma variável 'acesso' e defina como True (maiúsculo no Python!). Dê print.",
        tips: ["acesso = True", "print(acesso)"],
        validate: (p, c, code) => code.includes('acesso') && code.includes('True') && c.some(cmd => cmd.type === 'print' && cmd.value === 'true')
    },
    {
        id: '1.6', module: 1, rank: 'RANK C', rewardJeny: 800,
        title: "Inspecionando Tipos (Técnica Gyo)",
        objective: "Use Gyo para analisar o tipo! Com type(), inspecione e dê print no tipo de um número inteiro.",
        tips: ["print(type(10))"],
        validate: (p, c, code) => code.includes('type') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('int'))
    },
    {
        id: '1.7', module: 1, rank: 'RANK C', rewardJeny: 800,
        title: "Múltiplas Variáveis (Fluxo Duplo de Nen)",
        objective: "Crie duas variáveis 'a' e 'b'. Dê print nas duas em linhas separadas.",
        tips: ["a = 10", "b = 20", "print(a)", "print(b)"],
        validate: (p, c, code) => c.filter(cmd => cmd.type === 'print').length >= 2
    },
    {
        id: '1.8', module: 1, rank: 'RANK C', rewardJeny: 800,
        title: "Operações: Soma (Poder Combinado)",
        objective: "Crie uma variável 'soma' que guarde o resultado de 5 + 5. Dê print no resultado.",
        tips: ["soma = 5 + 5", "print(soma)"],
        validate: (p, c, code) => code.includes('+') && c.some(cmd => cmd.type === 'print' && cmd.value == 10)
    },
    {
        id: '1.9', module: 1, rank: 'RANK C', rewardJeny: 800,
        title: "Concatenação (Elo de Correntes)",
        objective: "Junte textos! Crie nome = 'Maria', e dê print('Ola ' + nome).",
        tips: ["nome = 'Maria'", "print('Ola ' + nome)"],
        validate: (p, c, code) => code.includes('+') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('Ola'))
    },
    {
        id: '1.10', module: 1, rank: 'RANK C', rewardJeny: 800,
        title: "Capturando Input (Interrogatório Hunter)",
        objective: "Use a função input() para pedir o nome do usuário e dê print no resultado.",
        tips: ["nome = input('Qual seu nome?')", "print(nome)"],
        validate: (p, c, code) => code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.11', module: 1, rank: 'RANK B', rewardJeny: 1200,
        title: "Cuidado com o Input (Armadilha de Texto)",
        objective: "Tudo que vem do input() é String! Peça um input de idade e dê print(type(idade)).",
        tips: ["idade = input('Sua idade:')", "print(type(idade))"],
        validate: (p, c, code) => code.includes('input') && code.includes('type') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('str'))
    },
    {
        id: '1.12', module: 1, rank: 'RANK B', rewardJeny: 1200,
        title: "O Problema Matemático (Bug da Falsa Soma)",
        objective: "Tente somar duas strings. Faça a = '5', b = '5', e dê print(a + b). Veja o resultado colado!",
        tips: ["a = '5'", "b = '5'", "print(a + b)"],
        validate: (p, c, code) => c.some(cmd => cmd.type === 'print' && cmd.value === '55')
    },
    {
        id: '1.13', module: 1, rank: 'RANK B', rewardJeny: 1200,
        title: "Conversão: int() (Purificação de Tipo)",
        objective: "Converta texto para número real com int(). Dê print(int('5') + int('5')).",
        tips: ["print(int('5') + int('5'))"],
        validate: (p, c, code) => code.includes('int') && c.some(cmd => cmd.type === 'print' && cmd.value == 10)
    },
    {
        id: '1.14', module: 1, rank: 'RANK B', rewardJeny: 1200,
        title: "Input com Conversão (Captura Convertida)",
        objective: "Peça um número com input(), converta para int() e guarde em 'x'. Dê print(x + 10).",
        tips: ["texto = input('Número:')", "x = int(texto)", "print(x + 10)"],
        validate: (p, c, code) => code.includes('int') && code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.15', module: 1, rank: 'RANK B', rewardJeny: 1200,
        title: "Input e int() de uma vez (Técnica Rápida)",
        objective: "Junte os dois: x = int(input('Número:')). Dê print no type(x) para comprovar.",
        tips: ["x = int(input('Número:'))", "print(type(x))"],
        validate: (p, c, code) => code.includes('int(input') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('int'))
    },
    {
        id: '1.16', module: 1, rank: 'RANK A', rewardJeny: 2000,
        title: "Calculadora de Soma (Bounty A)",
        objective: "Peça dois inputs e converta ambos para int. Some e dê print no resultado.",
        tips: ["a = int(input('N1:'))", "b = int(input('N2:'))", "print(a + b)"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('+') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.17', module: 1, rank: 'RANK A', rewardJeny: 2000,
        title: "Conversão: float() (Precisão Decimal)",
        objective: "Para números com vírgula/ponto, use float()! Peça peso = float(input()) e dê print(peso).",
        tips: ["peso = float(input('Peso:'))", "print(peso)"],
        validate: (p, c, code) => code.includes('float') && code.includes('input') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '1.18', module: 1, rank: 'RANK A', rewardJeny: 2000,
        title: "Conversão: str() (Mesclagem com Texto)",
        objective: "Converta números para texto com str(). Faça: print('Meu nível é ' + str(99)).",
        tips: ["print('Meu nível é ' + str(99))"],
        validate: (p, c, code) => code.includes('str') && c.some(cmd => cmd.type === 'print' && String(cmd.value).includes('99'))
    },
    {
        id: '1.19', module: 1, rank: 'RANK A', rewardJeny: 2000,
        title: "Desafio de Variáveis (Múltiplos Tipos)",
        objective: "Crie nome (string), idade (int convertido), altura (float convertido). Dê print neles.",
        tips: ["n = input()", "i = int(input())", "a = float(input())", "print(n, i, a)"],
        validate: (p, c, code) => code.includes('int') && code.includes('float') && code.includes('input')
    },
    {
        id: '1.20', module: 1, rank: 'RANK S - BOSS', rewardJeny: 5000,
        title: "BOSS DA FASE 1: CHIMERA BUG INICIAL",
        objective: "O Bug Quimera exige: Leia senha = int(input()), some 10 e acerte o golpe com frente(senha + 10)!",
        tips: ["senha = int(input('Senha (digite 50):'))", "frente(senha + 10)"],
        validate: (p, c, code) => code.includes('int(input') && c.some(cmd => cmd.type === 'frente')
    },

    // ==========================================
    // FASE 2: TESTE DE REFLEXOS E CONDICIONAIS (2.1 - 2.20)
    // ==========================================
    {
        id: '2.1', module: 2, rank: 'RANK D', rewardJeny: 500,
        title: "O Primeiro IF (Sentido Aranha Hunter)",
        objective: "Teste a tomada de decisão! Crie porta_aberta = True. Se for True, dê print('Passagem liberada').",
        tips: ["porta_aberta = True", "if porta_aberta:", "    print('Passagem liberada')"],
        validate: (p, c, code) => code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('passagem'))
    },
    {
        id: '2.2', module: 2, rank: 'RANK D', rewardJeny: 500,
        title: "Comparação de Igualdade (==)",
        objective: "No Python usamos == para checar igualdade. Crie chave = 'hunter'. Se chave == 'hunter': dê print('Chave aceita').",
        tips: ["chave = 'hunter'", "if chave == 'hunter':", "    print('Chave aceita')"],
        validate: (p, c, code) => code.includes('==') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('chave'))
    },
    {
        id: '2.3', module: 2, rank: 'RANK D', rewardJeny: 500,
        title: "Comparação de Diferença (!=)",
        objective: "Use != para verificar se é diferente. Crie status = 'perigo'. Se status != 'seguro': dê print('Alerta de intruso').",
        tips: ["status = 'perigo'", "if status != 'seguro':", "    print('Alerta de intruso')"],
        validate: (p, c, code) => code.includes('!=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('alerta'))
    },
    {
        id: '2.4', module: 2, rank: 'RANK D', rewardJeny: 500,
        title: "Maior Que (>) (Medidor de Aura)",
        objective: "Verifique energia! Crie energia = 80. Se energia > 50: dê print('Sistemas operando').",
        tips: ["energia = 80", "if energia > 50:", "    print('Sistemas operando')"],
        validate: (p, c, code) => code.includes('>') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('sistemas'))
    },
    {
        id: '2.5', module: 2, rank: 'RANK D', rewardJeny: 500,
        title: "Menor Que (<) (Alerta de Dano)",
        objective: "Alerta de emergência! Crie vida = 15. Se vida < 20: dê print('Vida critica').",
        tips: ["vida = 15", "if vida < 20:", "    print('Vida critica')"],
        validate: (p, c, code) => code.includes('<') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('vida'))
    },
    {
        id: '2.6', module: 2, rank: 'RANK C', rewardJeny: 800,
        title: "Maior ou Igual (>=) (Andar Mínimo)",
        objective: "O nível mínimo é 18. Crie nivel = 20. Se nivel >= 18: dê print('Acesso master').",
        tips: ["nivel = 20", "if nivel >= 18:", "    print('Acesso master')"],
        validate: (p, c, code) => code.includes('>=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('acesso'))
    },
    {
        id: '2.7', module: 2, rank: 'RANK C', rewardJeny: 800,
        title: "Menor ou Igual (<=) (Limite de Tentativas)",
        objective: "Limite de tentativas! Crie tentativas = 2. Se tentativas <= 3: dê print('Permissao mantida').",
        tips: ["tentativas = 2", "if tentativas <= 3:", "    print('Permissao mantida')"],
        validate: (p, c, code) => code.includes('<=') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('permissao'))
    },
    {
        id: '2.8', module: 2, rank: 'RANK C', rewardJeny: 800,
        title: "A Bifurcação: IF e ELSE (Dois Destinos)",
        objective: "Crie senha = 999. Se senha == 123 dê print('Liberado'), senão (else:) dê print('Bloqueado').",
        tips: ["senha = 999", "if senha == 123:", "    print('Liberado')", "else:", "    print('Bloqueado')"],
        validate: (p, c, code) => code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('bloqueado'))
    },
    {
        id: '2.9', module: 2, rank: 'RANK C', rewardJeny: 800,
        title: "IF / ELSE com Input (Decisão do Jogador)",
        objective: "Peça resposta = input('Sim ou Nao: '). Se resposta == 'Sim' dê print('Confirmado'), senão dê print('Cancelado').",
        tips: ["resposta = input('Sim ou Nao: ')", "if resposta == 'Sim':", "    print('Confirmado')", "else:", "    print('Cancelado')"],
        validate: (p, c, code) => code.includes('input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.10', module: 2, rank: 'RANK C', rewardJeny: 800,
        title: "Validação Numérica com IF / ELSE",
        objective: "Peça idade = int(input('Idade: ')). Se idade >= 18 dê print('Maior de idade'), senão dê print('Menor de idade').",
        tips: ["idade = int(input('Idade: '))", "if idade >= 18:", "    print('Maior de idade')", "else:", "    print('Menor de idade')"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.11', module: 2, rank: 'RANK B', rewardJeny: 1200,
        title: "Três Caminhos: O ELIF (Múltiplas Rotas)",
        objective: "Crie pontos = 70. Se pontos > 80 dê print('Excelente'). elif pontos >= 50: dê print('Regular'). else: dê print('Reprovado').",
        tips: ["pontos = 70", "if pontos > 80:", "    print('Excelente')", "elif pontos >= 50:", "    print('Regular')", "else:", "    print('Reprovado')"],
        validate: (p, c, code) => code.includes('if') && code.includes('elif') && code.includes('else') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.12', module: 2, rank: 'RANK B', rewardJeny: 1200,
        title: "Semáforo do Sistema (ELIF em Cadeia)",
        objective: "Peça sinal = input('Cor: '). Se for 'verde' dê print('Acelerar'), elif 'amarelo' print('Atencao'), senão print('Parar').",
        tips: ["sinal = input('Cor: ')", "if sinal == 'verde':", "    print('Acelerar')", "elif sinal == 'amarelo':", "    print('Atencao')", "else:", "    print('Parar')"],
        validate: (p, c, code) => code.includes('input') && code.includes('elif') && c.some(cmd => cmd.type === 'print')
    },
    {
        id: '2.13', module: 2, rank: 'RANK B', rewardJeny: 1200,
        title: "Operador Lógico AND (Condição Dupla)",
        objective: "Ambas devem ser verdadeiras! Crie usuario = 'admin' e codigo = 777. Se usuario == 'admin' and codigo == 777: dê print('Super Acesso').",
        tips: ["usuario = 'admin'", "codigo = 777", "if usuario == 'admin' and codigo == 777:", "    print('Super Acesso')"],
        validate: (p, c, code) => code.includes('and') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('super'))
    },
    {
        id: '2.14', module: 2, rank: 'RANK B', rewardJeny: 1200,
        title: "Operador Lógico OR (Rotas Alternativas)",
        objective: "Basta uma ser verdadeira! Crie cargo = 'gerente'. Se cargo == 'gerente' or cargo == 'diretor': dê print('Autorizado').",
        tips: ["cargo = 'gerente'", "if cargo == 'gerente' or cargo == 'diretor':", "    print('Autorizado')"],
        validate: (p, c, code) => code.includes('or') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('autorizado'))
    },
    {
        id: '2.15', module: 2, rank: 'RANK B', rewardJeny: 1200,
        title: "Operador NOT (Inversor de Aura)",
        objective: "Invertendo booleanos! Crie bloqueado = False. Se not bloqueado: dê print('Conexao ativa').",
        tips: ["bloqueado = False", "if not bloqueado:", "    print('Conexao ativa')"],
        validate: (p, c, code) => code.includes('not') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('conexao'))
    },
    {
        id: '2.16', module: 2, rank: 'RANK A', rewardJeny: 2000,
        title: "Faixas Numéricas com AND (Zona Crítica)",
        objective: "Verifique intervalo! Crie nota = 9. Se nota >= 7 and nota <= 10: dê print('Aprovado com merito').",
        tips: ["nota = 9", "if nota >= 7 and nota <= 10:", "    print('Aprovado com merito')"],
        validate: (p, c, code) => code.includes('and') && code.includes('if') && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('aprovado'))
    },
    {
        id: '2.17', module: 2, rank: 'RANK A', rewardJeny: 2000,
        title: "Condicionais Aninhadas (IF dentro de IF)",
        objective: "Crie login = True e nivel = 2. Se login: e dentro se nivel > 1: dê print('Painel VIP').",
        tips: ["login = True", "nivel = 2", "if login:", "    if nivel > 1:", "        print('Painel VIP')"],
        validate: (p, c, code) => (code.match(/if\b/g) || []).length >= 2 && c.some(cmd => cmd.type === 'print' && String(cmd.value).toLowerCase().includes('vip'))
    },
    {
        id: '2.18', module: 2, rank: 'RANK A', rewardJeny: 2000,
        title: "Decisão com Ações na Arena (Evasão Tática)",
        objective: "Se direcao == 'direita', vire direita(90), senão esquerda(90). Depois ande frente(100).",
        tips: ["direcao = 'direita'", "if direcao == 'direita':", "    direita(90)", "else:", "    esquerda(90)", "frente(100)"],
        validate: (p, c, code) => code.includes('if') && code.includes('else') && (c.some(cmd => cmd.type === 'direita') || c.some(cmd => cmd.type === 'esquerda')) && c.some(cmd => cmd.type === 'frente')
    },
    {
        id: '2.19', module: 2, rank: 'RANK A', rewardJeny: 2000,
        title: "Decisão com Cores e Manobra (Golpe de Nen)",
        objective: "Peça modo = input('Modo: '). Se for 'ataque', defina cor('red') e frente(120), senão cor('blue') e frente(60).",
        tips: ["modo = input('Modo: ')", "if modo == 'ataque':", "    cor('red')", "    frente(120)", "else:", "    cor('blue')", "    frente(60)"],
        validate: (p, c, code) => code.includes('input') && code.includes('if') && code.includes('else') && c.some(cmd => cmd.type === 'cor') && c.some(cmd => cmd.type === 'frente')
    },
    {
        id: '2.20', module: 2, rank: 'RANK S - BOSS', rewardJeny: 5000,
        title: "BOSS SUPREMO: REI QUIMERA DO FIREWALL",
        objective: "Peça codigo = int(input('Codigo: ')). Se 100: direita(90) e frente(150). elif 50: esquerda(90) e frente(150). else: print('Codigo Invalido').",
        tips: ["codigo = int(input('Codigo: '))", "if codigo == 100:", "    direita(90)", "    frente(150)", "elif codigo == 50:", "    esquerda(90)", "    frente(150)", "else:", "    print('Codigo Invalido')"],
        validate: (p, c, code) => code.includes('int(input') && code.includes('if') && code.includes('elif') && (c.some(cmd => cmd.type === 'frente') || c.some(cmd => cmd.type === 'print'))
    }
];

// ========================================================
// GERENCIADOR DE DADOS EM JSON (LOCALSTORAGE)
// ========================================================
const STORAGE_KEY = 'hunter_x_bug_storage_v3';

function generateHunterSerial(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % 9000;
    const num = Math.abs(hash) + 1000;
    return `#HB-${num}-PY`;
}

const StorageManager = {
    getData() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try { return JSON.parse(raw); } catch(e) { /* fallback */ }
        }
        // Estado inicial com rivais clássicos do universo Hunter x Hunter
        const initial = {
            users: {
                "KilluaZoldyck": { 
                    name: "KilluaZoldyck", 
                    avatar: "⚡", 
                    nen: "Transformação (Algoritmos)",
                    serial: "#HB-9999-PY",
                    currentMissionIndex: 28, 
                    completedMissions: 28, 
                    floor: 140,
                    jenys: 28000,
                    score: 2800, 
                    lastActive: Date.now() - 1800000 
                },
                "Kurapika": { 
                    name: "Kurapika", 
                    avatar: "🧠", 
                    nen: "Materialização (Arquitetura)",
                    serial: "#HB-4040-PY",
                    currentMissionIndex: 20, 
                    completedMissions: 20, 
                    floor: 100,
                    jenys: 18000,
                    score: 2000, 
                    lastActive: Date.now() - 3600000 
                },
                "Leorio": { 
                    name: "Leorio", 
                    avatar: "🛡️", 
                    nen: "Emissão (DevOps / APIs)",
                    serial: "#HB-1234-PY",
                    currentMissionIndex: 12, 
                    completedMissions: 12, 
                    floor: 60,
                    jenys: 8500,
                    score: 1200, 
                    lastActive: Date.now() - 7200000 
                }
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

    loginOrCreateUser(name, avatar, nenAffinity) {
        const data = this.getData();
        const trimmed = name.trim();
        if (!data.users[trimmed]) {
            data.users[trimmed] = {
                name: trimmed,
                avatar: avatar || "🥷",
                nen: nenAffinity || "Reforço (Backend)",
                serial: generateHunterSerial(trimmed),
                currentMissionIndex: 0,
                completedMissions: 0,
                floor: 1,
                jenys: 0,
                score: 0,
                lastActive: Date.now()
            };
        } else {
            if (avatar) data.users[trimmed].avatar = avatar;
            if (nenAffinity) data.users[trimmed].nen = nenAffinity;
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
            u.floor = Math.max(1, u.completedMissions * 5);
            u.jenys = u.completedMissions * 800;
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
let selectedMissionIndex = 0;

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
const navUserSerial = document.getElementById('nav-user-serial');
const navUserNen = document.getElementById('nav-user-nen');
const navUserFloor = document.getElementById('nav-user-floor');
const navXpPercent = document.getElementById('nav-xp-percent');
const navJenyAmount = document.getElementById('nav-jeny-amount');
const xpFill = document.getElementById('xp-fill');

const tabBtnMod1 = document.getElementById('tab-btn-mod1');
const tabBtnMod2 = document.getElementById('tab-btn-mod2');
const tabBtnRank = document.getElementById('tab-btn-rank');

const tabContentMissions = document.getElementById('tab-content-missions');
const tabContentRank = document.getElementById('tab-content-rank');

const missionRankTag = document.getElementById('mission-rank-tag');
const missionBadge = document.getElementById('mission-badge');
const missionTitle = document.getElementById('mission-title');
const missionObjective = document.getElementById('mission-objective');
const missionRewardText = document.getElementById('mission-reward-text');
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
// SELEÇÃO DE AVATAR E AFINIDADE DE NEN
// ========================================================
let selectedAvatar = '🥷';
let selectedNen = 'Reforço (Backend)';

avatarPicker.addEventListener('click', (e) => {
    const btn = e.target.closest('.avatar-opt');
    if (!btn) return;
    document.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedAvatar = btn.getAttribute('data-avatar');
    selectedNen = btn.getAttribute('data-nen');
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
        chip.innerHTML = `<span>${u.avatar}</span> <strong>${u.name}</strong> (${u.completedMissions}/40 - Andar ${u.floor || 1})`;
        chip.addEventListener('click', () => {
            selectUser(u.name, u.avatar, u.nen);
        });
        profileChips.appendChild(chip);
    });
}

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = authNicknameInput.value.trim();
    if (!name) return;
    selectUser(name, selectedAvatar, selectedNen);
});

function selectUser(name, avatar, nen) {
    currentUser = StorageManager.loginOrCreateUser(name, avatar, nen);
    authModal.classList.add('hidden');
    
    selectedMissionIndex = Math.min(currentUser.currentMissionIndex, missions.length - 1);
    
    if (selectedMissionIndex >= 20) {
        switchTab('mod2');
    } else {
        switchTab('mod1');
    }

    updateUI();
    logConsole(`Licença Hunter #${currentUser.serial} autenticada. Bem-vindo, ${currentUser.name}!`, 'success');
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
// SISTEMA DE NAVEGAÇÃO DE FASES DO EXAME
// ========================================================
function switchTab(tabId) {
    activeTab = tabId;
    [tabBtnMod1, tabBtnMod2, tabBtnRank].forEach(b => b.classList.remove('active'));

    if (tabId === 'mod1') {
        tabBtnMod1.classList.add('active');
        tabContentMissions.style.display = 'flex';
        tabContentRank.style.display = 'none';
        trackTitle.innerText = "Quadro de Caçadas: Fase 1 (Nen & Variáveis)";
        
        if (selectedMissionIndex >= 20) {
            selectedMissionIndex = Math.min(currentUser ? currentUser.currentMissionIndex : 0, 19);
        }
    } else if (tabId === 'mod2') {
        tabBtnMod2.classList.add('active');
        tabContentMissions.style.display = 'flex';
        tabContentRank.style.display = 'none';
        trackTitle.innerText = "Quadro de Caçadas: Fase 2 (Reflexos If/Else)";
        
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

    // Licença Hunter metálica
    navUserAvatar.innerText = currentUser.avatar;
    navUserName.innerText = currentUser.name;
    navUserSerial.innerText = currentUser.serial || generateHunterSerial(currentUser.name);
    navUserNen.innerText = currentUser.nen || "Reforço // Backend";
    const currentFloor = Math.max(1, (currentUser.completedMissions || 0) * 5);
    navUserFloor.innerText = `Andar ${currentFloor} // Torre Celestial`;

    // Barra de Nen & Jenys
    const totalPct = Math.round((currentUser.completedMissions / missions.length) * 100);
    navXpPercent.innerText = `${totalPct}% (${currentUser.completedMissions}/40)`;
    xpFill.style.width = `${totalPct}%`;
    const totalJenys = (currentUser.completedMissions * 800).toLocaleString('pt-BR');
    navJenyAmount.innerText = `${totalJenys} ₭`;

    // Bounty Card da Missão Atual
    const m = missions[selectedMissionIndex];
    missionRankTag.innerText = m.rank || 'RANK D';
    missionBadge.innerText = `CAÇADA ${m.id}`;
    currentStageIndicator.innerText = `CAÇADA ${m.id}`;
    missionTitle.innerText = m.title;
    missionObjective.innerText = m.objective;
    missionRewardText.innerText = `+100 XP | ${m.rewardJeny || 500} ₭`;

    // Navegação
    btnPrevMission.disabled = (selectedMissionIndex === 0);
    const maxUnlocked = currentUser.currentMissionIndex;
    btnNextMission.disabled = (selectedMissionIndex >= maxUnlocked || selectedMissionIndex >= missions.length - 1);

    // Boss Bar
    if (selectedMissionIndex < 20) {
        bossName.innerText = "BUG QUIMERA // CHIMERA INICIAL (FASE 1)";
        const hp = Math.max(0, 100 - (Math.min(currentUser.completedMissions, 20) * 5));
        bossHpText.innerText = `${hp}% HP`;
        bossHpBar.style.width = `${hp}%`;
    } else {
        bossName.innerText = "REI QUIMERA DO FIREWALL // S-RANK (FASE 2)";
        const completedInMod2 = Math.max(0, currentUser.completedMissions - 20);
        const hp = Math.max(0, 100 - (completedInMod2 * 5));
        bossHpText.innerText = `${hp}% HP`;
        bossHpBar.style.width = `${hp}%`;
    }

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

        let icon = isCompleted ? '⚔️' : (isUnlocked ? '🎯' : '🔒');
        li.innerHTML = `
            <span>${icon} <strong>${m.id}</strong> - ${m.title}</span>
            <span class="bounty-rank-badge">${m.rank}</span>
        `;

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
// TORRE CELESTIAL // PLACAR DE ANDARES
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

        const floor = Math.max(1, (u.completedMissions || 0) * 5);
        const jenys = ((u.completedMissions || 0) * 800).toLocaleString('pt-BR');

        tr.innerHTML = `
            <td><span class="rank-badge">${badge}</span></td>
            <td>${u.avatar} <strong>${u.name}</strong> <small style="color:var(--nen-green)">(${u.nen ? u.nen.split(' ')[0] : 'Hunter'})</small></td>
            <td><strong style="color:var(--gold-nen)">Andar ${floor}</strong> (${u.completedMissions}/40)</td>
            <td><span style="color: var(--nen-cyan)">${jenys} ₭</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Exportar dados da Torre em JSON
document.getElementById('btn-export-json').addEventListener('click', () => {
    const data = StorageManager.getData();
    const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", str);
    dlAnchor.setAttribute("download", `hunter_x_bug_torre_celestial_${Date.now()}.json`);
    dlAnchor.click();
});

// ========================================================
// TERMINAL HUNTER & EXECUÇÃO DO NEN
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
    logConsole("Canalizando Aura de Nen e Executando Script...", "normal");

    try {
        const commands = parser.parse(code);
        
        if (commands.length === 0) {
            logConsole("Nenhum comando reconhecido ou liberado.", "error");
            return;
        }
        
        const onPrint = (msg) => logConsole(`[Print] ${msg}`, 'print');

        engine.execute(commands, (points) => {
            logConsole("Execução tática finalizada.", "normal");
            
            const currentMission = missions[selectedMissionIndex];
            if (currentMission.validate(points, commands, code)) {
                logConsole(`SUCESSO! Bug da Caçada ${currentMission.id} exterminado com precisão!`, "success");
                
                codeEditor.value = '';
                completeCurrentMission();
            } else {
                logConsole("FALHA: A técnica não atendeu ao objetivo do contrato. Refaça o plano!", "error");
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
        if (isLastOfMod1) xpText.innerText = "💥 BUG QUIMERA EXTERMINADO! FASE 2 DESBLOQUEADA!";
        else if (isLastOfMod2) xpText.innerText = "👑 REI QUIMERA DERROTADO! VOCÊ CONQUISTOU A LICENÇA HUNTER VITALÍCIA!";
        else xpText.innerText = `+ RECOMPENSA: 100 XP | ${missions[selectedMissionIndex].rewardJeny || 500} ₭`;
    }

    if (overlay) overlay.classList.add('active');
    if (bossContainer) bossContainer.classList.add('shake');

    setTimeout(() => {
        if (bossContainer) bossContainer.classList.remove('shake');
    }, 500);

    setTimeout(() => {
        if (overlay) overlay.classList.remove('active');

        StorageManager.saveUserProgress(selectedMissionIndex);
        currentUser = StorageManager.getCurrentUser();

        if (selectedMissionIndex < missions.length - 1) {
            selectedMissionIndex++;
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
