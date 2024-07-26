document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.innerText;

    // Buchstaben in span-Elemente aufteilen
    textElement.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');

    // Zufällige Richtung für jeden Buchstaben festlegen
    document.querySelectorAll('#animated-text span').forEach(span => {
        const direction = Math.floor(Math.random() * 4);
        switch (direction) {
            case 0: span.style.animation = 'fromTop 0.6s ease forwards'; break;
            case 1: span.style.animation = 'fromBottom 0.6s ease forwards'; break;
            case 2: span.style.animation = 'fromLeft 0.6s ease forwards'; break;
            case 3: span.style.animation = 'fromRight 0.6s ease forwards'; break;
        }
    });

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
