let fontSize = 100;

function changeFontSize(action) {
    if (action === 'increase' && fontSize < 150) fontSize += 10;
    else if (action === 'decrease' && fontSize > 70) fontSize -= 10;
    document.body.style.fontSize = fontSize + "%";
}

function speakText() {
    const text = document.body.innerText;
    if (!window.speechSynthesis.speaking) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'ar-SA';
        window.speechSynthesis.speak(speech);
    }
}

// ✅ هاي الدالة كانت ناقصة
function stopSpeaking() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
}

// رسالة الترحيب
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    setTimeout(() => {
        alert("🐾 أهلاً بك في Loving Homes 🐾");
    }, 800);
}

// زر المنيو
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger-btn');
    const menu = document.querySelector('.قائمةالتنقل');
    if (btn && menu) {
        btn.onclick = function() {
            menu.classList.toggle('نشطة'); 
        };
    }
});