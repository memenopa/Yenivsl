const sections = document.querySelectorAll('.fade-in, .fade-in-up');
const options = {
  threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);
sections.forEach(section => {
  observer.observe(section);
});
