
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.grid img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.6
    });

    images.forEach(img => {
        observer.observe(img);
    });
});
