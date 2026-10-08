// Asegúrate de que el documento esté cargado antes de buscar el elemento
document.addEventListener("DOMContentLoaded", () => {
    // 1. Busca los elementos
    const fireSymbol = document.querySelector("#fire-symbol");
    const alertSound = document.querySelector("#alert-sound");

    // 2. Comprueba que existan
    if (fireSymbol && alertSound) {
        // 3. Añade el evento de clic
        fireSymbol.addEventListener("click", () => {
            // Reinicia el sonido por si se presionó varias veces
            alertSound.currentTime = 0; 

            // Intenta reproducir y captura cualquier bloqueo
            let playPromise = alertSound.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("¡Sonido de alerta reproduciéndose!");
                }).catch(error => {
                    // Si el navegador bloquea el audio, lo notificamos en consola
                    console.error("El navegador bloqueó la reproducción automática. El usuario necesita interactuar con la página primero.", error);
                });
            }
        });
    } else {
        console.error("No se pudo encontrar el símbolo de fuego o la etiqueta de audio en el DOM.");
    }
});