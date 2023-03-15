function saludar(){
    let nombre=prompt('Bienvenido a GamerShop! Tienda #1 de juegos del pais! Ingrese su nombre');
    alert('Hola '+nombre +'! Gracias por sumarte a GamerShop');
}
function despedir(){
    alert('Gracias por comprar en GamerShop! Te esperamos de vuelta pronto en nuestro sitio!');
}
saludar();

let total = 0;
let mensaje = prompt('Desea comprar un producto? (s-si / n-no)');
while(mensaje == 's' || mensaje=='S'){
    let producto = prompt('1-Red Dead Redemption II\n2-Grand Theft Auto V usb\n3-EA SPORTS FIFA 23\n4-Call of Duty: Modern Warfare II\n5-Resident Evil 4');
    switch(producto){
        case '1':
            alert('Red Dead Redemption II ... $ 6500   AGREGADO AL CARRO!');
            incrementarTotal(6500);
            break;
        case '2':
            alert('Grand Theft Auto V ... $ 4900   AGREGADO AL CARRO!');
            incrementarTotal(4900);
            break;
        case '3':
            alert('EA SPORTS FIFA 23 ... $ 15700   AGREGADO AL CARRO!');
            incrementarTotal(15700);
            break;   
        case '4':
            alert('Call of Duty: Modern Warfare II ... $ 12200   AGREGADO AL CARRO!');
            incrementarTotal(12200);
            break; 
        case '5':
            alert('Resident Evil 4 ... $ 22600   AGREGADO AL CARRO!');
            incrementarTotal(22600);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
    mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
}
alert('Total de la compra $'+total);

function incrementarTotal(precio){
    total = total + precio;
    alert('Llevas gastado $'+total);
}
despedir();