// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

 const li = document.getElementById('lista-de-productos');//getElementbyId
 const i = document.querySelector('input'); //i quite $ para definir la variable i

 const displayProductos = (productos) => { //funcion display productos
 for (let i = 0; i < productos.length; i++) {
  
    var div = document.createElement('div') // me fui a html y puse div
    div.classList.add('producto') // puse la clase en html

    var ti = document.createElement('ti') 
    ti.classList.add('titulo')
    ti.textContent = productos[i].nombre
  
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    div.appendChild(ti) // cambie a div
    div.appendChild(imagen) // cambie a div
  
    li.appendChild(div) // cambie a div
 }
}

displayProductos(productos);
 


const botonDeFiltro = document.querySelector('button');
 
botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  
const texto = i.value; //es i
console.log(texto);


  const productosFiltrados = filtrado(productos, texto ); //definimos la funcion productosFiltrados para usarla abajo

  for (let i = 0; i < productosFiltrados.length; i++) {
    var div = document.createElement("div")
    div.classList.add("producto")
  
    var ti = document.createElement("ti")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(ti) //aqui cambie variables porque me acomode un poco mas 
    div.appendChild(imagen)
  
    li.appendChild(div)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  



