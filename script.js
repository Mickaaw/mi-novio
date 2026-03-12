const GIFS = [
  'https://media.tenor.com/qyl20J82hZgAAAAM/me-and-him-both-in-love.gif',
  'https://media.tenor.com/Rs2Aq8BNw3sAAAAM/cute-couple-kiss.gif',
  'https://media.tenor.com/ojw3M_GgUo4AAAAM/cute-couple-hug.gif',
  'https://media.tenor.com/r-YmUnBECagAAAAM/cookieluvi-luvicookie.gif',
  'https://media.tenor.com/tK8xX-Hs9QAAAAAM/peach-and-goma.gif',
];

const NO_MESSAGES = [
  "😟 C'est non ?! Ça fait mal...",
  "🥺 Donne-moi une chance !",
  "😭 Mais pourquooooi ?!",
  "🙏 Allez, un tout petit oui ?",
  "💔 Mon cœur est brisé...",
  "😤 Ok ok... tu peux encore changer d'avis !",
  "🐣 T'as pas le cœur de refuser ça ?",
  "😩 Le bouton Oui est BIEN meilleur !",
  "🌹 Je t'offrirai mil besos más, promis !",
  "😿 Même les chats pleurent pour moi...",
];

const QUESTIONS = [
  "💝 Dis-moi oui... s'il te plaît ?",
  "🥺 Non ? Vraiment ?!",
  "😩 C'est ta dernière chance !",
  "😭 J'y crois pas...",
  "💔 Tu veux me faire pleurer ?",
  "🙏 Pitié pitié pitié !",
  "💌 Le bouton Oui est BIEN meilleur !",
];

let noCount = 0;
let musicPlaying = false;

// Cœurs flottants
const heartsContainer = document.getElementById('hearts-bg');
const HEART_EMOJIS = ['❤️','💕','💖','💗','💓','💞','💝','🌸','✨'];
function spawnHeart() {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
  const size = 14 + Math.random() * 18;
  const dur = 6 + Math.random() * 8;
  h.style.cssText = `left:${Math.random()*100}%;font-size:${size}px;animation-duration:${dur}s;animation-delay:${Math.random()*3}s`;
  heartsContainer.appendChild(h);
  setTimeout(() => h.remove(), (dur + 3) * 1000);
}
setInterval(spawnHeart, 400);

// Toast
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// Bouton Non
function clickNo() {
  noCount++;
  const btn = document.getElementById('btn-no');
  btn.style.fontSize = Math.min(0.75 + noCount * 0.18, 3.5) + 'rem';
  btn.style.padding = (0.6 + noCount * 0.1) + 'rem ' + (1.8 + noCount * 0.2) + 'rem';
  document.getElementById('question-text').textContent = QUESTIONS[Math.min(noCount - 1, QUESTIONS.length - 1)];
  const img = document.getElementById('main-gif');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = GIFS[Math.min(noCount, GIFS.length - 1)];
    img.style.opacity = '1';
  }, 200);
  showToast(NO_MESSAGES[Math.floor(Math.random() * NO_MESSAGES.length)]);
}

// Bouton Oui
function goYes() {
  window.location.href = 'yes.html';
}

// Musique
function toggleMusic() {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  if (musicPlaying) { audio.pause(); btn.textContent = '🔇'; }
  else { audio.play().catch(() => {}); btn.textContent = '🔊'; }
  musicPlaying = !musicPlaying;
}
