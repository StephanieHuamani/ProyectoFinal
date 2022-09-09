//Inicio de todos los productos//

class Producto {
  constructor(img, id, nombre, categoria, precio) {
    this.img = img
    this.id = id
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
  }
}

const Juego1 = new Producto("./img/diabloInmortal.png", 1, "Diablo Inmortal", "ROL Y ACCIÓN", 5)
const Juego2 = new Producto("./img/diabloreserrected.jpg", 2, "Diablo II: Resurrected", "ROL Y ACCIÓN", 5)
const Juego3 = new Producto("./img/wow.jpg", 3, "World of Warcraft", "MMORPG", 5)
const Juego4 = new Producto("./img/wordlclassic.jpg", 4, "World of Warcraft Classic", "MMORPG", 5)
const Juego5 = new Producto("./img/overwatch.jpg", 5, "Overwatch", "ACCIÓN POR EQUIPOS", 5)
const Juego6 = new Producto("./img/hearthstone.jpg", 6, "Hearthstone", "JUEGO DE CARTAS DE ESTRATEGIA", 5)
const Juego7 = new Producto("./img/diabloiii.jpg", 7, "Diablo III", "ROL Y ACCIÓN", 5)
const Juego8 = new Producto("./img/warcraftReforged.jpg", 8, "Warcraft III: Reforged", "ESTRATEGIA EN TIEMPO REAL", 5)
const Juego14 = new Producto("./img/diablo.jpg", 14, "Diablo", "ESTRATEGIA EN TIEMPO REAL", 5)
const Juego15 = new Producto("./img/warcraft2.jpg", 15, "Warcraft II", "ESTRATEGIA EN TIEMPO REAL", 5)
const Juego16 = new Producto("./img/warcraftOrcsyHumans.jpg", 16, "Warcraft", "ESTRATEGIA EN TIEMPO REAL", 5)
const Juego17 = new Producto("./img/blizzardArcade.jpg", 17, "Colección Blizzard", "COLECCIÓN", 5)

const productos = [Juego1, Juego2, Juego3, Juego4, Juego5, Juego6, Juego7, Juego8, Juego14, Juego15, Juego16, Juego17]

const divJuegosDisponibles = document.getElementById("juegosDisponibles")

const contenedorCarrito = document.getElementById('modal')

const precioTotal = document.getElementById("precioTotal")

const cantidad = document.getElementById('cantidad')

/*const botonVaciar = document.getElementById('vaciar')
botonVaciar.addEventListener('click', () => {
  carrito2.lenght == 0
  actualizarCarrito()
})*/

//let carrito2 = JSON.parse(localStorage.getItem("carrito")) ?? []


productos.forEach((producto) => {
  divJuegosDisponibles.innerHTML += `
    <div class="container-fluid card"style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top img img-fluid rounded" alt="...">
  <div class="card-body">
    <h5 class="card-title fw-bold">${producto.nombre}</h5>
    <p class="card-text">${producto.categoria}</p>
    <p class="card-text">U$D ${producto.precio}</p>
    <button class="btn comprarBtn" id="agregar${producto.id}">Comprar</button>
  </div>
    </div>`
})
/*

const agregarAlCarrito = (prodId) =>{
  const existe = carrito.some((prod) => prod.id === prodId)
      const botonComprar = document.getElementById(`agregar${producto.id}`)
    
    botonComprar.addEventListener('click', () =>{
  agregarAlCarrito(producto.id)
})
if (existe){
  const prod = carrito.map (prod =>{
    if (prod.id === prodId){
    prod.cantidad++
    }
  })
} else{
  const item = productos.find((prod) => prod.id === prodId)
  carrito.push(item)
}
actualizarCarrito()
}

const eliminarDelCarrito = (prodId) =>{
const item = carrito.find ((prod) => prod.id === prodId)
const index = carrito.indexOf(item)
carrito.splice(index, 1)
actualizarCarrito()
}


const actualizarCarrito = () => {

  contenedorCarrito.innerHTML = ""
carrito.forEach((prod) =>{
  contenedorCarrito.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${prod.img}" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="card-text">${prod.precio}</p>
        <p class="card-text"><span id="cantidad">${prod.cantidad}</span></p>
        <button class="btn comprarBtn" id="eliminar${prod.id}">Eliminar</button>
      </div>
    </div>
  </div>
</div>
  `
  localStorage.setItem('carrito', JSON.stringify('carrito'))
})
precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio, 0)
}*/
//Fin de todos los productos//



