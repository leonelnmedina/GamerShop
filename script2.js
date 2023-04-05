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
 productos.forEach((producto) => {
     console.log(producto.nombre);
     console.log(producto.precio);
 });
let productoElegido = prompt('Ingrese el nombre del juego que quiere comprar');
console.log(productos.find((productos) => productos.nombre === productoElegido));

const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log('Si compra todos los juegos el precio total de la compra es $'+totalCarrito);