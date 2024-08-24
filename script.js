document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
      strings: ['Student', 'Web Developer', 'Web Designer'],
      typeSpeed: 40,
    });
  });

  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});
const emojis = document.querySelectorAll('.emoji');

emojis.forEach((emoji, index) => {
    emoji.addEventListener('click', () => {
        emojis.forEach((em, i) => {
            if (i <= index) {
                em.classList.add('filled');
                em.textContent = '🔵'; // Filled emoji
            } else {
                em.classList.remove('filled');
                em.textContent = '⚪'; // Empty emoji
            }
        });
    });
});