class Producto {
    constructor (codigo, nombre, precio){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio
    }
    informacion(){
        document.write(`Codigo: ${this.codigo} <br> Nombre ${this.nombre}<br>Precio $${this.precio}`)
    }
    set modificarCodigo(nuevoCodigo){
        this.codigo = nuevoCodigo
    }
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    set modificarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio
    }
    get mostrarCodigo(){
        return this.codigo;
    }
    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarPrecio(){
        return this.precio;
    }
}

let product1 = new Producto(456329, "televisor Samsung", 600)
let product2 = new Producto(98564, "celular Nokia", 1500)
let product3 = new Producto(456852, "teclado Razer", 800)

let carrito = [product1,product2,product3];

for (let i = 0; i < carrito.length; i++){
    carrito[i].informacion()
}


console.log  (carrito)