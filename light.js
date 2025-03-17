// portfolio-website/light.js

// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'night') {
        body.setAttribute('data-theme', 'day');
    } else {
        body.setAttribute('data-theme', 'night');
    }
}

// Event listener for the button
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