//Inicio del carrito//
//Fin de Carrito//


//Inicio del newsletter//

const form = document.getElementById("form")

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let email = document.getElementById('emailForm').value
  console.log(email)
  formulario.reset()
})

//Fin del newsletter//



//inicio de formulario//

class Contacto {
  constructor(nombre, asunto, correo, comentario) {
    this.nombre = nombre
    this.asunto = asunto
    this.correo = correo
    this.comentario = comentario
  }
}

const contacto = JSON.parse(localStorage.getItem("contacto")) ?? []

const formulario1 = document.getElementById("contacto")
const nombre = document.getElementById("nombre")
const asunto = document.getElementById("asunto")
const correo = document.getElementById("correo")
const comentario = document.getElementById("comentario")

formulario1.addEventListener("submit", (e) => {
  e.preventDefault()
  const datForm = new FormData(e.target)
  const contactoObj = new Contacto(datForm.get("nombre"), datForm.get("asunto"), datForm.get("correo"), datForm.get("comentario"))

  contacto.push(contactoObj)
  localStorage.setItem("contacto", JSON.stringify(contacto))
  formulario1.reset()

  Toastify({
    text: "Formulario enviado",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #141e30, #243b55)",

    },
  }).showToast();
})

//Fin del formulario//

const divJuegosProximos = document.getElementById("juegosProximos")

let carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

fetch('./json/juegos.json')
  .then(response => response.json())
  .then(juegos => {
    juegos.forEach((producto, id) => {
      divJuegosProximos.innerHTML += `
        <div class="container-fluid card" id="producto${id}" style="width: 18rem;">
      <img src="${producto.img}" class="card-img-top img img-fluid rounded" alt="...">
      <div class="card-body">
        <h5 class="card-title fw-bold">${producto.nombre}</h5>
        <p class="card-text">${producto.categoria}</p>
        <p class="card-text">U$D ${producto.precio}</p>
        <button class="btn comprarBtn">Preventa</button>
      </div>
        </div>
        `
    })
    juegos.forEach((producto, id) => {
      const proximosJuegos = document.getElementById(`producto${id}`)
      proximosJuegos.children[1].children[3].addEventListener("click", () => {
        console.log(carrito)
        if (carrito.some(product => product.id == producto.id)) {
          let index = carrito.findIndex((product => product.id == producto.id))
          if (carrito[index].cantidad < producto.stock)
            carrito[index].cantidad++
        } else {
          const carritoProducto = {
            id: producto.id,
            cantidad: 1
          }
          carrito.push(carritoProducto)

        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
      })
    })
  })

const carritobtn = document.getElementById("carrito")
const modal = document.getElementById("modal")

async function totalProductos() {
  const response = await fetch("./json/juegos.json")
  const productos = await response.json()
  return productos
}

carritobtn.addEventListener("click", async () => {
  if (carrito.lenght == 0) {
    modal.innerHTML = `<p>No hay productos</p>`
  } else {
    carrito.forEach((producto) => {
      modal.innerHTML +=
        `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${producto.img}" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <p class="card-text"><span id="cantidad">${producto.cantidad}</span></p>
        <button class="btn comprarBtn" id="eliminar${producto.id}">Eliminar</button>
      </div>
    </div>
  </div>
</div>
  `
      
    })
}})
