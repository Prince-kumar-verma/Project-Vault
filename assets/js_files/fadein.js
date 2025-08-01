window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.category-card').forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('fade-in');
    }, 120 * i);
  });
});