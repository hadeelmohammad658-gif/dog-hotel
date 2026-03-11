// script.js

// حرك البطاقات عند المرور بالماوس
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.price-card, .card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // موقع الماوس داخل البطاقة
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10; // زاوية ميلان X
      const rotateY = ((x - centerX) / centerX) * -10; // زاوية ميلان Y

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      card.style.boxShadow = `${-rotateY*2}px ${rotateX*2}px 20px rgba(0,0,0,0.2)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      card.style.boxShadow = `0 10px 20px rgba(0,0,0,0.05)`;
    });
  });
});