//Todos los productos//

class Producto{
    constructor(img, id, nombre, categoria, precio, franquicia, plataforma){
    this.img = img
    this.id = id
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    this.franquicia = franquicia
    this.plataforma = plataforma
    }
}

const Juego1 = new Producto ("./img/diabloInmortal.png", 1,"Diablo Inmortal","ROL Y ACCIÓN", 1, "Diablo", "PC" )
const Juego2 = new Producto ("./img/diabloreserrected.jpg", 2, "Diablo II: Resurrected", "ROL Y ACCIÓN", 1, "Diablo", "PC")
const Juego3 = new Producto ("./img/wow.jpg", 3, "World of Warcraft", "MMORPG", 1, "Warcraft", "Consola")
const Juego4 = new Producto ("./img/wordlclassic.jpg", 4, "World of Warcraft Classic", "MMORPG", 1, "Warcraft", "PC")
const Juego5 = new Producto ("./img/overwatch.jpg", 5, "Overwatch", "ACCIÓN POR EQUIPOS", 1, "overwatch", "PC")
const Juego6 = new Producto ("./img/hearthstone.jpg", 6, "Hearthstone", "JUEGO DE CARTAS DE ESTRATEGIA", 1, "Hearthstone", "Movil")
const Juego7 = new Producto ("./img/diabloiii.jpg", 7, "Diablo III", "ROL Y ACCIÓN", 1, "Diablo", "PC")
const Juego8 = new Producto ("./img/warcraftReforged.jpg", 8, "Warcraft III: Reforged", "ESTRATEGIA EN TIEMPO REAL", 1, "Warcraft", "PC")
const Juego9 = new Producto ()
const Juego10 = new Producto ()
const Juego11 = new Producto ()
const Juego12 = new Producto ()
const Juego13 = new Producto ()
const Juego14 = new Producto ()
const Juego15 = new Producto ()
const Juego16 = new Producto ()
const Juego17 = new Producto ()

const productos = [Juego1,Juego2,Juego3, Juego4, Juego5, Juego6, Juego7]

const divJuegosDisponibles = document.getElementById("juegosDisponibles")

productos.forEach (producto => {
    divJuegosDisponibles.innerHTML += `
    <div class="container-fluid card" id="${producto.id}" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top img img-fluid rounded" alt="...">
  <div class="card-body">
    <p class="card-title fw-bold">${producto.nombre}</p>
    <p class="card-text">${producto.categoria}</p>
    <p class="card-text">U$D ${producto.precio}</p>
    <button class="btn">Comprar</button>
  </div>
    </div>`
})

//Fin de todos los productos//

//Newsletter//

const form = document.getElementById("form")

form.addEventListener('submit', function(e){
e.preventDefault();
let email = document.getElementById('emailForm').value
console.log(email)
formulario.reset()
})

//Fin del newsletter//

//Carrito//

//Fin de Carrito//

//Formulario//

class Contacto{
  constructor(nombre,asunto, correo, comentario){
    this.nombre = nombre
    this.asunto = asunto
    this.correo = correo
    this.comentario = comentario
  }
}

let contacto = []

if(localStorage.getItem("contacto")) {
  contacto = JSON.parse(localStorage.getItem("contacto"))
} else {
  localStorage.setItem("contacto", JSON.stringify(contacto))    
}

const formulario1 = document.getElementById("contacto")
const nombre = document.getElementById("nombre")
const asunto = document.getElementById("asunto")
const correo = document.getElementById("correo")
const comentario = document.getElementById("comentario")

formulario1.addEventListener("submit", (e) =>{
  e.preventDefault()
  const datForm = new FormData(e.target)
  const contactoObj = new Contacto(datForm.get("nombre"), datForm.get("asunto"), datForm.get("correo"), datForm.get("comentario"))

    contacto.push(contactoObj)
    localStorage.setItem("contacto", JSON.stringify(contacto))
    formulario1.reset()
})

//Fin del formulario//

/* `
    <div>
    <img src="${producto.img}" class="img">
    <h3>${producto.nombre}</h3>
    <p>${producto.categoria}</p>
    <p>$${producto.precio}</p>
    </div>` */