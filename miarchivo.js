const precioUnidad = 550;
const descuentoMediaDocena = 0.90;

const mensajeBienvenida = `Bienvenidos a Panaderia Luigi

Precios Medialunas:
- Por Unidad $${precioUnidad}.
- Descuento Media Docena 10%`;

const mensajeSabores = `Elegi uno de los tres tipos:
1- Dulce
2- Saldas
3- Jamon y Queso`;

const mensajePago = `Elegí como vas a realizar el pago
Puede ser:
1- Efectivo
2- Debito`;


alert(mensajeBienvenida)

let cantidadDeMedialunas = Number(prompt('Ingresa la cantidad de medialunas que vas a llevar:'));
let cantidadEsCorrecta = false;

while (cantidadEsCorrecta === false) {
    if (cantidadDeMedialunas <= 0 || cantidadDeMedialunas === null) {
        alert('No se ingresó cantidad.');
        cantidadDeMedialunas = Number(prompt('Ingresa la cantidad de medialunas que vas a llevar:'));
    } else if (isNaN(cantidadDeMedialunas)) {
        alert('Datos incorrectos.');
        cantidadDeMedialunas = Number(prompt('Ingresa la cantidad de medialunas que vas a llevar:'));
    } else {
        cantidadEsCorrecta = true;
    }
}

console.log(`El cliente ingresó ${cantidadDeMedialunas} medialunas.`);

let tipos = `Los tipos elegidos son:`;
let ingresoCorrecto = false;
let pedidoCompleto = 0;

while (pedidoCompleto < cantidadDeMedialunas) {
    let ingresarTipo = Number(prompt(mensajeSabores));
    let verificarValor = ingresarTipo > 0 && ingresarTipo <= 3 && ingresarTipo !== null && !isNaN(ingresarTipo);

    if(verificarValor) {
        if(ingresarTipo === 1) {
            tipos +=`
            -Dulces`;
            pedidoCompleto++;
        }
        else if(ingresarTipo === 2){
            tipos +=`
            -Saladas`;
            pedidoCompleto++;
        }
        else if(ingresarTipo === 3){
            tipos +=`
            -Jamon y Queso`;
            pedidoCompleto++;
        }
    } else {
        alert ("Opción no valida");
    }

    
    if (pedidoCompleto === cantidadDeMedialunas) {
        ingresoCorrecto = true;
        break;
    }
}


let ingresarPago = Number(prompt(mensajePago))
console.log(`Ingreso correcto: ${ingresoCorrecto}.`);
console.log(tipos);



let cantidad = cantidadDeMedialunas;
let precio = precioUnidad;
let descuento = descuentoMediaDocena

function pago (cantidad, precio, descuento){
    if (cantidad < 6){
        return cantidad * precio;
    } else if (cantidad >= 6){
        return cantidad * precio * descuento;
    }    
}
let totalPago = pago(cantidad, precio, descuento)
alert(`El total a abonar es $${totalPago}`);
console.log(`El total abonado es $${totalPago}`)



alert (`Gracias por su compra.`)



