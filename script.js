// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VLSKL3Q41S');

// --- Language support ---
const langSelect = document.getElementById("languageSelect");
const texts = {
  en: {
    header: "QuickShot - Desktop Online Screenshot Tool",
    pickDevice: "Desktop Online Screenshot Tool",
    takeScreenshot: "Capture Screen",
    hint: "When prompted, select a <b>Window</b> and click Share. <br><span style='color:var(--accent-color)'>You'll automatically return to this page after selection.</span>",
    download: "Download",
    privacy: "QuickShot is a free tool created by QuickScreenStudio. Your privacy is respected.",
    instructionsTitle: "How to use QuickShot:",
    instructions: [
        "Click the \"Capture Screen\" button",
        "Select whether to share your entire screen or a specific window",
        "Your screenshot will be taken and displayed above",
        "Click the \"Download\" button to save the image to your device"
    ],
    feature1: "Web-Based",
    feature1Desc: "No installation required. Works in any modern browser.",
    feature2: "Privacy Focused",
    feature2Desc: "Your screenshots are processed locally and never uploaded to any server.",
    feature3: "Fast & Easy",
    feature3Desc: "Capture and download screenshots in just a few clicks.",
    donationTitle: "Support QuickShot",
    donationText: "If you find this tool helpful, please consider supporting its development.",
    donationButton: "Donate / Buy me a coffee",
    messageTitle: "Send us a message",
    messageText: "Have feedback or suggestions? We'd love to hear from you!",
    messagePlaceholder: "Type your message here...",
    messageButton: "Send Message"
  },
  "zh-cn": {
    header: "QuickShot - 电脑桌面在线截图工具",
    pickDevice: "电脑桌面在线截图工具",
    takeScreenshot: "截图",
    hint: "当提示时，选择一个窗口并点击分享。<br><span style='color:var(--accent-color)'>选择后您将自动返回此页面。</span>",
    download: "下载",
    privacy: "QuickShot 是 QuickScreenStudio 创建的一款免费工具。您的隐私受到尊重。",
    instructionsTitle: "如何使用 QuickShot:",
    instructions: [
        "点击“截图”按钮",
        "选择要共享的整个屏幕或特定窗口",
        "您的截图将被拍摄并显示在上方",
        "点击“下载”按钮将图像保存到您的设备"
    ],
    feature1: "基于网络",
    feature1Desc: "无需安装。可在任何现代浏览器中使用。",
    feature2: "注重隐私",
    feature2Desc: "您的截图在本地处理，永远不会上传到任何服务器。",
    feature3: "快速简便",
    feature3Desc: "只需点击几下即可捕获和下载截图。",
    donationTitle: "支持 QuickShot",
    donationText: "如果您觉得这个工具有用，请考虑支持它的开发。",
    donationButton: "捐赠 / 买我一杯咖啡",
    messageTitle: "给我们发消息",
    messageText: "有反馈或建议吗？我们很乐意听取您的意见！",
    messagePlaceholder: "在此输入您的消息...",
    messageButton: "发送消息"
  },
  "zh-tw": {
    header: "QuickShot - 電腦桌面在線截圖工具",
    pickDevice: "電腦桌面在線截圖工具",
    takeScreenshot: "截圖",
    hint: "當提示時，選擇一個視窗並點擊分享。<br><span style='color:var(--accent-color)'>選擇後您將自動返回此頁面。</span>",
    download: "下載",
    privacy: "QuickShot 是 QuickScreenStudio 創建的一款免費工具。您的隱私受到尊重。",
    instructionsTitle: "如何使用 QuickShot:",
    instructions: [
        "點擊“截圖”按鈕",
        "選擇要共享的整個螢幕或特定視窗",
        "您的截圖將被拍攝並顯示在上方",
        "點擊“下載”按鈕將圖像保存到您的設備"
    ],
    feature1: "基於網絡",
    feature1Desc: "無需安裝。可在任何現代瀏覽器中使用。",
    feature2: "注重隱私",
    feature2Desc: "您的截圖在本地處理，永遠不會上傳到任何伺服器。",
    feature3: "快速簡便",
    feature3Desc: "只需點擊幾下即可捕獲和下載截圖。",
    donationTitle: "支持 QuickShot",
    donationText: "如果您覺得這個工具有用，請考慮支持它的開發。",
    donationButton: "捐贈 / 買我一杯咖啡",
    messageTitle: "給我們發消息",
    messageText: "有反饋或建議嗎？我們很樂意聽取您的意見！",
    messagePlaceholder: "在此輸入您的消息...",
    messageButton: "發送消息"
  },
  es: {
    header: "QuickShot - Herramienta de captura de pantalla en línea de escritorio",
    pickDevice: "Herramienta de captura de pantalla en línea de escritorio",
    takeScreenshot: "Capturar Pantalla",
    hint: "Cuando se le solicite, seleccione una ventana y haga clic en Compartir. <br><span style='color:var(--accent-color)'>Volverá automáticamente a esta página después de la selección.</span>",
    download: "Descargar",
    privacy: "QuickShot es una herramienta gratuita creada por QuickScreenStudio. Su privacidad es respetada.",
    instructionsTitle: "Cómo usar QuickShot:",
    instructions: [
        "Haga clic en el botón \"Capturar pantalla\"",
        "Seleccione si compartir toda la pantalla o una ventana específica",
        "Su captura de pantalla se tomará y mostrará arriba",
        "Haga clic en el botón \"Descargar\" para guardar la imagen en su dispositivo"
    ],
    feature1: "Basado en web",
    feature1Desc: "No requiere instalación. Funciona en cualquier navegador moderno.",
    feature2: "Enfocado en la privacidad",
    feature2Desc: "Sus capturas de pantalla se procesan localmente y nunca se cargan en ningún servidor.",
    feature3: "Rápido y fácil",
    feature3Desc: "Capture y descargue capturas de pantalla con solo unos pocos clics.",
    donationTitle: "Apoya QuickShot",
    donationText: "Si encuentra útil esta herramienta, considere apoyar su desarrollo.",
    donationButton: "Donar / Invítame un café",
    messageTitle: "Envíanos a message",
    messageText: "¿Tiene comentarios o sugerencias? ¡Nos encantaría saber de usted!",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    messageButton: "Enviar Mensaje"
  }
};

