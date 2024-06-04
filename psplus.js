document.addEventListener('DOMContentLoaded', (event) => {
    const texto = document.getElementById('texto');
    const enlace = document.getElementById('enlace');
    const imagenes = document.querySelectorAll('.imagen');

    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        texto.textContent = 'El texto ha cambiado después de hacer clic en el enlace.';
    });

    imagenes.forEach((imagen) => {
        imagen.addEventListener('click', () => {
            const nuevoTexto = imagen.getAttribute('data-texto');
            texto.textContent = nuevoTexto;
        });
    });
});