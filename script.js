// --- Language support ---
const langSelect = document.getElementById("languageSelect");
const texts = {
  en: {
    header: "Free, Instant, Online Screen Capture Tool",
    pickDevice: "Pick Your Device",
    takeScreenshot: "Take Screenshot",
    hint: "When prompted, select a <b>Window</b> and click Share. You'll stay on this page, and your screenshot will appear in the preview box on the right.",
    download: "Download",
    copy: "Copy",
    privacy: "All captures happen in your browser. No files are uploaded to any server unless you explicitly share them.",
    sendMessage: "Send Message",
    donate: "Donate / Buy me a coffee ☕"
  },
  "zh-cn": {
    header: "免费、即时、在线屏幕捕捉工具",
    pickDevice: "选择您的设备",
    takeScreenshot: "截图",
    hint: "当提示时，选择一个窗口并点击分享。您将停留在此页面，截图将显示在右侧预览框中。",
    download: "下载",
    copy: "复制",
    privacy: "所有截图都在您的浏览器中完成。除非您明确分享，否则文件不会上传到任何服务器。",
    sendMessage: "发送消息",
    donate: "捐赠 / 买我一杯咖啡 ☕"
  },
  "zh-tw": {
    header: "免費、即時、在線螢幕捕捉工具",
    pickDevice: "選擇您的設備",
    takeScreenshot: "截圖",
    hint: "當提示時，選擇一個視窗並點擊分享。您將停留在此頁面，截圖將顯示在右側預覽框中。",
    download: "下載",
    copy: "複製",
    privacy: "所有截圖都在您的瀏覽器中完成。除非您明確分享，否則文件不會上傳到任何伺服器。",
    sendMessage: "發送訊息",
    donate: "捐贈 / 買我一杯咖啡 ☕"
  },
  es: {
    header: "Herramienta Gratuita de Captura de Pantalla Instantánea",
    pickDevice: "Elija su Dispositivo",
    takeScreenshot: "Tomar Captura",
    hint: "Cuando se le solicite, seleccione una ventana y haga clic en Compartir. Permanecerá en esta página y su captura aparecerá en el cuadro de vista previa a la derecha.",
    download: "Descargar",
    copy: "Copiar",
    privacy: "Todas las capturas se realizan en su navegador. Ningún archivo se carga a un servidor a menos que lo comparta explícitamente.",
    sendMessage: "Enviar Mensaje",
    donate: "Donar / Comprar un café ☕"
  }
};

function updateLanguage(lang) {
  document.getElementById("headerTitle").textContent = texts[lang].header;
  document.getElementById("pickDeviceText").textContent = texts[lang].pickDevice;
  document.getElementById("captureScreen").textContent = texts[lang].takeScreenshot;
  document.getElementById("hintText").innerHTML = texts[lang].hint;
  document.getElementById("downloadBtn").textContent = texts[lang].download;
  document.getElementById("copyBtn").textContent = texts[lang].copy;
  document.getElementById("privacyText").textContent = texts[lang].privacy;
  document.getElementById("sendMessage").textContent = texts[lang].sendMessage;
  document.querySelector('a button.big').textContent = texts[lang].donate;
  document.title = texts[lang].header;
}

langSelect.addEventListener("change", (e) => updateLanguage(e.target.value));
updateLanguage(langSelect.value);

// --- Device selection highlighting ---
document.querySelectorAll('.device-list button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.device-list button').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// --- Screen capture ---
const previewInner = document.getElementById('previewInner');
const captureScreenBtn = document.getElementById('captureScreen');
const downloadBtn = document.getElementById('downloadBtn');
const copyBtn = document.getElementById('copyBtn');
const interstitial = document.getElementById('interstitial');
const countdownEl = document.getElementById('countdown');
let latestBlobUrl = null;

