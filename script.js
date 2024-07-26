document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        const inView = scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight;

        if (inView) {
            section.querySelectorAll('.animate-text').forEach(text => {
                text.classList.add('in-view');
            });
        } else {
            section.querySelectorAll('.animate-text').forEach(text => {
                text.classList.remove('in-view');
            });
        }
    });
});
