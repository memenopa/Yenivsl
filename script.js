
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.grid img');

    // replaced for audio support

    const glowSound = document.getElementById('glow-sound');

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                glowSound.currentTime = 0;
                glowSound.play().catch(() => {}); // mute autoplay errors
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.6
    });
    ((entries) => {
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
