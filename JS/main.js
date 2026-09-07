 alert ("Bienvenid@"+prompt("Ingrese su nombre:"));

const regexTexto = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]{2,50}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let datosUsuario = null;
let edadUsuario = null;
let contadorRegistros = 0;

document.getElementById("btn").addEventListener("click", () => {
    
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");
    const ciudad = prompt("Ingrese su ciudad:");
    const email = prompt("Ingrese su correo electrónico:");

    const errores = [];

    if (!nombre || !regexTexto.test(nombre.trim())) {
        errores.push("El nombre es inválido.");
    }

    if (!apellido || !regexTexto.test(apellido.trim())) {
        errores.push("El apellido es inválido.");
    }

    if (!ciudad || !regexTexto.test(ciudad.trim())) {
        errores.push("La ciudad es inválida.");
    }

    if (!email || !regexEmail.test(email.trim())) {
        errores.push("El correo electrónico es inválido.");
    }

    if (errores.length === 0) {
        alert("Todos los datos son válidos.");
    } else {
            alert("Errores encontrados:\n\n" + errores.join("\n"));
        }
      datosUsuario = {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        ciudad: ciudad.trim(),
        email: email.trim()
      };
    }
  );

function validarFormulario(datos) {
    const { nombre, apellido, ciudad, email } = datos;

    return {
        nombre: regexTexto.test(nombre),
        apellido: regexTexto.test(apellido),
        ciudad: regexTexto.test(ciudad),
        email: regexEmail.test(email)
    }
};

function validarEdad() {
  const entrada = prompt("Ingresa tu edad:");

  // Si presiona "Cancelar" en la ventana
  if (entrada === null) {
    alert("Operación cancelada.");
    return;
  }

  const edad = parseInt(entrada, 10);

  // 1. Validar que no esté vacío o que no sea un número
  if (isNaN(edad) || entrada.trim() === "") {
    alert("Error: Debes ingresar un número válido.");
  } 
  // 2. Validar rango razonable
  else if (edad < 1 || edad > 120) {
    alert("Error: La edad debe estar entre 1 y 120 años.");
  } 
  // 3. Validar si es mayor de edad
  else if (edad >= 18) {
    alert("Tienes " + edad + " años. ¡Eres mayor de edad!");
  } 
  // 4. Validar si es menor de edad
  else {
    alert("Tienes " + edad + " años. Eres menor de edad.");
  }
  
     // Guardar en la variable global
    edadUsuario = edad;
    alert("¡Edad guardada correctamente!");
  }

function registrarUsuario() {
    if (!datosUsuario && !edadUsuario) {
    alert("Debes ingresar primero tus datos personales y tu edad.");
    return;
  }
  if (!datosUsuario) {
    alert("Aún no has ingresado tus datos personales (Paso 1).");
    return;
  }
  if (!edadUsuario) {
    alert("Aún no has ingresado tu edad (Paso 2).");
    return;
  }
    const condicionEdad = edadUsuario >= 18 ? "Mayor de edad" : "Menor de edad";

    contadorRegistros++;

 alert(
    "¡RESUMEN DEL REGISTRO!\n\n" +
    "• Nombre completo: " + datosUsuario.nombre + " " + datosUsuario.apellido + "\n" +
    "• Ciudad: " + datosUsuario.ciudad + "\n" +
    "• Correo: " + datosUsuario.email + "\n" +
    "• Edad: " + edadUsuario + " años (" + condicionEdad + ")\n" +
    "Número de registros realizados: " + contadorRegistros
  );
  datosUsuario = null;
  edadUsuario = null;
}

function alternarModoOscuro() {
  const body = document.body;
  const btnTema = document.getElementById("btnTema");

  // Alterna la clase 'dark-mode' en la etiqueta <body>
  body.classList.toggle("dark-mode");

  // Cambia el texto del botón según el estado actual
  if (body.classList.contains("dark-mode")) {
    btnTema.textContent = "☀️ Modo Claro";
  } else {
    btnTema.textContent = "🌙 Modo Oscuro";
  }
}

//git init
// git status
// git add .
//git status
// git commit -m "Primer commit"
// git status
// git remote add origin <URL del repositorio>
// git push origin master

//git add  .
//git commit -m "Segundo commit"
//git push --set-upstream origin master