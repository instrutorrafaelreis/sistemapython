/**
 * ==============================================================================
 * HUNTER × BUG // SINCRONIZAÇÃO EM NUVEM VIA GOOGLE APPS SCRIPT
 * Sistema de Armazenamento e Placar da Torre Celestial sem Banco de Dados
 * ==============================================================================
 * 
 * INSTRUÇÕES DE INSTALAÇÃO (2 MINUTOS):
 * 1. Acesse https://sheets.google.com e crie uma nova planilha em branco.
 * 2. Dê um nome para a planilha, ex: "Hunter x Bug - Registro da Turma".
 * 3. No menu superior, clique em: Extensões -> Apps Script.
 * 4. Apague todo o código do editor e cole este script completo.
 * 5. Clique no ícone de "Salvar" (disquete).
 * 6. No canto superior direito, clique no botão azul: "Implantar" (Deploy) -> "Nova implantação" (New deployment).
 * 7. Clique na engrenagem ao lado de "Selecionar tipo" e escolha: "App da Web" (Web app).
 * 8. Preencha os campos exatamente assim:
 *    - Descrição: "API Hunter x Bug"
 *    - Executar como: "Eu" (seu e-mail do Google)
 *    - Quem pode acessar: "Qualquer pessoa" (Anyone) -> [MUITO IMPORTANTE para os alunos conseguirem enviar]
 * 9. Clique em "Implantar" (conceda as permissões da sua conta caso o Google solicite).
 * 10. Copie a "URL do app da Web" gerada (termina com "/exec").
 * 11. Cole essa URL no Hunter x Bug:
 *     - No botão "⚙️ CONECTAR PLANILHA GOOGLE" da Torre Celestial, OU
 *     - Diretamente no arquivo app.js na constante HUNTER_CONFIG_SHEETS_URL!
 * ==============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Trava para evitar conflito caso dois alunos terminem a missão no mesmo segundo
  lock.tryLock(15000);
  
  try {
    var sheet = getOrCreateHuntersSheet();
    var payload;
    
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else {
      payload = e.parameter || {};
    }
    
    var student = payload.student || payload;
    if (!student || !student.name) {
      return jsonResponse({ status: "error", message: "Identificação do Hunter ausente." });
    }
    
    var data = sheet.getDataRange().getValues();
    var rowIndex = -1;
    var searchSerial = (student.serial || "").toString().toLowerCase().trim();
    var searchName = (student.name || "").toString().toLowerCase().trim();
    
    // Procura se o aluno já existe na planilha
    for (var i = 1; i < data.length; i++) {
      var rowSerial = (data[i][1] || "").toString().toLowerCase().trim();
      var rowName = (data[i][2] || "").toString().toLowerCase().trim();
      
      if ((searchSerial && rowSerial === searchSerial) || (rowName === searchName)) {
        rowIndex = i + 1; // Linha 1-based no Google Sheets
        break;
      }
    }
    
    var now = Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss");
    var completedMissions = Number(student.completedMissions) || 0;
    var floorNum = Math.max(1, Math.min(200, completedMissions * 5));
    var jenyNum = Number(student.jenys) || (completedMissions * 800);
    var nenEnergy = (student.nenEnergy !== undefined && student.nenEnergy !== null) ? Number(student.nenEnergy) : 100;
    
    var statusExame;
    if (completedMissions >= 43) {
      statusExame = "👑 Licença Vitalícia (3 Estrelas)";
    } else if (completedMissions >= 40) {
      statusExame = "👑 Fase 3 (Chefões Quimera)";
    } else if (completedMissions >= 20) {
      statusExame = "⚡ Fase 2 (Reflexos If/Else)";
    } else {
      statusExame = "📜 Fase 1 (Nen & Variáveis)";
    }

    var rowValues = [
      now,                                // Coluna A: Data/Hora de Atualização
      student.serial || "#HB-0000-PY",    // Coluna B: Serial Hunter
      student.name,                       // Coluna C: Nome do Aluno
      student.avatar || "🥷",             // Coluna D: Avatar
      student.nen || "Reforço",           // Coluna E: Afinidade de Nen
      completedMissions,                  // Coluna F: Caçadas Concluídas
      "Andar " + floorNum,                // Coluna G: Andar na Torre
      jenyNum.toLocaleString("pt-BR") + " ₭", // Coluna H: Jenys
      nenEnergy + "%",                    // Coluna I: Energia de Nen (Aura)
      statusExame                         // Coluna J: Status no Exame
    ];
    
    if (rowIndex > 0) {
      // Atualiza o registro existente
      sheet.getRange(rowIndex, 1, 1, rowValues.length).setValues([rowValues]);
    } else {
      // Adiciona nova linha com o novo aluno
      sheet.appendRow(rowValues);
    }
    
    // Retorna o ranking consolidado de todos os alunos
    var ranking = getRankingFromSheet(sheet);
    
    return jsonResponse({
      status: "success",
      message: "Progresso do Hunter " + student.name + " registrado na Planilha!",
      updatedStudent: student.name,
      ranking: ranking
    });
    
  } catch (err) {
    return jsonResponse({
      status: "error",
      message: err.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    var sheet = getOrCreateHuntersSheet();
    var ranking = getRankingFromSheet(sheet);
    
    return jsonResponse({
      status: "success",
      totalStudents: ranking.length,
      ranking: ranking
    });
  } catch (err) {
    return jsonResponse({
      status: "error",
      message: err.toString()
    });
  }
}

function getOrCreateHuntersSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Hunters");
  
  if (!sheet) {
    sheet = ss.getSheets()[0];
    sheet.setName("Hunters");
  }
  
  // Se for a primeira vez que a planilha é usada, cria os cabeçalhos estilizados
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Última Atividade",
      "Serial Hunter",
      "Nome do Aluno",
      "Avatar",
      "Afinidade Nen",
      "Caçadas Concluídas",
      "Andar Torre Celestial",
      "Jenys (Recompensa)",
      "Energia Nen (Aura)",
      "Status no Exame"
    ];
    
    sheet.appendRow(headers);
    
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0F1117");
    headerRange.setFontColor("#10B981");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Roboto Mono");
    headerRange.setHorizontalAlignment("center");
    
    sheet.setFrozenRows(1);
    
    // Configura larguras adequadas para leitura fácil
    sheet.setColumnWidth(1, 160); // Data
    sheet.setColumnWidth(2, 130); // Serial
    sheet.setColumnWidth(3, 190); // Nome
    sheet.setColumnWidth(4, 70);  // Avatar
    sheet.setColumnWidth(5, 180); // Nen
    sheet.setColumnWidth(6, 150); // Caçadas
    sheet.setColumnWidth(7, 160); // Andar
    sheet.setColumnWidth(8, 140); // Jenys
    sheet.setColumnWidth(9, 140); // Nen %
    sheet.setColumnWidth(10, 220); // Status
  }
  
  return sheet;
}

function getRankingFromSheet(sheet) {
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  
  var list = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var completed = Number(row[5]) || 0;
    var floorNum = Math.max(1, Math.min(200, completed * 5));
    var rawJeny = (row[7] || "").toString().replace(/[^\d]/g, "");
    var jenys = Number(rawJeny) || (completed * 800);
    var rawNen = (row[8] || "").toString().replace(/[^\d]/g, "");
    var nenEnergy = rawNen !== "" ? Number(rawNen) : 100;
    
    list.push({
      lastActive: row[0],
      serial: row[1] || "#HB-0000-PY",
      name: row[2] || "Hunter",
      avatar: row[3] || "🥷",
      nen: row[4] || "Reforço",
      completedMissions: completed,
      floor: floorNum,
      jenys: jenys,
      nenEnergy: nenEnergy,
      status: row[9] || "Em Andamento"
    });
  }
  
  // Ordena ranking por caçadas concluídas decrescente, depois por jenys
  list.sort(function(a, b) {
    if (b.completedMissions !== a.completedMissions) {
      return b.completedMissions - a.completedMissions;
    }
    return b.jenys - a.jenys;
  });
  
  return list;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
