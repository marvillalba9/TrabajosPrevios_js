const productos = [
    {
        id: 1,
        tipoDeProducto: "Cupcakes",
        sabor: "Limon",
        precio: 50,
    },
    {
        id: 2,
        tipoDeProducto: "Cupcakes",
        sabor: "Chocolate",
        precio: 50,
    },
    {
        id: 3,
        tipoDeProducto: "Cupcakes",
        sabor: "Vainilla",
        precio: 40,
    },
    {
        id: 4,
        tipoDeProducto: "Cupcakes",
        sabor: "Red Velvet",
        precio: 60,
    },
    {
        id: 5,
        tipoDeProducto: "Tortas",
        sabor: "Brownie",
        precio: 1800,
    },
    {
        id: 6,
        tipoDeProducto: "Tortas",
        sabor: "Chocotorta",
        precio: 1800,
    },
    {
        id: 7,
        tipoDeProducto: "Tortas",
        sabor: "Cheesecake de Frutos Rojos",
        precio: 2300,
    },
    {
        id: 8,
        tipoDeProducto: "Tortas",
        sabor: "Cheesecake de Chocolate",
        precio: 2300,
    },
    {
        id: 9,
        tipoDeProducto: "Tortas",
        sabor: "Lemon Pie",
        precio: 2500,
    },
    {
        id: 10,
        tipoDeProducto: "Tortas",
        sabor: "Mousse de Frutilla",
        precio: 2500,
    },
    {
        id: 11,
        tipoDeProducto: "Tortas",
        sabor: "Rogel",
        precio: 2100,
    },
    {
        id: 12,
        tipoDeProducto: "Tortas",
        sabor: "Crumble de Manzana",
        precio: 2100,
    },
]
let carritoDeCompras = [];



for (let i = 0; i !== "FIN"; i++) {
    let productoElegido = prompt ("Ingrese el producto elegido (Tortas o Cupcakes), para ver la lista de productos disponibles ingrese LISTA, para cerrar el pedido ingrese FIN");

    if (productoElegido === "Cupcakes") {
        let saborElegido = prompt ("Ingrese el sabor elegido: Limon, Chocolate, Vainilla o Red Velvet");
            switch (saborElegido) {
                case "Chocolate":
                case "Limon":
                    precio = 50;
                    break;
                case "Red Velvet":
                    precio = 60;
                    break;
                case "Vainilla":
                    precio = 40;
                    break;
            }
        let cantidad = parseInt (prompt ("Ingrese la cantidad deseada"));
        let sumaCupcakes = cantidad*precio;
        alert ("Su subtotal por la compra de Cupcakes es de: $ " + sumaCupcakes);

        // carritoDeCompras.push ({productoElegido, sabor, cantidad, precio});
        // alert (`Su carrito de compras contiene: ${carritoDeCompras}`);

    }     else if (productoElegido === "Tortas") {
        let sabor = prompt ("Ingrese el sabor elegido: Brownie, Chocotorta, Cheesecake de Frutos Rojos, Cheesecake de Chocolate, Lemon Pie, Mousse de Frutilla, Rogel o Crumble de Manzana");
            switch (sabor) {
                case "Brownie":
                case "Chocotorta":
                    precio = 1800;
                    break;
                case "Rogel":
                case "Crumble de Manzana":
                    precio = 2100;
                    break;
                case "Cheesecake de Chocolate":
                case "Cheesecake de Frutos Rojos":
                    precio = 2300;
                    break;
                case "Lemon Pie":
                case "Mousse de Frutilla":
                    precio = 2500;
                    break;
            }
        let cantidad = parseInt (prompt ("Ingrese la cantidad deseada"));
        let sumaTortas = cantidad*precio;
        alert ("Su subtotal por la compra de Tortas es de: $ " + sumaTortas);

        // carritoDeCompras.push ({productoElegido, sabor, cantidad, precio});
        // console.log (carrito);
        }   else if (productoElegido === "LISTA") {
            let listaDeProductos = productos.map ((productos) => " " + productos.tipoDeProducto + " " + productos.sabor + " Precio: $ " + productos.precio)
            alert (`Nuestros productos son ${listaDeProductos}`)
            break;
    
        } else {
            alert ("Gracias por visitar nuestra pagina");
            break;
        }

        productoElegido = prompt ("Desea seguir comprando? Escriba Tortas, Cupcakes o FIN para salir");
    
        // carritoDeCompras.forEach ((carritoFinal) => {
        //     alert (`El carrito contiene: ${carritoFinal.tipoDeProducto}, ${carritoFinal.sabor}, ${carritoFinal.precio}, ${carritoFinal.cantidad}`)
        // })


}



    






// let subtotal = sumaTortas + sumaCupcakes;
// const envio1 = 800;
// const envio2 = 500;
// const envio3 = 0;

// let consultaEnvio = prompt ("Desea agregar envio a domicilio (SI/NO)?")

// if (consultaEnvio === "SI" && Subtotal <= 1000) {
//     let sumaConEnvio = subtotal + envio1;
//     alert ("Su total a pagar es: $ " + sumaConEnvio);
// } else if (consultaEnvio === "SI" && Subtotal <= 3000) {
//     let sumaConEnvio = subtotal + envio2;
//     alert ("Su total a pagar es: $ " + sumaConEnvio);
// } else if (consultaEnvio === "SI" && Subtotal > 3000) {
//     alert ("Su envío esta bonificado");
// } else {
//     alert ("Ponerse en contacto con nosotros para coordinar el restiro de los productos");
// }



//     let costoTotal = costoProducto * cantidad;
//     alert ("El costo total de tu compra es $ " + costoTotal)
//     productoElegido = prompt ("Para finalizar, escriba FIN");
// }