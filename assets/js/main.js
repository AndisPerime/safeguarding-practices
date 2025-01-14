// Add smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Highlight active steps on scroll
    const steps = document.querySelectorAll('.steps-list li');
    
    const highlightStep = () => {
        steps.forEach(step => {
            const rect = step.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                step.style.backgroundColor = '#3498db';
                step.style.color = 'white';
            } else {
                step.style.backgroundColor = '#ecf0f1';
                step.style.color = '#2c3e50';
            }
        });
    };

    window.addEventListener('scroll', highlightStep);
});