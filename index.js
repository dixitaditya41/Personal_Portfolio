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