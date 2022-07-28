
class Persona{
    constructor(nombre, edad){
        this.nombre=nombre,
        this.edad=edad
    }
    hablar(){
        document.write(`Hello ${this.nombre} <br>
        follow the white rabbit 
        `)
    }
}

let neo = new Persona(`Neo`, 25);
let juan = new Persona("Juan", 30);


/////Molde Profesores/////
class Profesor extends Persona{
    constructor(nombre, edad, tipo){
        super(nombre,edad)
        this.tipo=tipo
    }
    tipoFormateado(){
        return `Tipo de contratacion${this.tipo}`
    }
}
