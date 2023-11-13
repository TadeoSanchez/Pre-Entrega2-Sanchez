alert("Bienvenido al programa para cargar nombres, verlos y eliminarlos");
// CREACIÓN DE LA CLASE PERSONA
class Persona {
  constructor(nombre, edad, nacimiento) {
    this.Nombre = nombre;
    this.Edad = edad;
    this.Nacimiento = nacimiento;
  }
}

const arrayPersonas = []; // ARRAY VACÍO PARA PODER AÑADIR LOS OBJETOS

// FUNCIÓN PARA CARGAR LOS NOMBRES AL ARRAY
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
    alert(`Debe ingresar todos los datos`);
    console.log(`Debe ingresar todos los datos`);
  }
};

// FUNCIÓN PARA MOSTRAR LOS NOMBRES DENTRO DEL ARRAY
const mostrarNombres = () => {
  if (arrayPersonas.length === 0) {
    alert("Primero ingrese datos para poder visualizarlos");
    console.log("Primero ingrese datos para poder visualizarlos");
  } else {
    let mensaje = "Datos cargados:";
    arrayPersonas.forEach((persona, index) => {
      mensaje += `\nPersona N°${index + 1}\nNombre: ${persona.Nombre}\nEdad: ${
        persona.Edad
      }\nNacimiento: ${persona.Nacimiento}\n----------------------------`;
    });
    alert(mensaje);
    console.log(mensaje);
  }
};

// FUNCIÓN PARA ELIMINAR LOS ELEMENTOS DENTRO DEL ARRAY DE DIFERENTES MANERAS
const eliminarDatos = () => {
  let eleccion = parseInt(
    prompt(
      "Elija una de las siguientes opciones para eliminar\n1-Eliminar primer usuario creado\n2-Eliminar último usuario creado\n3-Eliminar usuario basado en su número de persona\n4-Eliminar todo"
    )
  );

  switch (eleccion) {
    case 1:
      arrayPersonas.shift();
      alert(`Primer usuario eliminado con éxito`);
      console.table(arrayPersonas);
      break;
    case 2:
      arrayPersonas.pop();
      alert(`Último usuario eliminado con éxito`);
      console.table(arrayPersonas);
      break;
    case 3:
      let numeroDePersona =
        parseInt(prompt("Ingrese el número de la persona que desea eliminar")) -
        1;
      if (
        isNaN(numeroDePersona) ||
        numeroDePersona < 0 ||
        numeroDePersona >= arrayPersonas.length
      ) {
        alert("Número de persona invalido, ingrese uno que exista");
        console.log("Número de persona invalido, ingrese uno que exista");
      } else {
        arrayPersonas.splice(numeroDePersona, 1);
        alert(`Se ha eliminado a la persona N°${numeroDePersona + 1}`);
        console.table(arrayPersonas);
      }
      break;
    case 4:
      arrayPersonas.splice(0);
      alert(`Se han eliminado todos los usuarios`);
      console.log(arrayPersonas);
      break;
    default:
      alert("Opción invalida");
      console.log("Opción no valida");
      break;
  }
};

// FUNCIÓN PARA EL MENÚ DEL PROGRAMA
function menu() {
  let menu = prompt(
    "Ingrese una opción (`Ingrese ESC para finalizar`)\n1-Cargar Nombres y Datos\n2-Ver Nombres y Datos\n3-Eliminarlos"
  );
  while (menu.toUpperCase() !== "ESC") {
    switch (parseInt(menu)) {
      case 1:
        cargarNombres();
        break;
      case 2:
        mostrarNombres();
        break;
      case 3:
        eliminarDatos();
        break;
      default:
        alert("Elija la opción correcta");
        console.log("Elija la opción correcta");
        break;
    }
    menu = prompt(
      "Ingrese una opción (`Ingrese ESC para finalizar`)\n1-Cargar Nombres y Datos\n2-Ver Nombres y Datos\n3-Eliminarlos"
    );
  }
  alert(`Programa finalizado, muchas gracias por utilizarlo :D`);
}

menu();