function updateLanguage(lang) {
  document.getElementById("pickDeviceText").textContent = texts[lang].pickDevice;
  document.getElementById("captureText").textContent = texts[lang].takeScreenshot;
  document.getElementById("hintText").innerHTML = texts[lang].hint;
  document.getElementById("downloadText").textContent = texts[lang].download;
  document.getElementById("privacyText").textContent = texts[lang].privacy;
  
  // Update instructions
  document.querySelector('.instructions h3').innerHTML = '<i class="fas fa-info-circle"></i> ' + texts[lang].instructionsTitle;
  const instructionItems = document.querySelectorAll('.instructions li');
  texts[lang].instructions.forEach((item, index) => {
      if (instructionItems[index]) {
          instructionItems[index].textContent = item;
      }
  });
  
  // Update features
  const featureTitles = document.querySelectorAll('.feature h3');
  const featureDescriptions = document.querySelectorAll('.feature p');
  
  if (featureTitles[0]) featureTitles[0].textContent = texts[lang].feature1;
  if (featureDescriptions[0]) featureDescriptions[0].textContent = texts[lang].feature1Desc;
  
  if (featureTitles[1]) featureTitles[1].textContent = texts[lang].feature2;
  if (featureDescriptions[1]) featureDescriptions[1].textContent = texts[lang].feature2Desc;
  
  if (featureTitles[2]) featureTitles[2].textContent = texts[lang].feature3;
  if (featureDescriptions[2]) featureDescriptions[2].textContent = texts[lang].feature3Desc;
  
  // Update donation section
  document.querySelector('.donation-section h3').innerHTML = '<i class="fas fa-heart"></i> ' + texts[lang].donationTitle;
  document.querySelector('.donation-section p').textContent = texts[lang].donationText;
  document.querySelector('.donation-btn').innerHTML = '<i class="fas fa-coffee"></i> ' + texts[lang].donationButton;
  
  // Update message section
  document.querySelector('.message-section h3').innerHTML = '<i class="fas fa-envelope"></i> ' + texts[lang].messageTitle;
  document.querySelector('.message-section p').textContent = texts[lang].messageText;
  document.getElementById('userMessage').placeholder = texts[lang].messagePlaceholder;
  document.getElementById('sendMessage').innerHTML = '<i class="fas fa-paper-plane"></i> ' + texts[lang].messageButton;
  
  document.title = texts[lang].header;
}

langSelect.addEventListener("change", (e) => updateLanguage(e.target.value));
updateLanguage(langSelect.value);

// --- Screen capture functionality ---
const captureScreenBtn = document.getElementById('captureScreen');
const downloadBtn = document.getElementById('downloadBtn');
const previewImage = document.getElementById('previewImage');
const placeholderIcon = document.querySelector('.placeholder-icon');
const interstitialAd = document.getElementById('interstitialAd');
const countdownEl = document.getElementById('countdown');
let latestBlobUrl = null;
let countdownTimer;

