class Persona {
  constructor(nombre, edad, nacimiento) {
    this.Nombre = nombre;
    this.Edad = edad;
    this.Nacimiento = nacimiento;
  }
}

const arrayPersonas = [];

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formPersonas");
  const nombreInput = document.getElementById("nombre");
  const edadInput = document.getElementById("edad");
  const nacimientoInput = document.getElementById("nacimiento");
  const personasContainer = document.getElementById("personasContainer");

  const personasGuardadas = JSON.parse(localStorage.getItem("personas")) || [];

  function mostrarUsuarios() {
    personasContainer.innerHTML = "";
    personasGuardadas.forEach((persona) => {
      const personaElement = document.createElement("div");
      personaElement.innerHTML = `<h3>Nombre: ${persona.Nombre}</h3><p>Edad:${persona.Edad}</p><p>Nacimiento:${persona.Nacimiento}</p> `;

      const eliminarBtn = document.createElement("button");
      eliminarBtn.textContent = "Eliminar";
      eliminarBtn.addEventListener("click", () => eliminarUsuario(persona));

      personaElement.appendChild(eliminarBtn);
      personasContainer.appendChild(personaElement);
    });
  }

  function guardarUsuariosEnLocalStorage() {
    localStorage.setItem("personas", JSON.stringify(personasGuardadas));
  }

  mostrarUsuarios();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const edad = edadInput.value;
    const nacimiento = nacimientoInput.value;

    if (nombre && edad && nacimiento) {
      const nuevaPersona = new Persona(nombre, edad, nacimiento);
      personasGuardadas.push(nuevaPersona);
      alert(
        `Persona cargada exitosamente \nNombre: ${nuevaPersona.Nombre}\nEdad: ${nuevaPersona.Edad}\nNacimiento: ${nuevaPersona.Nacimiento}`
      );
      guardarUsuariosEnLocalStorage();
      mostrarUsuarios();
    } else {
      alert(`Debe ingresar todos los datos`);
      console.log(`Debe ingresar todos los datos`);
    }

    nombreInput.value = "";
    edadInput.value = "";
    nacimientoInput.value = "";
  });

  function eliminarUsuario(usuario) {
    const indice = personasGuardadas.findIndex(
      (persona) =>
        persona.Nombre === usuario.Nombre &&
        persona.Edad === usuario.Edad &&
        persona.Nacimiento === usuario.Nacimiento
    );

    if (indice !== -1) {
      personasGuardadas.splice(indice, 1);
      guardarUsuariosEnLocalStorage();
      mostrarUsuarios();
    }
  }
});
