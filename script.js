const imagen = document.getElementById("duendes-navideños");

    // Evento para cuando el mouse pasa sobre la imagen
    imagen.addEventListener("mouseover", () => {
      imagen.style.opacity = 0.5;  // Reduce la opacidad
    });

    // Evento para cuando el mouse sale de la imagen
    imagen.addEventListener("mouseout", () => {
      imagen.style.opacity = 1;  // Restaura la opacidad original
    });