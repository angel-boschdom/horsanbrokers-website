// Toggle Navigation Menu for Mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const body = document.body;

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('menu-open');
});

// Close the menu when a navigation link is clicked (optional)
const navItems = navLinks.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('open');
            body.classList.remove('menu-open');
        }
    });
});