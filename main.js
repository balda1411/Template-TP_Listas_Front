/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')
.then(response => response.json())
.then(data =>{
  console.log("comidas cargadas desde JSON");
  console.log(data);
  comidas = data;
  agregar();
})
.catch(error =>{
  console.log("Error al leer el archivo JSON")
})
let comidas = []
const container = document.getElementById('comidaContainer');

function agregar(){
  container.innerHTML = ""
  comidas.forEach( comida => {
   container.innerHTML +=
   `
   <article class="card">
   <h2>${comida.nombre}</h2>
   <p>${comida.provincia}</p>
   <span class="categoria">${comida.categoria}</span>
   <ul class="ingredientes">${comida.ingredientes}</ul>
   </article>
   `
  } )
}

agregar()

const agregarComida = document.getElementById("agregarComida")
agregarComida.addEventListener("submit", (event) =>{
  event.preventDefault()
  let nuevaComida ={
    nombre: event.target.nombre.value, 
    categoria: event.target.categoria.value,
    provincia: event.target.provincia.value,
    ingredientes: event.target.ingredientes.value
  }
  comidas.push(nuevaComida)
  agregar()
  console.log(nuevaComida)
})