// Основной JS для киносайта
document.addEventListener('DOMContentLoaded', () => {

    // --- Тема ---
    const themeBtn = document.querySelector('[data-theme-toggle]');
    let currentTheme = localStorage.getItem('theme') || 'dark';

    const applyTheme = () => {
        document.body.classList.toggle('theme--light', currentTheme === 'light');
        if (themeBtn) {
            themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        }
    };

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme();
            localStorage.setItem('theme', currentTheme);
        });
    }

    applyTheme();


    // --- Факты ---
    const factsBtn = document.querySelector('[data-facts-toggle]');
    const hiddenFacts = document.querySelectorAll('.facts__item--hidden');
    let factsShown = false;

    if (factsBtn) {
        factsBtn.addEventListener('click', () => {
            factsShown = !factsShown;
            hiddenFacts.forEach(fact => {
                fact.style.display = factsShown ? 'block' : 'none';
            });
            factsBtn.textContent = factsShown ? 'Скрыть' : 'Показать всё';
        });
    }


    // --- Анимация при скролле ---
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    let delay = 0;
    let currentSection = null;
    
    animateElements.forEach(element => {
        const section = element.closest('section');
        
        if (section !== currentSection) {
            delay = 0;
            currentSection = section;
        }
        
        element.style.transitionDelay = `${delay}s`;
        delay += 0.1;
        
        observer.observe(element);
    });


    // --- Анимация контейнера с фильмом ---
    window.addEventListener('load', () => {
    const heroBlock = document.querySelector('.film-hero__container.hero-block-animate');

    if (heroBlock) {
        heroBlock.classList.add('active');
    }
    });


    // --- Вкладки ---
    const tabButtons = document.querySelectorAll('.tabs__button');
    const tabContents = document.querySelectorAll('.tabs__content');

    tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
    });
});
