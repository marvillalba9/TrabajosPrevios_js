class Productos {
    constructor (tipoDeProducto, sabor, precio) {
        this.tipoDeProducto = tipoDeProducto;
        this.sabor = sabor;
        this.precio = precio;
        this.vendido = false;
    }

}

const productos = [];

productos.push (new Productos ("Cupcakes", "Limon", 50));
productos.push (new Productos ("Cupcakes", "Chocolate", 50));
productos.push (new Productos ("Cupcakes", "Vainilla", 40));
productos.push (new Productos ("Cupcakes", "Red Velvet", 60));
productos.push (new Productos ("Tortas", "Brownie", 1800));
productos.push (new Productos ("Tortas", "Chocotorta", 1800));
productos.push (new Productos ("Tortas", "Cheesecake de Frutos Rojos", 2300));
productos.push (new Productos ("Tortas", "Cheesecake de Chocolate", 2300));
productos.push (new Productos ("Tortas", "Lemon Pie", 2500));
productos.push (new Productos ("Tortas", "Mousse de Frutilla", 2500));
productos.push (new Productos ("Tortas", "Rogel", 2100));
productos.push (new Productos ("Tortas", "Crumble de Manzana", 2100));

console.log (productos);

let carrito = [];
const envio1 = 800;
const envio2 = 500;
let subtotal = 0;


for (let i = 0; i !== "FIN"; i++) {
        let tipoDeProducto = prompt ("Ingrese el producto elegido (Tortas o Cupcakes), para ver la lista de productos disponibles ingrese LISTA, para cerrar el pedido ingrese FIN");
    
        if (tipoDeProducto === "Cupcakes" || tipoDeProducto === "Tortas") {
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
            alert (`Su subtotal por la compra es de: $ ${subtotal}`);
  
            carrito.push ({tipoDeProducto, sabor, cantidad, precio});
            for (const items of carrito) {
                alert(`Su carrito contiene los siguientes items:\n Tipo de Producto: ${items.tipoDeProducto}\nSabor: ${items.sabor}\nPrecio unitario: ${items.precio}\nCantidad: ${items.cantidad}`);
            }


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
      
        } else if  (tipoDeProducto === "LISTA") {
                for (const producto of productos) {
                    alert(`Tipo de Producto: ${producto.tipoDeProducto}\nSabor: ${producto.sabor}\nPrecio: ${producto.precio}\n`);
                }

        } else {
                alert ("Gracias por visitar nuestra pagina");
                break;
        }
    }


