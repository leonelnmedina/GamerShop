
let carrito = [];
let contenedor = document.getElementById("misprods");
let finalizarBtn = document.getElementById("finalizar");

//Json
let productos;
obtenerJSON();

function renderizarProductos(){
for(const producto of productos){
    contenedor.innerHTML += `
        <div class="card col-sm-2">
            <img src=${producto.foto} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.id}</p>
                <p class="card-text">$ ${producto.precio}</p>
                <p class="card-text">${producto.descripcion}</p>
                <button id='btn${producto.id}' class="btn btn-outline-primary align-bottom">Agregar al carrito</button>
            </div>
        </div>   
    `;
}


productos.forEach((producto)=>{
    document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{
        agregarACarrito(producto);
});
});
}

function agregarACarrito(prodAAgregar){
carrito.push(prodAAgregar);
console.table(carrito);
// alert(`Agregaste ${prodAAgregar.nombre} al carrito!`);
//Uso sweet alert
Swal.fire({
    title: 'Fantástico!',
    text: `Agregaste ${prodAAgregar.nombre} al carrito!`,
    imageUrl: prodAAgregar.foto,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: prodAAgregar.nombre,
  })

document.getElementById('tablabody').innerHTML += `
    <tr>
        <td>${prodAAgregar.id}</td>
        <td>${prodAAgregar.nombre}</td>
        <td>${prodAAgregar.precio}</td>
    </tr>
`;

let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;
}

finalizarBtn.onclick=()=>{
    carrito=[];
    document.getElementById('tablabody').innerHTML='';
    document.getElementById('total').innerText = 'Total a pagar $:';
    Toastify({
        text: "Compra realizada con éxito! Podras descargar desde la biblioteca!",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #6930c3, #72efdd)'
        }
    }).showToast();
    //storage NEW
    localStorage.removeItem("carrito");
}

async function obtenerJSON(){
    const URLJSON = '/productos.json';
    const respuesta = await fetch(URLJSON);
    const data = await respuesta.json();
    productos = data;

    renderizarProductos();
}