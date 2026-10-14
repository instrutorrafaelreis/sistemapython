# 📊 Tutorial de Sincronização em Nuvem: Google Sheets (Sem Banco de Dados)

Este guia explica passo a passo como conectar o **HUNTER × BUG** a uma Planilha do Google usando o **Google Apps Script** para armazenar o avanço de todos os alunos da turma sem precisar de nenhum servidor ou banco de dados pago.

---

## ⚡ Passo 1: Criar a Planilha no Google Drive

1. Acesse o seu Google Drive ou direto em: [sheets.google.com](https://sheets.google.com)
2. Crie uma nova **Planilha em branco**.
3. Renomeie o título da planilha para: `Hunter x Bug - Registro da Turma`.

---

## 💻 Passo 2: Adicionar o Código Apps Script

1. No menu superior da planilha, clique em: **Extensões** ➡️ **Apps Script**.
2. Uma nova aba será aberta com um editor de código (`Código.gs`).
3. **Apague todo o conteúdo** que estiver dentro do editor.
4. Abra o arquivo [`google_apps_script.js`](file:///c:/Users/rafael.filipe/Documents/sistema%20_pythom/google_apps_script.js) deste projeto, copie todo o seu código e cole no editor do Google Apps Script.
5. Clique no ícone de **Salvar** (disquete 💾) ou pressione `Ctrl + S`.

---

## 🚀 Passo 3: Implantar como App da Web (Web App)

1. No canto superior direito da tela do Apps Script, clique no botão azul: **Implantar** (Deploy) ➡️ **Nova implantação** (New deployment).
2. Na janela que abrir, clique no ícone de **engrenagem ⚙️** (ao lado de *Selecionar tipo*) e escolha: **App da Web** (Web app).
3. Preencha as configurações rigorosamente como abaixo:
   - **Descrição:** `API Hunter x Bug Turma`
   - **Executar como:** `Eu (seu-email@gmail.com)`
   - **Quem pode acessar:** `Qualquer pessoa` *(Anyone)*  
     *(⚠️ **Importante:** Selecione "Qualquer pessoa" para que os navegadores dos alunos consigam enviar o progresso sem pedir login no Google).*
4. Clique no botão azul **Implantar**.
5. Se o Google solicitar permissões de acesso:
   - Clique em **Autorizar acesso**.
   - Selecione sua conta Google.
   - Se aparecer *"O Google não verificou este app"*, clique em **Avançado** ➡️ **Acessar API Hunter x Bug (não seguro)** ➡️ **Permitir**.
6. Ao final, o Google gerará um link chamado **URL do app da Web** (terminado em `/exec`), por exemplo:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
7. Clique em **Copiar** para guardar essa URL!

---

## 🔗 Passo 4: Conectar ao Hunter x Bug

Você tem duas opções fáceis:

### Opção A: Pela Própria Interface (Sem mexer em código)
1. Abra o **Hunter x Bug** no navegador.
2. Acesse a aba **🏛️ Torre Celestial**.
3. Clique no botão: **⚙️ CONECTAR PLANILHA GOOGLE**.
4. Cole a URL da Web App gerada no Passo 3 e dê **OK**.
5. O status ficará verde: `🟢 Planilha do Instrutor Conectada`!

### Opção B: Deixar Pré-Configurado para Todos os Alunos no GitHub Pages
1. Abra o arquivo `app.js` no seu editor.
2. Na linha onde tem:
   ```javascript
   const HUNTER_CONFIG_SHEETS_URL = "";
   ```
3. Cole a sua URL dentro das aspas:
   ```javascript
   const HUNTER_CONFIG_SHEETS_URL = "https://script.google.com/macros/s/SUA_URL_AQUI/exec";
   ```
4. Salve e faça o commit/push para o GitHub Pages.
5. Pronto! Qualquer aluno que abrir o link do GitHub Pages já estará automaticamente conectado à sua planilha!

---

## 🎯 O que é registrado automaticamente na Planilha:
A cada caçada concluída ou login do aluno, uma linha é criada ou atualizada com:
- **Data e Hora** da última ação
- **Serial Hunter** (ex: `#HB-1024-PY`)
- **Nome do Aluno**
- **Avatar** escolhido
- **Afinidade de Nen** (Reforço, Transformação, Materialização, etc.)
- **Caçadas Concluídas** (0 a 43)
- **Andar na Torre Celestial** (Andar 1 ao 200)
- **Jenys Acumulados**
- **Energia de Nen restante** (Aura %)
- **Status no Exame** (Fase 1, Fase 2, Fase 3 ou Licença Hunter 3 Estrelas)

E na Torre Celestial, os alunos passam a ver o ranking ao vivo dos colegas de classe! 🏆
