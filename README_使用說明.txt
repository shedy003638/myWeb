曜點數位行銷網站｜快速設定說明

一、檔案內容
- index.html：首頁
- about.html：關於我們
- contact.html：聯絡我們（含姓名、Email、聯絡事項表單）
- style.css：三個頁面共用的美化樣式
- Code.gs：Google Apps Script 寄信程式

二、先設定 Google Apps Script（只需設定一次）
1. 登入自己的 Google 帳戶，開啟 https://script.google.com/
2. 點選「新增專案」。
3. 將專案原本的程式碼全部刪除，把 Code.gs 的內容完整貼上。
4. 找到這一行：
   const RECEIVER_EMAIL = "your-email@gmail.com";
   把 your-email@gmail.com 改成你要收到表單通知的 Gmail 地址。
5. 儲存專案。
6. 右上角點「部署」→「新增部署」。
7. 選取類型（齒輪圖示）→「網頁應用程式」。
8. 設定：
   - 執行身分：我
   - 誰可以存取：任何人（若帳戶或學校網域不提供此選項，需依帳戶政策調整）
9. 點「部署」，依畫面指示授權寄送 Email 的權限。
10. 複製部署完成後的「網頁應用程式網址」，網址通常以 /exec 結尾。

三、把 Google 網址放進聯絡表單
1. 用文字編輯器開啟 contact.html。
2. 找到這段：
   action="請替換成你的_Google_Apps_Script_網頁應用程式網址"
3. 將引號內文字換成剛才複製的 Apps Script 網頁應用程式網址。
4. 儲存 contact.html。

四、上傳到 GitHub
1. 在 GitHub 建立一個新的 Repository。
2. 將 index.html、about.html、contact.html、style.css 上傳到 Repository 根目錄。
   注意：Code.gs 不需要上傳到 GitHub 網站資料夾；它要放在 Google Apps Script 專案裡。
3. 進入 Repository 的 Settings → Pages。
4. 在 Build and deployment 選擇 Deploy from a branch。
5. Branch 選 main，資料夾選 /(root)，按 Save。
6. 等待 GitHub Pages 發布完成，使用頁面顯示的網址開啟網站。

五、測試表單
1. 開啟網站的「聯絡我們」頁面。
2. 填寫姓名、Email、聯絡事項後按「送出訊息」。
3. 瀏覽器會另開 Google 回覆頁面；成功時會顯示「訊息已送出！」。
4. 到你在 Code.gs 設定的 Gmail 收件匣確認郵件。

重要提醒
- Google Apps Script 寄信有每日配額限制，並非無限寄送；實際額度依 Google 帳戶類型與政策而定。
- 表單是公開入口，請勿將密碼、身分證字號或其他敏感資料放進表單。
- 如果 Apps Script 程式有修改，請到「部署」→「管理部署作業」編輯現有部署並建立新版本。
- 若部署時看不到「任何人」選項，可能是 Google 帳戶、學校或組織管理政策限制。
