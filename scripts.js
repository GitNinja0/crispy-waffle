document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('beautiful-text');
    textElement.addEventListener('mouseover', () => {
        textElement.style.transform = 'scale(1.2)';
        textElement.style.color = '#ff6';
    });

    textElement.addEventListener('mouseout', () => {
        textElement.style.transform = 'scale(1)';
        textElement.style.color = 'white';
    });
});
