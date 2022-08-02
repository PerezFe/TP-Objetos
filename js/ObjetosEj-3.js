class Rectangulos{
    constructor(altura, ancho){
        this.altura=altura,
        this.ancho=ancho
    }
    get mostrarAltura(){
        return this.altura
    }
    get mostrarAcho(){
        return this.ancho
    }
    set modificarAltura(nuevaAltura){
        this.altura = nuevaAltura
    }
    set modificarAncho(nuevoAncho){
        this.ancho = nuevoAncho
    }
    calcPerimetro(altura, ancho){
        let p = 2*(altura+ancho)
        
        document.write(`El perimetro es ${p}`)
        
    }
    calcArea(altura, ancho){
        let area = altura * ancho
        document.write(`El área es ${area}`)
    }
}

let Nrectangulo = new Rectangulos(10, 20)
