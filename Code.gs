// 將下方信箱改成你要收取表單通知的 Gmail 地址
const RECEIVER_EMAIL = "your-email@gmail.com";

function doPost(e) {
  const p = (e && e.parameter) ? e.parameter : {};

  // 簡易防垃圾訊息：隱藏欄位若被填寫，就不寄信
  if (p.website) {
    return messagePage("已收到", "感謝你的留言。");
  }

  const name = String(p.name || "").trim().slice(0, 80);
  const email = String(p.email || "").trim().slice(0, 120);
  const message = String(p.message || "").trim().slice(0, 3000);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return messagePage("資料不完整", "請返回上一頁，確認姓名、Email 與聯絡事項都已正確填寫。");
  }

  const subject = "網站聯絡表單通知";
  const body =
    "你收到一則網站新留言：\n\n" +
    "姓名：" + name + "\n" +
    "Email：" + email + "\n\n" +
    "聯絡事項：\n" + message;

  try {
    MailApp.sendEmail({
      to: RECEIVER_EMAIL,
      subject: subject,
      body: body,
      replyTo: email,
      name: "曜點數位行銷網站"
    });
    return messagePage("訊息已送出！", "感謝你的聯絡，我們已收到你的訊息。你可以關閉此分頁，返回網站。");
  } catch (error) {
    return messagePage("寄送未成功", "目前無法寄出訊息，請稍後再試，或使用其他方式聯絡網站管理者。");
  }
}

function messagePage(title, message) {
  return HtmlService.createHtmlOutput(
    '<!doctype html><html lang="zh-Hant"><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<body style="font-family:Arial,sans-serif;background:#f3f7fb;padding:40px 18px;color:#142b49">' +
    '<main style="max-width:520px;margin:8vh auto;background:white;padding:36px;border-radius:14px;text-align:center;box-shadow:0 12px 40px #142b4915">' +
    '<div style="font-size:38px;color:#3269a8">✦</div><h1>' + title + '</h1>' +
    '<p style="line-height:1.9;color:#64748b">' + message + '</p>' +
    '<p style="font-size:12px;color:#94a3b8">曜點數位行銷</p></main></body></html>'
  ).setTitle(title);
}