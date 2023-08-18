const modoBtn = document.getElementById('modoBtn');
const tino = document.getElementById('tino');
const enlaces = document.querySelectorAll('.links a'); // Selecciona todos los enlaces a dentro del div con clase 'links'
const body = document.body;

modoBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');
    if (body.classList.contains('modo-oscuro')) {
        modoBtn.textContent = 'Modo Oscuro';
        tino.style.color = 'black'; // Cambia el color del h2 a negro
        enlaces.forEach(enlace => {
            enlace.style.color = 'black'; // Cambia el color de los enlaces a negro
        })
        modoBtn.style.background = 'black';
    } else {
        modoBtn.textContent = 'Modo Claro';
        tino.style.color = 'white'; // Cambia el color del h2 a blanco
        enlaces.forEach(enlace => {
            enlace.style.color = 'white'; // Cambia el color de los enlaces a blanco
        })
        modoBtn.style.background = 'cyan';
        ;
    }
});
