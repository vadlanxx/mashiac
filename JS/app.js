// ***********************PRIMERA PRE ENTREGA**************************

//LOgin
/*
const usuarioCorrecto = "valen_323";
const contraseniaCorrecta = "1234";
let usuario = prompt("Usuario:");
let contrasenia = prompt("Contraseña:");
while (usuario !== usuarioCorrecto || contrasenia !== contraseniaCorrecta) {
    if (usuario !== usuarioCorrecto && contrasenia !== contraseniaCorrecta) {
        alert("Nombre de usuario y contraseña incorrectos.");
    } else if (usuario !== usuarioCorrecto) {
        alert("Nombre de usuario incorrecto.");
    } else if (contrasenia !== contraseniaCorrecta) {
        alert("Contraseña incorrecta.");
    }
    usuario = prompt("Usuario:");
    contrasenia = prompt("Contraseña:");
}
alert("¡Bienvenido! a Mashiac comidas ");



//Comandos while switch y for
let comando;
while (comando != "") {
    comando = prompt("Elige un apcion: \n\n- 1 Menus Del dia \n- 2 Carta  \n- 3 Comprar \n- 4 Informacion");
    switch (comando) {
        case "1":
            let comidas = ["Milanesa con papas", "tarta de jamon y queso", "pure con albondigas", "fideos con salasa", "asado", "ensalada con milanesas", "sopa"];
            let fecha = new Date();
            let dia = fecha.getDay()
            for (let i = 0; i < 7; i++) {
                let menu = (dia + i) % 7;
                let comida = comidas[menu];
                alert("Menu de hoy es: " + comida)
            }
            break;
        case "2":
            for (let i = 1; i <= 12; i++) {
                alert("Plato N°" + i);
            }
            break;
        case "3":
            let comprar = parseInt(prompt('cual es el nuemro de plato que desea comprar?'))
            let compra = comprar
            alert("El plato elegido es " + compra + ", sera llevado a su mesa en la brevedad")
            break;
        case "4":
            alert("En nuestro local contamos con menus para personas con necesidades dietéticas especiales, como celíacos y diabéticos. Contáctanos para obtener más detalles.")
            let necesidad = prompt('Ingrese su necesidad dietetica');
            let mensaje = prompt('Envienos su consulta:');
            alert("Su consulta: " + mensaje + " fue envida "+ "y tendremos en cuenta: " + necesidad + " a la hora de responderle, gracias!");
            break;
        default:
            alert('El comando ingresado es inválido.');
            break;
    }
}

if (comando == 'Enviar mensaje') {
    let destinatario = prompt('Ingrese el nombre de destinatario');
    let mensaje = prompt('Ingrese el mensaje que sea enviar');
    alert("Mensaje '" + mensaje + "' enviado a " + destinatario);
}
*/

//************************ SEGUNDA PRE ENTREGA ********************************


// Clase molde para los personajes 
class pj {
    constructor(nombre, rol, imagen) {
        this.nombre = nombre;
        this.rol = rol;
        this.imagen = imagen;
    }
}
//Variables globales 
const equipoAtacante = [];

//peronajes
const killjoy = new pj("Killjoy", "Centinela");
const jett = new pj("Jett", "Duelista");
const phoenix = new pj("Phoenix", "Duelista");
const brimstone = new pj("Brimstone", "Controlador");
const breach = new pj("Breach", "Iniciador");

// personajes disponibles 
const peronajesDisponibles = [killjoy, jett, phoenix, brimstone, breach]

//equipo
let equipo = 0;

//elementos
const elementoEquipoAtacante = document.querySelector("#equipoAtacante");
elementoEquipoAtacante.innerText = equipo;

const btnAgregarBreach = document.querySelector ("#btnAgregarBreach")
const btnAgregarBrimstone = document.querySelector ("btnAgregarBrimstone")
const btnAgregarJett = document.querySelector ("btnAgregarJett")
const btnAgregarKilljoy = document.querySelector ("btnAgregarKilljoy")
const btnAgregarPhoenix = document.querySelector ("btnAgregarPhoenix")

// Recorro todos los botones
for (const boton of botones) {
    boton.addEventListener("click", function (event) {
    let = peronajesDisponibles.find((item) => item.nombre == boton.innerText);
    });
}



//funciones regulares 
function agregar(personaje) {
    equipoAtacante.push(personaje);
    actualizarHTML();
}
// reinderizar html
function actualizarHTML() {
    elementoEquipoAtacante.innerHTML = '';
    // Actualizar HTML del equipo atacante
    equipoAtacante.forEach((personaje) => {
        const elementoDiv = document.createElement('div');
        elementoDiv.innerHTML = `
        <div class="personaje">
        <img src="./${personaje.imagen}"/>
        <h3>${personaje.nombre}</h3>
        <p>Rol: ${personaje.rol}</p>
        </div>
    `;
        elementoEquipoAtacante.appendChild(elementoDiv);
    });
}