async function captureScreen() {
    // Show loading state
    const originalText = captureScreenBtn.innerHTML;
    captureScreenBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Capturing...';
    captureScreenBtn.disabled = true;
    
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        alert('Screen capture is not supported in your browser. Please use Chrome, Edge, or Firefox.');
        captureScreenBtn.innerHTML = originalText;
        captureScreenBtn.disabled = false;
        return;
    }
    
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { cursor: "always" },
            audio: false
        });
        
        const video = document.createElement('video');
        video.srcObject = stream;
        
        video.addEventListener('loadedmetadata', () => {
            video.play();
            
            // Wait a moment for video to render properly
            setTimeout(() => {
                // Create canvas with exact video dimensions
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                
                // Draw the video frame to canvas
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                // Stop the video stream
                stream.getTracks().forEach(track => track.stop());
                
                // Convert canvas to image and display with correct aspect ratio
                const dataUrl = canvas.toDataURL('image/png');
                previewImage.src = dataUrl;
                previewImage.style.display = 'block';
                
                // Set appropriate sizing to maintain aspect ratio
                const aspectRatio = canvas.width / canvas.height;
                
                if (canvas.width > canvas.height) {
                    // Landscape image
                    previewImage.style.width = '100%';
                    previewImage.style.height = 'auto';
                } else {
                    // Portrait image
                    previewImage.style.width = 'auto';
                    previewImage.style.height = '100%';
                }
                
                // Hide the default icon
                placeholderIcon.style.display = 'none';
                
                // Enable the download button
                downloadBtn.disabled = false;
                
                // Set up download functionality
                canvas.toBlob(blob => {
                    if (latestBlobUrl) URL.revokeObjectURL(latestBlobUrl);
                    latestBlobUrl = URL.createObjectURL(blob);
                }, 'image/png');
                
                // Track capture event in Google Analytics
                gtag('event', 'capture', {
                    'event_category': 'screenshot',
                    'event_label': 'screen_capture'
                });
                
                // Restore button state
                captureScreenBtn.innerHTML = originalText;
                captureScreenBtn.disabled = false;
            }, 300); // Increased delay to ensure video is fully rendered
        });
        
    } catch(err) {
        console.error('Error capturing screen:', err);
        alert('Sorry, there was an error capturing your screen. Please make sure you have given permission to share your screen.');
        
        // Restore button state
        captureScreenBtn.innerHTML = originalText;
        captureScreenBtn.disabled = false;
    }
}

function downloadScreenshot() {
    if (!latestBlobUrl) {
        alert('No screenshot available to download. Please capture a screenshot first.');
        return;
    }
    
    // Show interstitial ad with countdown
    interstitialAd.style.display = 'flex';
    
    let countdown = 5;
    countdownEl.textContent = `Your download will start in ${countdown} seconds...`;
    
    // Start countdown
    clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
        countdown--;
        
        if (countdown > 0) {
            countdownEl.textContent = `Your download will start in ${countdown} seconds...`;
        } else {
            clearInterval(countdownTimer);
            startDownload();
            interstitialAd.style.display = 'none';
        }
    }, 1000);
}

function startDownload() {
    if (!latestBlobUrl) return;
    
    const a = document.createElement('a');
    a.href = latestBlobUrl;
    a.download = 'quickshot-screenshot.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Track download event in Google Analytics
    gtag('event', 'download', {
        'event_category': 'screenshot',
        'event_label': 'png_download'
    });
}

// --- Message functionality ---
const sendMessageBtn = document.getElementById('sendMessage');
const userMessage = document.getElementById('userMessage');
const messageStatus = document.getElementById('messageStatus');
const FORMSPREE_URL = 'https://formspree.io/f/mwpnkweg';

sendMessageBtn.addEventListener('click', async () => {
    const msg = userMessage.value.trim();
    if(!msg){
        messageStatus.textContent = "Please enter a message.";
        return;
    }
    
    messageStatus.textContent = "Sending your message...";
    sendMessageBtn.disabled = true;
    
    try {
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'quickscreen.studio@gmail.com',
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
    } catch(error) {
        console.error('Error sending message:', error);
        messageStatus.textContent = "Network error. Please check your connection and try again.";
    } finally {
        sendMessageBtn.disabled = false;
        
        setTimeout(() => {
            messageStatus.textContent = "";
        }, 3000);
    }
});

// Add event listeners
captureScreenBtn.addEventListener('click', captureScreen);
downloadBtn.addEventListener('click', downloadScreenshot);

// Check if screen capture is supported
if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
    captureScreenBtn.disabled = true;
    captureScreenBtn.title = 'Screen capture not supported in your browser';

}


