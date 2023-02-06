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

let carrito = [];
const envio1 = 800;
const envio2 = 500;
let subtotal = 0;


for (let i = 0; i !== "FIN"; i++) {
    let producto = prompt ("Ingrese el producto elegido (Tortas o Cupcakes), para ver la lista de productos disponibles ingrese LISTA, para cerrar el pedido ingrese FIN");

    if (producto === "Cupcakes" || producto === "Tortas") {
        let sabor = prompt ("Ingrese el sabor elegido, las opciones para Cupcakes son: Limon, Chocolate, Vainilla o Red Velvet; las opciones para Tortas son: Brownie, Chocotorta, Cheesecake de Frutos Rojos, Cheesecake de Chocolate, Lemon Pie, Mousse de Frutilla, Rogel o Crumble de Manzana.");
            switch (sabor) {
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
        subtotal = cantidad*precio;
        alert ("Su subtotal por la compra es de: $ " + subtotal);

        carrito.push ({producto, sabor, cantidad, precio});
        console.log (carrito);

        let consultaEnvio = prompt ("Desea agregar envio a domicilio (SI/NO)?")
            function calcularEnvio () {
                if (consultaEnvio === "SI" && subtotal <= 1000) {
                let sumaConEnvio = subtotal + envio1;
                alert ("Su total a pagar es: $ " + sumaConEnvio);
            } else if (consultaEnvio === "SI" && subtotal <= 3000) {
                let sumaConEnvio = subtotal + envio2;
                alert ("Su total a pagar es: $ " + sumaConEnvio);
            } else if (consultaEnvio === "SI" && subtotal > 3000) {
                alert ("Su envío esta bonificado");
            } else {
                alert ("Ponerse en contacto con nosotros para coordinar el retiro de los productos");
            }
        }
        calcularEnvio ();

    }    else if (producto === "LISTA") {
            let listaDeProductos = productos.map ((productos) => " " + productos.tipoDeProducto + " " + productos.sabor + " Precio: $ " + productos.precio)
            alert (`Nuestros productos son ${listaDeProductos}`)
            break;
    
        } else if (producto === "FIN") {
            alert ("Gracias por visitar nuestra pagina");
            break;
        }
}





//     let costoTotal = costoProducto * cantidad;
//     alert ("El costo total de tu compra es $ " + costoTotal)
//     productoElegido = prompt ("Para finalizar, escriba FIN");
// }