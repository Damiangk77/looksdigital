// Navegación móvil
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Formulario de cotización
const form = document.querySelector('.cotizar-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por solicitar una cotización. Nos contactaremos pronto.');
    form.reset();
});
