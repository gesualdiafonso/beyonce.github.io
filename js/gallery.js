document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        document.querySelectorAll('.image').forEach(img => {
            img.style.animationPlayState = 'paused';
        });
    });

    image.addEventListener('mouseleave', () => {
        document.querySelectorAll('.image').forEach(img => {
            img.style.animationPlayState = 'running';
        });
    });
});
