let productoElegido = prompt ("Ingrese el producto elegido (Tortas o Cupcakes), para cerrar el pedido ingrese FIN");
let sabor = prompt ("Ingrese el sabor elegido");
let cantidad = parseInt (prompt ("Ingrese la cantidad deseada"));

while (productoElegido !== "FIN") {
    if (productoElegido === "Cupcakes") {
            switch (sabor) {
                case "Chocolate":
                case "Limon":
                    costoProducto = 50;
                    break;
                case "Red Velvet":
                    costoProducto = 60;
                    break;
                case "Vainilla":
                    costoProducto = 40;
                    break;   
            }
    } else if (productoElegido === "Tortas") {
        switch (sabor) {
            case "Brownie":
            case "Chocotorta":
                costoProducto = 1800;
                break;
            case "Rogel":
            case "Crumble de Manzana":
                costoProducto = 2100;
                break;
            case "Cheesecake de Chocolate":
            case "Cheesecake de Frutos Rojos":
                costoProducto = 2300;
                break;
            case "Lemon Pie":
            case "Mousse de Frutilla":
                costoProducto = 2500;
                break;   
        }
    }    
    
    let costoTotal = costoProducto * cantidad;
    alert ("El costo total de tu compra es $ " + costoTotal)
    productoElegido = prompt ("Para finalizar, escriba FIN");
}
