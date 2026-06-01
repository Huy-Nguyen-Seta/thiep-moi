// Google Apps Script — Sổ lưu bút thiệp cưới
// Paste toàn bộ file này vào Apps Script Editor, rồi Deploy → New deployment

const SHEET_NAME = 'Loi chuc'  // tên tab trong Google Sheet

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    sheet.appendRow(['ID', 'Tên', 'Lời chúc', 'Thời gian'])
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold')
  }
  return sheet
}

// GET — trả về toàn bộ lời chúc (JSON)
function doGet(e) {
  const sheet = getSheet()
  const rows  = sheet.getDataRange().getValues()
  const messages = rows.slice(1).map(r => ({
    id:   r[0],
    name: r[1],
    text: r[2],
    time: r[3],
  })).reverse()  // mới nhất lên đầu

  return ContentService
    .createTextOutput(JSON.stringify(messages))
    .setMimeType(ContentService.MimeType.JSON)
}

// POST — thêm lời chúc mới
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const sheet = getSheet()
    const id = Date.now()
    sheet.appendRow([id, data.name, data.text, data.time])
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, id }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
