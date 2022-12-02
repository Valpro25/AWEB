// Guardamos en dos constantes el botón y el audio
const botonAudio = document.getElementById("boton-eliminar-audio");
const audio = document.getElementById("audio");

// Añadimos un evento al botón que al hacer clic oculte el audio, cambie el texto del botón y lo desactive
botonAudio.addEventListener("click", () => {
    audio.style.display = "none";
    botonAudio.innerText = "Audio eliminado";
    botonAudio.disabled = true;
})