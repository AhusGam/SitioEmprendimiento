// ELEMENTOS DEL DOM NATIVO
const toggleButton = document.getElementById('dark-mode-toggle');
const hamburgerButton = document.getElementById('menu-hamburger');
const closeMenuButton = document.getElementById('close-menu');
const sideMenu = document.getElementById('side-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

// 1. CONTROL DE MODO OSCURO
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        toggleButton.textContent = 'Modo Oscuro';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = 'Modo Claro';
    }
});

// 2. CONTROL DEL MENÚ DESLIZABLE LATERAL (MÓVIL)
// Abrir menú lateral
hamburgerButton.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

// Cerrar menú lateral con el botón X
closeMenuButton.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

// Cerrar automáticamente el menú lateral cuando se hace clic en cualquier enlace
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
});