class Contacto{
constructor(nombre, telefono){
    this.nombre=nombre,
    this.telefono=telefono
}

cantidadContactos = 10;
agenda=[]
set modificarNombre(nuevoNombre){
    this.nombre = nuevoNombre
}
set modificarTelefono(nuevoTelefono){
    this.telefono = nuevoTelefono
}

get mostrarNombre(){
    return this.nombre;
}
get mostrarTelefono(){
    return this.telefono;
}
get mostrarAgenda(){
    return this.agenda;
}

aniadirContacto(nuevoContacto, nuevoTelefono){
    if ( this.agenda.includes( nuevoContacto ) ) {
        document.write(`<br>El usuario ${nuevoContacto} ya existe en su lista de contactos`)
        
    }
    else if(this.agenda.length <= this.cantidadContactos){
        this.agenda.push(nuevoContacto)
    }else{
        document.write("A llegado al limite de Contactos")
    }
}
existeContacto(nuevoContacto){
    if ( this.agenda.includes( nuevoContacto ) ) {
        /* OK, value exists! */
        document.write(`<br>El usuario ${nuevoContacto} ya existe en su lista de contactos`)
    }
}
listarContactos(){
    for (let i = 0; i < this.agenda.length; i++){
        document.write(`${this.agenda[i]}<br>`)         
    }
}  
buscarContacto(nombre){}
eliminarContacto(Contacto, nombre){}
agendaLlena(){}
huecosLibres(){
    let resultado = this.cantidadContactos - this.agenda.length
    document.write(`Cantidad de Contactos disponibles ${resultado}`)
}

}

let contacto1 = new Contacto("Roberto", 154625389)
