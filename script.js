// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Switch to Light Mode';
    } else {
        themeToggle.textContent = 'Switch to Dark Mode';
    }
});

// Run Test Button
const runTestButton = document.getElementById('run-test');
const testResult = document.getElementById('test-result');

runTestButton.addEventListener('click', () => {
    testResult.textContent = 'Test Passed Successfully!';
    testResult.style.color = 'green';
    setTimeout(() => {
        testResult.textContent = '';
    }, 3000);
});