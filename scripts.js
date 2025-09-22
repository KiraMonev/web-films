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
});
