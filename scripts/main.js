// Flicker effect for glow
document.addEventListener("DOMContentLoaded", () => {
  const glows = document.querySelectorAll(".glow");
  setInterval(() => {
    glows.forEach(el => {
      el.style.textShadow = `0 0 ${Math.random() * 20}px #00fff7`;
    });
  }, 500);
});