function clearPreview() {
  previewInner.innerHTML = '<div class="muted">Preview area — your captured screenshot will appear here</div>';
  downloadBtn.disabled = true;
  copyBtn.disabled = true;
  if(latestBlobUrl) URL.revokeObjectURL(latestBlobUrl);
  latestBlobUrl = null;
}

async function captureScreen() {
  clearPreview();
  if(!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia){
    alert('Screen capture not supported in this browser.'); return;
  }
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:"window"}});
    const video = document.createElement('video');
    video.srcObject = stream; await video.play();
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || window.screen.width;
    canvas.height = video.videoHeight || window.screen.height;
    const ctx = canvas.getContext('2d'); ctx.drawImage(video,0,0,canvas.width,canvas.height);
    stream.getTracks().forEach(t => t.stop());
    const img = document.createElement('img'); img.src = canvas.toDataURL('image/png'); img.style.maxWidth='100%';
    previewInner.innerHTML=''; previewInner.appendChild(img);
    canvas.toBlob(blob => { if(latestBlobUrl) URL.revokeObjectURL(latestBlobUrl); latestBlobUrl=URL.createObjectURL(blob); downloadBtn.disabled=false; copyBtn.disabled=false; }, 'image/png');
  } catch(e){console.error(e); alert('Could not capture window.');}
}

function showInterstitialThenDownload() {
  if(!latestBlobUrl){alert('No screenshot ready');return;}
  interstitial.style.display='flex'; let t=3; countdownEl.textContent=t;
  const iv=setInterval(()=>{t--;countdownEl.textContent=t;if(t<=0){clearInterval(iv);interstitial.style.display='none';triggerDownload();}},1000);
}

function triggerDownload(){
  if(!latestBlobUrl){alert('No file');return;}
  const a = document.createElement('a'); a.href=latestBlobUrl; a.download='screenshot.png'; document.body.appendChild(a); a.click(); a.remove();
}

async function copyToClipboard(){
  if(!latestBlobUrl) return;
  try {
    const res = await fetch(latestBlobUrl); const blob = await res.blob();
    await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
    alert('Image copied to clipboard');
  } catch(e){alert('Copy not supported');}
}

captureScreenBtn.addEventListener('click', captureScreen);
downloadBtn.addEventListener('click', showInterstitialThenDownload);
copyBtn.addEventListener('click', copyToClipboard);

if(!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia){
  captureScreenBtn.disabled=true; captureScreenBtn.title='Screen capture not supported';
}

// --- Feedback form ---
// --- Feedback form with actual sending function ---
const sendMessageBtn = document.getElementById('sendMessage');
const userMessage = document.getElementById('userMessage');
const messageStatus = document.getElementById('messageStatus');

// 使用您註冊的 Formspree 連結
const FORMSPREE_URL = 'https://formspree.io/f/mwpnkweg';

sendMessageBtn.addEventListener('click', async () => {
  const msg = userMessage.value.trim();
  if(!msg){
    messageStatus.textContent = "Please enter a message.";
    return;
  }
  
  // 顯示發送中狀態
  messageStatus.textContent = "Sending your message...";
  sendMessageBtn.disabled = true;
  
  try {
    // 發送訊息到 Formspree
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'user@quickshot.com', // 預設郵件，Formspree 需要這個欄位
        message: msg,
        subject: 'QuickShot User Feedback',
        page: 'QuickShot Screen Capture Tool',
        timestamp: new Date().toLocaleString()
      })
    });
    
    if (response.ok) {
      messageStatus.textContent = "Thank you! Your message has been sent successfully.";
      userMessage.value = "";
    } else {
      messageStatus.textContent = "Sorry, there was an error sending your message. Please try again later.";
    }
  } catch (error) {
    console.error('Error sending message:', error);
    messageStatus.textContent = "Network error. Please check your connection and try again.";
  } finally {
    sendMessageBtn.disabled = false;
    
    // 3秒後清除狀態訊息
    setTimeout(() => {
      messageStatus.textContent = "";
    }, 3000);
  }
});