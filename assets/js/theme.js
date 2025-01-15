document.addEventListener('DOMContentLoaded', () => {
    const lightBtn = document.querySelector('.light-mode');
    const darkBtn = document.querySelector('.dark-mode');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Light mode button
    lightBtn.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    });

    // Dark mode button
    darkBtn.addEventListener('click', () => {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    });
});
