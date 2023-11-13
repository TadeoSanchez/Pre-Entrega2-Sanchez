alert("Bienvenido al programa para cargar nombres, verlos y eliminarlos");
class Persona {
  constructor(nombre, edad, nacimiento) {
    this.Nombre = nombre;
    this.Edad = edad;
    this.Nacimiento = nacimiento;
  }
}
const persona1 = new Persona("Ariel", 19, "18-02-2004");
const persona2 = new Persona("Britos", 20, "23-09-2003");
const persona3 = new Persona("Tadeo", 19, "25-09-2003");
const arrayPersonas = [persona1, persona2, persona3];

const cargarNombres = () => {
  let ingresarNombre = prompt("Ingrese el nombre");
  let ingresarEdad = parseInt(prompt("Ingrese la edad"));
  let ingresarNacimiento = prompt(
    "Ingresar la fecha de nacimiento en formato dd/mm/yyyy"
  );

  if ((ingresarNombre && ingresarEdad && ingresarNacimiento) != "") {
    const nuevaPersona = new Persona(
      ingresarNombre,
      ingresarEdad,
      ingresarNacimiento
    );
    arrayPersonas.push(nuevaPersona);
    alert(
      `Persona cargada exitosamente \nNombre: ${nuevaPersona.Nombre}\nEdad: ${nuevaPersona.Edad}\nNacimiento: ${nuevaPersona.Nacimiento}`
    );
  } else {
    console.log(`Debe ingresar todos los datos`);
  }
};

const mostrarNombres = () => {
  if (arrayPersonas.length === 0) {
    console.log("Primero ingrese datos para continuar");
  } else {
    let mensaje = "Datos cargados:";
    arrayPersonas.forEach((persona, index) => {
      mensaje += `\nPersona N°${index + 1}\nNombre: ${persona.Nombre}\nEdad: ${
        persona.Edad
      }\nNacimiento: ${persona.Nacimiento}\n----------------------------`;
    });
    alert(mensaje);
  }
};

function menu() {
  let menu = prompt(
    "Ingrese una opción (`Ingrese ESC para finalizar`)\n1-Cargar Nombres y Datos\n2-Ver Nombres y Datos\n3-Eliminarlos"
  );
  while (menu.toUpperCase() !== "ESC") {
    switch (parseInt(menu)) {
      case 1:
        console.log("Elegiste la opción 1");
        break;
      case 2:
        console.log("Elegiste la opción 2");
        break;
      case 3:
        console.log("Elegiste la opción 1");
        break;
      default:
        console.log("Elija la opción correcta");
        break;
    }
    menu = prompt(
      "Ingrese una opción (`Ingrese ESC para finalizar`)\n1-Cargar Nombres y Datos\n2-Ver Nombres y Datos\n3-Eliminarlos"
    );
  }
}

//cargarNombres();
//menu();
mostrarNombres();
