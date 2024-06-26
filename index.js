const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const myMain = document.getElementById('main');

function openMenu() {
    mobileMenu.style.display = 'flex';
}

function closeMenu() {
    mobileMenu.style.display = 'none';
}

hamburger.addEventListener('click', () => {
    openMenu();
})

closeIcon.addEventListener('click', () => {
    closeMenu();
})