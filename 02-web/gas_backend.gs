// ============================================================
// 智簡 Zhi Jian - Google Apps Script 後端
// 功能：接收前端 fetch POST，寫入 Google 試算表，回傳 JSON
// 使用方法：
//   1. 開啟 Google 試算表 → 延伸模組 → Apps Script
//   2. 貼上這段代碼
//   3. 點擊「部署」→「新增部署作業」→ 類型選「網頁應用程式」
//   4. 執行身分：「我」；存取權：「所有人（包括匿名）」
//   5. 部署後複製「網頁應用程式網址」，貼到 index.html 的 GAS_API_URL
// ============================================================

// ── 設定：請填寫您的 Google 試算表 ID ──────────────────────────
// 試算表網址中間那一段即為 ID
// 例如：https://docs.google.com/spreadsheets/d/ >>>THIS_ID<<< /edit
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME = '預約名單'; // 試算表的分頁名稱，請確保已建立此分頁

// ── 處理 POST 請求（前端 fetch 送來的表單資料）────────────────────
function doPost(e) {
  console.log('📥 收到 POST 請求，開始處理...');

  try {
    // 從前端 FormData 讀取各欄位
    // 欄位名稱對應 HTML input 的 name 屬性
    const company     = e.parameter.company || '（未填）';
    const contactName = e.parameter.name    || '（未填）';  // 對應前端 name="name"
    const email       = e.parameter.email   || '（未填）';
    const phone       = e.parameter.phone   || '（未填）';
    const timestamp   = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

    console.log('📋 收到資料：', company, contactName, email, phone);

    // 開啟試算表並寫入新一行
    const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      console.error('❌ 找不到分頁：', SHEET_NAME);
      return buildResponse('error', '找不到試算表分頁');
    }

    // 如果是第一次寫入，自動加上標題列
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['時間戳記', '公司名稱', '聯絡人', 'Email', '電話']);
      console.log('✅ 已自動建立標題列');
    }

    // 寫入資料
    sheet.appendRow([timestamp, company, contactName, email, phone]);
    console.log('✅ 資料已寫入試算表');

    // 回傳成功 JSON（前端會判斷 result === 'success'）
    return buildResponse('success', '資料已收到');

  } catch (error) {
    console.error('❌ 發生錯誤：', error.toString());
    return buildResponse('error', error.toString());
  }
}

// ── 建立 JSON 回應（自動加 CORS header）──────────────────────────
function buildResponse(result, message) {
  const payload = JSON.stringify({ result: result, message: message });
  return ContentService
    .createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}

// ── 測試用：處理 GET 請求（瀏覽器直接開啟網址時可確認部署成功）──────
function doGet(e) {
  return buildResponse('ok', '智簡 GAS API 已部署成功，請使用 POST 方法送出表單資料。');
}
