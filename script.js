document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.grid img');
    images.forEach((img, index) => {
        img.style.animation = `fadeIn 1s ease-out ${index * 0.1}s forwards`;
        img.style.opacity = 0;
    });
});
