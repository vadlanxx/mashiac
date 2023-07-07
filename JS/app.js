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
//************************ SEGUNDA PRE ENTREGA ********************************


// Clase molde para los personajes 
/*
class Productos {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// mochila es el aray 

const mochila = [];



const naranja = new Productos("Naranja", 40, "fruta.png");
const hacha = new Productos("Hacha", 300, "herramienta.png");
const red = new Productos("Red", 500, "red2.png");

const productoVendedor = [naranja, hacha, red];
let bayas = 1000;

 //elementos los voy a conectas con el html
const elementoBayas = document.querySelector("#bayas span");
const elementoMochila = document.querySelector("#mochila");
elementoBayas.innerText = bayas;
//botones usar uno por uno o con una class
const btnComprarPocion = document.querySelector("#btnComprarNaranja");
const btnComprarEspada = document.querySelector("#btnComprarHacha");
const btnComprarEscudo = document.querySelector("#btnComprarRed");
const botones = document.querySelectorAll(".boton");


//funciones 

//para los botones
for (const boton of botones) {
    boton.addEventListener("click", function (event) {
        let producto = productoVendedor.find((producto) => producto.nombre === boton.id);
        comprar(producto);
    });
}
//agregar
function comprar(producto) {
    if ( bayas - producto.precio <= 0) {
        alert("Todavia no posees las bayas necesarias para comprar una " + producto.nombre + ".");
    } else if (mochila.length > 5) {
        alert("Tienes mucho peso en tu mochila, deja algunas cosas y vuelve");
    } else {
        mochila.push(producto);
        bayas -= producto.precio;
        actualizarHTML();
    }
}
//quitar
function vender(indice) {
    const producto = mochila[indice];
    bayas += producto.precio;
    mochila.splice(indice, 1);
    actualizarHTML();
}
// para renderizar
function actualizarHTML() {
    elementoMochila.innerHTML = "";
    for (const producto of mochila) {
        let indiceProductos = mochila.indexOf(producto);
        let elementoProductos = `
        <li class="producto" onclick="vender(${indiceProductos})">
            <img class="imgg" src="img/${producto.imagen}" />
        </li>`;
        elementoMochila.innerHTML += elementoProductos;
    }
    elementoBayas.innerText = bayas;
}
*/


//************************ TERCERA PRE ENTREGA ********************************
//************************ TERCERA PRE ENTREGA ********************************
//************************ TERCERA PRE ENTREGA ********************************
//************************ TERCERA PRE ENTREGA ********************************

class BaseDeDatos {
    constructor() {
        // array bd
        this.zapatillas = [];
        //cargo los productos
        this.agregarRegistro(1, "Calzado", 23000, "Zapatillas", "calzado.webp");
        this.agregarRegistro(2, "Zapatillas", 30000, "Zapatillas", "zapatillas.webp");
        this.agregarRegistro(3, "Bambas", 40500, "Zapatillas", "bambas.webp");
        this.agregarRegistro(4, "Zapas", 25000, "Zapatillas", "zapas.webp");
    }

    // para los array
    agregarRegistro(id, nombre, precio, categoria, imagen) {
        const zapatilla = new Prenda(id, nombre, precio, categoria, imagen);
        this.zapatillas.push(zapatilla);
    }
    traerRegistros() {
        return this.zapatillas;
    }
    registroPorId(id) {
        return this.zapatillas.find((zapatilla) => zapatilla.id === id);
    }
    registrosPorNombre(buscando) {
        return this.zapatillas.filter((zapatilla) => zapatilla.nombre.toLowerCase().includes(buscando));
    }
}

// controlar las zapatillas del carrito
class Carrito {
    constructor() {
        const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        this.carrito = carritoStorage || [];
        this.total = 0;
        this.totalZapatillas = 0;
        this.listar();
    }
    enCarrito({ id }) {
        return this.carrito.find((zapatilla) => zapatilla.id === id);
    }

    // agregar zapas 
    agregar(zapatilla) {
        const zapatillaEnCarrito = this.enCarrito(zapatilla);
        if (zapatillaEnCarrito) {
            zapatillaEnCarrito.cantidad++;
        } else {
            this.carrito.push({ ...zapatilla, cantidad: 1 });
        }
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.listar();
    }

    // restar un par de zapatillas
    sacar(id) {
        const indice = this.carrito.findIndex((zapatilla) => zapatilla.id === id);
        if (this.carrito[indice].cantidad > 1) {
            this.carrito[indice].cantidad--;
        } else {
            this.carrito.splice(indice, 1);
        }
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.listar();
    }

    // Actualiza el html del carrito
    listar() {
        this.total = 0;
        this.totalZapatillas = 0;
        divCarrito.innerHTML = "";
        for (const zapatilla of this.carrito) {
            divCarrito.innerHTML += `
            <div class="zapatillaCarrito">
                <h2>${zapatilla.nombre}</h2>
                <p>$${zapatilla.precio}</p>
                <p>Cantidad: ${zapatilla.cantidad}</p>
                <a href="#" data-id="${zapatilla.id}" class="btnQuitar">Quitar del carrito</a>
            </div>
        `;
            // Actualiza el total
            this.total += zapatilla.precio * zapatilla.cantidad;
            this.totalZapatillas += zapatilla.cantidad;
        }
        const botonesSacar = document.querySelectorAll(".btnQuitar");
        for (const boton of botonesSacar) {
            boton.onclick = (event) => {
                event.preventDefault();
                this.sacar(Number(boton.dataset.id));
            };
        }
        // actualizo variables del carrito
        spanCantidadZapatillas.innerText = this.totalZapatillas;
        spanTotalCarrito.innerText = this.total;
    }
}

// molde
class Prenda {
    constructor(id, nombre, precio, categoria, imagen = false) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}

// Objeto bd
const bd = new BaseDeDatos();

// Elementos
const divZapatillas = document.querySelector("#zapatillas");
const divCarrito = document.querySelector("#carrito");
const spanCantidadZapatillas = document.querySelector("#cantidadZapatillas");
const spanTotalCarrito = document.querySelector("#totalCompra");
const inputBuscar = document.querySelector("#inputBuscar");
const botonCarrito = document.querySelector("section h1");

cargarZapatillas(bd.traerRegistros());

// renderiza el HTML
function cargarZapatillas(zapatillas) {
    divZapatillas.innerHTML = "";
    for (const zapatilla of zapatillas) {
        divZapatillas.innerHTML += `
        <div class="zapatilla">
            <h2>${zapatilla.nombre}</h2>
            <p class="precio">$${zapatilla.precio}</p>
            <div class="imagen">
                <img src="img/${zapatilla.imagen}" />
            </div>
                <a href="#" class="btnAgregar" data-id="${zapatilla.id}">Agregar al carrito</a>
        </div>
    `;
    }
    const botonesAgregar = document.querySelectorAll(".btnAgregar");
    for (const boton of botonesAgregar) {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            const id = Number(boton.dataset.id);
            const zapatilla = bd.registroPorId(id);
            carrito.agregar(zapatilla);
        });
    }
}

//  intento de evento keyup
inputBuscar.addEventListener("keyup", (event) => {
    event.preventDefault();
    const buscan = inputBuscar.value;
    const zapatilla = bd.registrosPorNombre(buscan.toLowerCase());
    cargarZapatillas(zapatilla);
});

// muestra o no el carrito
botonCarrito.addEventListener("click", (event) => {
    document.querySelector("section").classList.toggle("ocultar");
});

// objeto carrito
const carrito = new Carrito();