var personaje = document.querySelectorAll('input[type="checkbox"]');

personaje.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    actualizarEstilo();
    mostrarSeleccion();
  });
});

function actualizarEstilo() {
  personaje.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkbox.parentElement.classList.add("seleccionado");
    } else {
      checkbox.parentElement.classList.remove("seleccionado");
    }
  });
}

/*function mostrarSeleccion() {
  var seleccionados = [];
  personaje.forEach(function (checkbox) {
    if (checkbox.checked) {
      seleccionados.push(checkbox.value);
    }
  });
  var seleccionadosDiv = document.getElementById("seleccionados");
  seleccionadosDiv.innerHTML = "";
  seleccionados.forEach(function (elemento) {
    seleccionadosDiv.innerHTML += "<li>" + elemento + "</li>";
  });
  seleccionadosDiv.innerHTML += "</ul>";
}*/

function seleccionarAlAzar() {
  // Obtener solo los personajes activos
  var personajesActivos = Array.from(personaje).filter(
    (checkbox) => !checkbox.disabled
  );

  // Verificar si hay personajes activos
  if (personajesActivos.length === 0) {
    console.log("No hay personajes activos para seleccionar.");
    return;
  }

  // Seleccionar un índice aleatorio dentro del rango de personajes activos
  var indiceAleatorio = Math.floor(Math.random() * personajesActivos.length);

  // Obtener el checkbox correspondiente al índice aleatorio
  var checkboxAleatorio = personajesActivos[indiceAleatorio];

  // Verificar si el checkbox aleatorio ya está marcado
  if (!checkboxAleatorio.checked) {
    // Marcar el checkbox aleatorio
    checkboxAleatorio.checked = true;
    // Actualizar el estilo
    actualizarEstilo();
    // Mostrar la selección
    mostrarSeleccion();
  } else {
    // Si el checkbox aleatorio ya está marcado, seleccionar otro
    seleccionarAlAzar();
  }
}

function invertirEstilo() {
  var estiloCSS = document.getElementById("estilo-personaje");
  if (estiloCSS) {
    estiloCSS.remove();
    estilosAplicados = false;
  } else {
    estiloCSS = document.createElement("style");
    estiloCSS.id = "estilo-personaje";
    estiloCSS.innerHTML = `
            .personaje {
                filter: brightness(.5) saturate(0);
            }
            .seleccionado {
                filter: brightness(1) saturate(1);
            }
        `;
    document.head.appendChild(estiloCSS);
    estilosAplicados = true;
  }
}

function toggleCombine() {
  const personajesDesactivar = ["dekufb", "shigarakiC", "backugoV"];
  personajesDesactivar.forEach((id) => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.disabled = !checkbox.disabled;
      checkbox.checked = !checkbox.disabled;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Desactivar los últimos tres personajes al cargar la página
  const personajesDesactivar = ["dekufb", "shigarakiC", "backugoV"];
  personajesDesactivar.forEach((id) => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.checked = false;
      checkbox.disabled = true;
    }
  });
});

function toggleCombine() {
  const personajesDesactivar = ["dekufb", "shigarakiC", "backugoV"];
  personajesDesactivar.forEach((id) => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.disabled = !checkbox.disabled;
      checkbox.checked = !checkbox.disabled;
      actualizarEstilo(); // Actualizamos el estilo después de cambiar la disponibilidad de los checkboxes
      mostrarSeleccion(); // Actualizamos la lista de selección después de cambiar la disponibilidad de los checkboxes
    }
  });
}

function invertirEstilo() {
  var personajesSeleccionados = document.querySelectorAll(
    ".personaje__checkbox:checked"
  );
  personajesSeleccionados.forEach(function (checkbox) {
    checkbox.parentElement.classList.toggle("seleccionado");
  });
}

function toggleCombine() {
  const personajesDesactivar = ["dekufb", "shigarakiC", "backugoV"];
  personajesDesactivar.forEach((id) => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.disabled = !checkbox.disabled;
      checkbox.checked = !checkbox.disabled;
      checkbox.parentElement.classList.toggle("hidden"); // Alternar visibilidad de las habilidades especiales
      actualizarEstilo(); // Actualizar el estilo después de cambiar la disponibilidad de los checkboxes
      mostrarSeleccion(); // Actualizar la lista de selección después de cambiar la disponibilidad de los checkboxes
    }
  });
}

function invertirEstilo() {
  var personajesSeleccionados = document.querySelectorAll(
    ".personaje__checkbox:checked"
  );
  personajesSeleccionados.forEach(function (checkbox) {
    checkbox.parentElement.classList.toggle("seleccionado");
  });
}

function activarHabilidadesEspeciales() {
  const habilidadesEspeciales = ["dekufb", "shigarakiC", "backugoV"];
  habilidadesEspeciales.forEach((id) => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.disabled = false;
    }
  });
}

function desactivarHabilidadesEspeciales() {
  const habilidadesEspeciales = ["dekufb", "shigarakiC", "backugoV"];
  habilidadesEspeciales.forEach((id) => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.disabled = true;
      checkbox.checked = false; // Asegurarse de que las habilidades especiales estén desmarcadas al desactivarlas
    }
  });
}
function recargarPagina() {
  location.reload();
}
