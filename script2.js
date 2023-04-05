function saludar(){
     let nombre=prompt('Bienvenido a GamerShop! Tienda #1 de juegos del pais! Ingrese su nombre');
     alert('Hola '+nombre +'! Gracias por sumarte a GamerShop');
 }
 function despedir(){
     alert('Gracias por comprar en GamerShop! Te esperamos de vuelta pronto en nuestro sitio!');
 }
 saludar();
let mensaje = prompt('Desea comprar un producto? (s-si / n-no)');
const productos = [
    {
        id: 1, 
        nombre: 'Red Dead Redemption II', 
        precio: 7000,
        categoria: 'mundo abierto'},
    {
        id: 2, 
        nombre: 'Grand Theft Auto V', 
        precio: 5000,
        categoria: 'mundo abierto'},
    {
        id: 3, 
        nombre: 'EA SPORTS FIFA 23', 
        precio: 16000,
        categoria: 'deportes'},
    {
        id: 4, 
        nombre: 'Call of Duty: Modern Warfare II', 
        precio: 12000,
        categoria: 'mundo abierto'},
    {
        id: 5, 
        nombre: 'Resident Evil 4', 
        precio: 23000,
        categoria: 'modo historia'},
    
];
 
const carrito = [];

productos.forEach((producto) => {
    console.log(producto.nombre);
    console.log(producto.precio);
});

function mostrarProd(){
    let productoElegido = parseInt(prompt("Ingrese 1)Red Dead Redemption II 2)Grand Theft Auto V 3)EA SPORTS FIFA 23 4)Call of Duty: Modern Warfare II 5)Resident Evil 4"));
    const prodEncontrado = productos.find(p => p.id === productoElegido);
    console.log(prodEncontrado);
    carrito.push(prodEncontrado)
    console.log(carrito);

    const continuarCompra = confirm('Desea seguir comprando?')
    
    if(continuarCompra){
        mostrarProd()
    }else{
        alert('Gracias por comprar en GamerShop!')
        finalizarCompra()
    }
}

function finalizarCompra(){
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador += producto.precio,0)
    console.log('El total de la compra es de $' + totalCarrito);
}

mostrarProd();