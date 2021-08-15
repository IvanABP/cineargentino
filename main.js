class Producto{
    constructor(pNombre,pPrecio,pTamaño){
        this.nombre = pNombre;
        this.precio = pPrecio * pTamaño;
        this.tamaño = pTamaño;

        if(this.tamaño == "chico" || this.tamaño == "Chico")
        {
            this.tamaño = 1; 
        }
        else if (this.tamaño == "grande" || this.tamaño == "Grande" )
        {
            this.tamaño = 2
        }
        else
        {
            alert("Tamaño incorrecto")
        }
    }
}

while (true)
{   
    let condicion = prompt("Ingrese aceptar para comenzar a operar")
    var pNombre = parseInt(prompt("Elija la opcion de compra:  \n-Gaseosa\n-Pochoclo\n-Chocolate"));
    var pTamaño = prompt ("Elije el tamaño del producto: \n -Chico \n -Grande")

    var productoNuevo = new Producto (pNombre, pTamaño, pPrecio);
    let saldoDeudor= 0;
    switch (condicion) {
        case 1:
            const gaseosa = 25.0;
            this.precio  = this.precio * gaseosa;
            saldoDeudor = this.precio;
            alert("Debe abonar por su pedido: "+ saldoDeudor);
            break;
        case 2:
            const chocolates = 20.0;
            this.precio  = this.precio * pochoclos;
            saldoDeudor = this.precio;
            alert("Debe abonar por su pedido: "+ saldoDeudor);
            break;
        case 3:
            const pochoclos = 30.0;
            this.precio  = this.precio * chocolates;
            saldoDeudor = this.precio;
            alert("Debe abonar por su pedido: "+ saldoDeudor);
            break;
        default:
            break;
    }
}

