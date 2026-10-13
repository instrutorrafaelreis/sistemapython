# 🎯 Gabarito Oficial - Hunter x Bug (Python Mastery)

Este documento contém o gabarito oficial com os objetivos, conceitos trabalhados e as respostas em código Python para todos os estágios do simulador.

---

## 📑 Sumário

### [Módulo 1: Variáveis, Tipos de Dados e Inputs (1.1 a 1.20)](#-módulo-1-variáveis-tipos-e-inputs)
- [1.1 - Hello World](#nível-11---hello-world)
- [1.2 - Dados Textuais (Strings)](#nível-12---dados-textuais-strings)
- [1.3 - Dados Numéricos (Int)](#nível-13---dados-numéricos-int)
- [1.4 - Ponto Flutuante (Float)](#nível-14---ponto-flutuante-float)
- [1.5 - Verdadeiro ou Falso (Bool)](#nível-15---verdadeiro-ou-falso-bool)
- [1.6 - Inspecionando Tipos](#nível-16---inspecionando-tipos)
- [1.7 - Múltiplas Variáveis](#nível-17---múltiplas-variáveis)
- [1.8 - Operações: Soma](#nível-18---operações-soma)
- [1.9 - Concatenação](#nível-19---concatenação)
- [1.10 - Capturando Input](#nível-110---capturando-input)
- [1.11 - Cuidado com o Input](#nível-111---cuidado-com-o-input)
- [1.12 - O Problema Matemático](#nível-112---o-problema-matemático)
- [1.13 - Conversão: int()](#nível-113---conversão-int)
- [1.14 - Input com Conversão](#nível-114---input-com-conversão)
- [1.15 - Input e int() de uma vez](#nível-115---input-e-int-de-uma-vez)
- [1.16 - Calculadora de Soma](#nível-116---calculadora-de-soma)
- [1.17 - Conversão: float()](#nível-117---conversão-float)
- [1.18 - Conversão: str()](#nível-118---conversão-str)
- [1.19 - Desafio Variáveis](#nível-119---desafio-variáveis)
- [1.20 - BOSS FINAL DAS VARIÁVEIS](#nível-120---boss-final-das-variáveis)

### [Fase 2: Tomada de Decisão com Condicionais (2.1 a 2.20)](#-fase-2-condicionais-if-elif-else)
- [2.1 - O Primeiro IF](#caçada-21---o-primeiro-if)
- [2.2 - Comparação de Igualdade (==)](#caçada-22---comparação-de-igualdade-)
- [2.3 - Comparação de Diferença (!=)](#caçada-23---comparação-de-diferença-)
- [2.4 - Maior Que (>)](#caçada-24---maior-que-)
- [2.5 - Menor Que (<)](#caçada-25---menor-que-)
- [2.6 - Maior ou Igual (>=)](#caçada-26---maior-ou-igual-)
- [2.7 - Menor ou Igual (<=)](#caçada-27---menor-ou-igual-)
- [2.8 - A Bifurcação: IF e ELSE](#caçada-28---a-bifurcação-if-e-else)
- [2.9 - IF / ELSE com Input](#caçada-29---if--else-com-input)
- [2.10 - Validação Numérica com IF / ELSE](#caçada-210---validação-numérica-com-if--else)
- [2.11 - Três Caminhos: O ELIF](#caçada-211---três-caminhos-o-elif)
- [2.12 - Semáforo do Sistema (ELIF)](#caçada-212---semáforo-do-sistema-elif)
- [2.13 - Operador Lógico AND (E)](#caçada-213---operador-lógico-and-e)
- [2.14 - Operador Lógico OR (OU)](#caçada-214---operador-lógico-or-ou)
- [2.15 - Operador NOT (NÃO)](#caçada-215---operador-not-não)
- [2.16 - Faixas Numéricas com AND](#caçada-216---faixas-numéricas-com-and)
- [2.17 - Condicionais Aninhadas (IF dentro de IF)](#caçada-217---condicionais-aninhadas-if-dentro-de-if)
- [2.18 - Decisão com Ações na Arena](#caçada-218---decisão-com-ações-na-arena)
- [2.19 - Decisão com Cores e Manobra](#caçada-219---decisão-com-cores-e-manobra)
- [2.20 - BOSS DA FASE 2: REI QUIMERA DO FIREWALL](#caçada-220---boss-da-fase-2-rei-quimera-do-firewall)

### [Fase 3: Os Três Chefões Quimera (3.1 a 3.3)](#-fase-3-os-três-chefões-quimera-exame-supremo-31---33)
- [3.1 - CHEFÃO 1: NEFERPITOU // O ENIGMA DA ENERGIA EN](#caçada-31---chefão-1-neferpitou--o-enigma-da-energia-en)
- [3.2 - CHEFÃO 2: SHAIAPOUF // O LABIRINTO DE ESCAMAS](#caçada-32---chefão-2-shaiapouf--o-labirinto-de-escamas)
- [3.3 - CHEFÃO SUPREMO: REI MERUEM // O PINÁCULO DO EXAME](#caçada-33---chefão-supremo-rei-meruem--o-pináculo-do-exame)

---

# 📦 MÓDULO 1: VARIÁVEIS, TIPOS E INPUTS

### NíveL 1.1 - Hello World
- **Objetivo:** Sua primeira invasão! Use o comando print para testar a comunicação.
```python
print('Hello World')
```

### Nível 1.2 - Dados Textuais (Strings)
- **Objetivo:** Crie uma variável chamada 'nome' e guarde um texto (string) nela. Depois dê print(nome).
```python
nome = 'Hacker'
print(nome)
```

### Nível 1.3 - Dados Numéricos (Int)
- **Objetivo:** Crie uma variável 'idade' e atribua um número inteiro (sem aspas). Dê print nela.
```python
idade = 25
print(idade)
```

### Nível 1.4 - Ponto Flutuante (Float)
- **Objetivo:** Crie uma variável 'versao' com um número decimal (ex: 1.5). Dê print nela.
```python
versao = 1.5
print(versao)
```

### Nível 1.5 - Verdadeiro ou Falso (Bool)
- **Objetivo:** Crie uma variável 'acesso' e defina como True (maiúsculo no Python!). Dê print.
```python
acesso = True
print(acesso)
```

### Nível 1.6 - Inspecionando Tipos
- **Objetivo:** No Python usamos type() para ver o tipo de um dado. Dê print no tipo de um número inteiro.
```python
print(type(10))
```

### Nível 1.7 - Múltiplas Variáveis
- **Objetivo:** Crie duas variáveis 'a' e 'b'. Dê print nas duas.
```python
a = 10
b = 20
print(a)
print(b)
```

### Nível 1.8 - Operações: Soma
- **Objetivo:** Crie uma variável 'soma' que guarde o resultado de 5 + 5. Dê print no resultado.
```python
soma = 5 + 5
print(soma)
```

### Nível 1.9 - Concatenação
- **Objetivo:** Junte textos! Crie nome = 'Maria', e dê print('Ola ' + nome).
```python
nome = 'Maria'
print('Ola ' + nome)
```

### Nível 1.10 - Capturando Input
- **Objetivo:** Use a função input() para pedir o nome do usuário e dê print no resultado.
```python
nome = input('Qual seu nome?')
print(nome)
```

### Nível 1.11 - Cuidado com o Input
- **Objetivo:** Tudo que vem do input() é String! Peça um input de idade e dê print(type(idade)).
```python
idade = input('Sua idade:')
print(type(idade))
```

### Nível 1.12 - O Problema Matemático
- **Objetivo:** Tente somar duas strings. Faça a = '5', b = '5', e dê print(a + b). Veja o resultado bizarro!
```python
a = '5'
b = '5'
print(a + b)
```

### Nível 1.13 - Conversão: int()
- **Objetivo:** Para somar números vindos de textos, converta com int(). Dê print(int('5') + int('5')).
```python
print(int('5') + int('5'))
```

### Nível 1.14 - Input com Conversão
- **Objetivo:** Peça um número usando input(), converta para int() e guarde na variável 'x'. Dê print(x + 10).
```python
texto = input('Número:')
x = int(texto)
print(x + 10)
```

### Nível 1.15 - Input e int() de uma vez
- **Objetivo:** Você pode juntar os dois: x = int(input('Número:')). Dê print no tipo(x) para provar que é int.
```python
x = int(input('Número:'))
print(type(x))
```

### Nível 1.16 - Calculadora de Soma
- **Objetivo:** Peça dois inputs e converta ambos para int. Some e dê print no resultado.
```python
a = int(input('N1:'))
b = int(input('N2:'))
print(a + b)
```

### Nível 1.17 - Conversão: float()
- **Objetivo:** E se o usuário digitar 2.5? Use float()! Peça um peso com float(input()) e dê print(peso).
```python
peso = float(input('Peso:'))
print(peso)
```

### Nível 1.18 - Conversão: str()
- **Objetivo:** Você não pode concatenar string com número! Faça: print('Meu nível é ' + str(99)).
```python
print('Meu nível é ' + str(99))
```

### Nível 1.19 - Desafio Variáveis
- **Objetivo:** Crie nome (string), idade (int convertido), altura (float convertido). Dê print neles.
```python
n = input()
i = int(input())
a = float(input())
print(n, i, a)
```

### Nível 1.20 - BOSS FINAL DAS VARIÁVEIS
- **Objetivo:** O Firewall exige: Leia uma senha(input), converta para int, some 10 e ande para a frente com esse valor!
```python
senha = int(input('Senha (digite 50):'))
frente(senha + 10)
```

---

# ⚡ MÓDULO 2: CONDICIONAIS (IF, ELIF, ELSE)

### Nível 2.1 - O Primeiro IF
- **Objetivo:** Teste a tomada de decisão! Crie porta_aberta = True. Se for True, dê print('Passagem liberada').
```python
porta_aberta = True
if porta_aberta:
    print('Passagem liberada')
```

### Nível 2.2 - Comparação de Igualdade (==)
- **Objetivo:** No Python usamos == para checar igualdade. Crie chave = 'hunter'. Se chave == 'hunter': dê print('Chave aceita').
```python
chave = 'hunter'
if chave == 'hunter':
    print('Chave aceita')
```

### Nível 2.3 - Comparação de Diferença (!=)
- **Objetivo:** Use != para verificar se é diferente. Crie status = 'perigo'. Se status != 'seguro': dê print('Alerta de intruso').
```python
status = 'perigo'
if status != 'seguro':
    print('Alerta de intruso')
```

### Nível 2.4 - Maior Que (>)
- **Objetivo:** Verifique números! Crie energia = 80. Se energia > 50: dê print('Sistemas operando').
```python
energia = 80
if energia > 50:
    print('Sistemas operando')
```

### Nível 2.5 - Menor Que (<)
- **Objetivo:** Alerta de emergência! Crie vida = 15. Se vida < 20: dê print('Vida critica').
```python
vida = 15
if vida < 20:
    print('Vida critica')
```

### Nível 2.6 - Maior ou Igual (>=)
- **Objetivo:** O nível mínimo é 18. Crie nivel = 20. Se nivel >= 18: dê print('Acesso master').
```python
nivel = 20
if nivel >= 18:
    print('Acesso master')
```

### Nível 2.7 - Menor ou Igual (<=)
- **Objetivo:** Limite de tentativas! Crie tentativas = 2. Se tentativas <= 3: dê print('Permissao mantida').
```python
tentativas = 2
if tentativas <= 3:
    print('Permissao mantida')
```

### Nível 2.8 - A Bifurcação: IF e ELSE
- **Objetivo:** Crie senha = 999. Se senha == 123 dê print('Liberado'), senão (else:) dê print('Bloqueado').
```python
senha = 999
if senha == 123:
    print('Liberado')
else:
    print('Bloqueado')
```

### Nível 2.9 - IF / ELSE com Input
- **Objetivo:** Peça resposta = input('Sim ou Nao: '). Se resposta == 'Sim' dê print('Confirmado'), senão dê print('Cancelado').
```python
resposta = input('Sim ou Nao: ')
if resposta == 'Sim':
    print('Confirmado')
else:
    print('Cancelado')
```

### Nível 2.10 - Validação Numérica com IF / ELSE
- **Objetivo:** Peça idade = int(input('Idade: ')). Se idade >= 18 dê print('Maior de idade'), senão dê print('Menor de idade').
```python
idade = int(input('Idade: '))
if idade >= 18:
    print('Maior de idade')
else:
    print('Menor de idade')
```

### Nível 2.11 - Três Caminhos: O ELIF
- **Objetivo:** Crie pontos = 70. Se pontos > 80 dê print('Excelente'). elif pontos >= 50: dê print('Regular'). else: dê print('Reprovado').
```python
pontos = 70
if pontos > 80:
    print('Excelente')
elif pontos >= 50:
    print('Regular')
else:
    print('Reprovado')
```

### Nível 2.12 - Semáforo do Sistema (ELIF)
- **Objetivo:** Peça sinal = input('Cor: '). Se for 'verde' dê print('Acelerar'), elif 'amarelo' print('Atencao'), senão print('Parar').
```python
sinal = input('Cor: ')
if sinal == 'verde':
    print('Acelerar')
elif sinal == 'amarelo':
    print('Atencao')
else:
    print('Parar')
```

### Nível 2.13 - Operador Lógico AND (E)
- **Objetivo:** Ambas devem ser verdadeiras! Crie usuario = 'admin' e codigo = 777. Se usuario == 'admin' and codigo == 777: dê print('Super Acesso').
```python
usuario = 'admin'
codigo = 777
if usuario == 'admin' and codigo == 777:
    print('Super Acesso')
```

### Nível 2.14 - Operador Lógico OR (OU)
- **Objetivo:** Basta uma ser verdadeira! Crie cargo = 'gerente'. Se cargo == 'gerente' or cargo == 'diretor': dê print('Autorizado').
```python
cargo = 'gerente'
if cargo == 'gerente' or cargo == 'diretor':
    print('Autorizado')
```

### Nível 2.15 - Operador NOT (NÃO)
- **Objetivo:** Invertendo booleanos! Crie bloqueado = False. Se not bloqueado: dê print('Conexao ativa').
```python
bloqueado = False
if not bloqueado:
    print('Conexao ativa')
```

### Nível 2.16 - Faixas Numéricas com AND
- **Objetivo:** Verifique intervalo! Crie nota = 9. Se nota >= 7 and nota <= 10: dê print('Aprovado com merito').
```python
nota = 9
if nota >= 7 and nota <= 10:
    print('Aprovado com merito')
```

### Nível 2.17 - Condicionais Aninhadas (IF dentro de IF)
- **Objetivo:** Crie login = True e nivel = 2. Se login: e dentro se nivel > 1: dê print('Painel VIP').
```python
login = True
nivel = 2
if login:
    if nivel > 1:
        print('Painel VIP')
```

### Nível 2.18 - Decisão com Ações na Arena
- **Objetivo:** Se direcao == 'direita', vire direita(90), senão esquerda(90). Depois ande frente(100).
```python
direcao = 'direita'
if direcao == 'direita':
    direita(90)
else:
    esquerda(90)
frente(100)
```

### Nível 2.19 - Decisão com Cores e Manobra
- **Objetivo:** Peça modo = input('Modo: '). Se for 'ataque', defina cor('red') e frente(120), senão cor('blue') e frente(60).
```python
modo = input('Modo: ')
if modo == 'ataque':
    cor('red')
    frente(120)
else:
    cor('blue')
    frente(60)
```

### Nível 2.20 - BOSS DO FIREWALL: O GUARDIÃO CONDICIONAL
- **Objetivo:** Peça codigo = int(input('Codigo: ')). Se for 100: direita(90) e frente(150). elif for 50: esquerda(90) e frente(150). else: print('Codigo Invalido').
```python
codigo = int(input('Codigo: '))
if codigo == 100:
    direita(90)
    frente(150)
elif codigo == 50:
    esquerda(90)
    frente(150)
else:
    print('Codigo Invalido')
```

---

# 👑 FASE 3: OS TRÊS CHEFÕES QUIMERA (EXAME SUPREMO 3.1 - 3.3)

Esta fase especial valida de forma profunda e combinada **TODOS os conceitos das Fases 1 e 2**: variáveis de múltiplos tipos, inputs múltiplos, conversões numéricas (`int` e `float`), operadores lógicos (`and`, `or`, `not`), estruturas condicionais compostas e aninhadas (`if`, `elif`, `else`), manipulação de strings e manobras táticas no Canvas com giros angulares e cores de aura de Nen.

---

### Caçada 3.1 - CHEFÃO 1: NEFERPITOU // O ENIGMA DA ENERGIA EN
- **Rank:** `RANK S - GUARDA REAL`
- **Recompensa:** `10.000 ₭ | 2.500 XP`
- **Conceito:** Inputs múltiplos com conversão `int()` e `float()`, cálculo de impacto matemático, condicionais com `and` e `or`, conversão `str()` para concatenação e manobras de Nen no Canvas com `cor()` e giros angulares.
- **Solução:**
```python
nome = input('Hunter: ')
nivel = int(input('Nivel Nen: '))
distancia = float(input('Distancia: '))
impacto = int(nivel * (100 / distancia))

if nivel >= 80 and distancia <= 50.0:
    cor('red')
    direita(90)
    frente(150)
    print('Golpe Critico em Pitou: ' + str(impacto))
elif nivel >= 50 or distancia < 100.0:
    cor('blue')
    esquerda(90)
    frente(80)
    print('Ataque Tatico: ' + str(impacto))
else:
    cor('yellow')
    frente(30)
    print('Recuo Estrategico')
```

---

### Caçada 3.2 - CHEFÃO 2: SHAIAPOUF // O LABIRINTO DE ESCAMAS
- **Rank:** `RANK S - GUARDA REAL`
- **Recompensa:** `25.000 ₭ | 5.000 XP`
- **Conceito:** Inversão booleana com operador `not`, condicionais aninhadas (múltiplos níveis de indentação), operadores relacionais `==` e `!=`, operador lógico `and`, controle de tentativas e traçado geométrico de fuga no Canvas.
- **Solução:**
```python
chave = input('Chave de Nen: ')
tentativas = int(input('Tentativas: '))
bloqueado = False

if not bloqueado:
    if chave == 'hxh' and tentativas > 0:
        cor('cyan')
        frente(100)
        direita(90)
        frente(100)
        direita(90)
        print('Ilusao de Pouf Quebrada em ' + str(tentativas) + ' tentativas!')
    elif chave != 'hxh':
        cor('purple')
        frente(40)
        print('Chave Incorreta: Hipnose Mantida')
    else:
        print('Tentativas Esgotadas')
else:
    print('Aura Selada')
```

---

### Caçada 3.3 - CHEFÃO SUPREMO: REI MERUEM // O PINÁCULO DO EXAME
- **Rank:** `RANK SS - O REI QUIMERA`
- **Recompensa:** `100.000 ₭ | 10.000 XP | LICENÇA HUNTER VITALÍCIA COM 3 ESTRELAS`
- **Conceito:** O desafio definitivo de Python. Exige a união total de: 4 entradas de tipos diferentes, cálculo percentual com `float` e cast para `int`, lógica booleana composta com `and`, `or`, `not` agrupados com parênteses, cadeia completa `if / elif / else` aninhada, e execução do ataque supremo com giros de 45° e 90° e cores de aura no Canvas.
- **Solução:**
```python
hunter = input('Nome do Hunter: ')
afinidade = input('Afinidade: ')
poder = int(input('Poder de Nen: '))
foco = float(input('Taxa de Foco: '))
vivo = True
dano = int(poder * foco)

if vivo and not (poder <= 0):
    if (afinidade == 'reforco' or afinidade == 'especialista') and dano >= 80:
        cor('green')
        direita(45)
        frente(160)
        direita(90)
        frente(80)
        print('Vitoria sobre o Rei por ' + hunter + '! Dano Critico: ' + str(dano))
    elif dano >= 50 and foco >= 0.5:
        cor('yellow')
        esquerda(45)
        frente(100)
        print('Golpe Parcial no Rei: Dano ' + str(dano))
    else:
        cor('red')
        frente(40)
        print('Ataque Defletido pelo Rei Meruem')
else:
    print('Hunter Nocauteado sem Poder')
```
