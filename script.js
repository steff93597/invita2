const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const backgroundMusic = document.getElementById('backgroundMusic');
const eventInfo = document.querySelector('.event-info');

// Depuración inicial
console.log("Elementos seleccionados:", {
  btnOpenElement,
  btnCloseElement,
  backgroundMusic,
  eventInfo
});

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  console.log("Botón Abrir clicado");
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    console.log("Timeout ejecutado");
    coverElement.style.zIndex = '-1';

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');
    paperElement.style.zIndex = '1';

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // Mostrar información del evento
    console.log("Estado de eventInfo antes de agregar .visible:", eventInfo, eventInfo.classList);
    if (eventInfo) {
      eventInfo.classList.add('visible');
      console.log("Estado de eventInfo después de agregar .visible:", eventInfo.classList);
    } else {
      console.log("Error: eventInfo no encontrado en el DOM");
    }

    // Reproducir música
    backgroundMusic.play().catch(error => console.log("Error al reproducir audio:", error));
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  console.log("Botón Cerrar clicado");
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');
  paperElement.style.zIndex = '-1';

  setTimeout(() => {
    coverElement.style.zIndex = '0';
    coverElement.classList.remove('open-cover');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';

    // Ocultar información del evento
    console.log("Estado de eventInfo antes de remover .visible:", eventInfo, eventInfo.classList);
    if (eventInfo) {
      eventInfo.classList.remove('visible');
      console.log("Estado de eventInfo después de remover .visible:", eventInfo.classList);
    }

    // Pausar música
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
  }, 500);
});