document.addEventListener('DOMContentLoaded', () => {
  const heroTextElement = document.getElementById('heroText');
  const originalText = heroTextElement.textContent;
  heroTextElement.textContent = '';

  originalText.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    if (char !== ' ') {
      span.style.animation = `glow 1.5s ease ${index * 0.05}s infinite alternate`;
    }
    heroTextElement.appendChild(span);
  });
});

const style = document.createElement('style');
style.textContent = `
@keyframes glow {
  from {
    text-shadow: none;
  }
  to {
    text-shadow: 0 0 5px var(--neon-cyan), 0 0 10px var(--neon-cyan);
  }
}`;
document.head.appendChild(style);
