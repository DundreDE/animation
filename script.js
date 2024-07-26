document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.innerText;
    
    // Buchstaben in span-Elemente aufteilen
    textElement.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.text-container').classList.add('in-view');
            } else {
                document.querySelector('.text-container').classList.remove('in-view');
            }
        });
    }, observerOptions);

    observer.observe(textElement);
});
