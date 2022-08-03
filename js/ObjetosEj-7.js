class Agenda{
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

aniadirContacto(nuevoContacto){
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
buscarContacto(nombre){
    if ( this.agenda.includes( nombre ) ) {
        /* OK, value exists! */
        document.write(`<br>${nombre}`)
    }
}
eliminarContacto(Contacto, nombre){}
agendaLlena(){
    if(this.agenda.length=10){
        document.write("Su agenda esta Llena")
    }
}
huecosLibres(){
    let resultado = this.cantidadContactos - this.agenda.length
    document.write(`Cantidad de Contactos disponibles ${resultado}`)
}

}

let contacto1 = new Contacto("Roberto", 154625389)

////////////////////// EJ 7 //////////////////////////////
class Contacto{
    constructor(nombre, telefono){
        this.nombre=nombre
        this.telefono=telefono
    }

}

class Agenda{
    constructor(tamanio){
        this.contactos = [];
        this.tamanio = tamanio;
    }
    aniadirContacto(nuevoContacto){
        //verificar si el conctacto existe
        if(this.existeContacto(nuevoContacto.nombre)===true){
            console.log("el contacto ya existe, no lo agrego")
        }else{
            if(!this.agendaLlena()){
                this.contactos.push(nuevoContacto)
            }
            //verificar si la agenda esta llena
            this.contactos.push(nuevoContacto)
        }
    }
    existeContacto(nombre){
        // es por el contacto existe
        const contactoExistente = this.contactos.find( (itemContacto)=> {return nombre === itemContacto.nombre} )
        console.log(contactoExistente)
        if(contactoExistente){
            console.log("El contacto existe")
            return true
        }else{
            console.log("El contacto no existe")
            return false
        }
        
    }
agendaLlena(){
    if(this.contactos.lenght === this.tamanio){
        console.log("La agenda esta llena")
    }else{
        if(this.agendaLlena() === true){

        }else 
        console.log("La agenda no esta llena")
    }
}
eliminarContacto(nombre){
    let contactosFiltrados = this.contactos.filter((itemContacto)=>{return itemContacto.nombre != nombre})
    this.contactos=contactosFiltrados;
    console.log("Elemento eliminado "+nombre)
    console.log(this.contactos);
}
huevosLibres(){
    let resultado = this.contactos - this.agenda.length
    document.write(`Cantidad de Contactos disponibles ${resultado}`)
}
buscarContacto(){
    const contactoBuscar = this.contactos.find( (itemContacto)=> {return nombre === itemContacto.nombre} )
    document.write(contactoBuscar)

}

}
//crear la agenda
let agendaTelefonica = new Agenda (10)
console.log(agendaTelefonica)
// menu de opciones



do{
    let opcion = parseInt(prompt(`Seleccione una opcion:
1- Agregar un contacto,
2- Consultar si el contacto existe,
3- Listar contactos,
4-Buscar un contacto,
5-Eliminar un cotacto,
6- Consultar si la agenda esta llena,
7- Espacio disponible,
8- Modificar tamaño de la agenda
`))

switch(opcion){
    case 1:
        //1- Agregar un contacto
        //pedir nombre y telefono
        let telefono = prompt("Ingrese un telefono").toLocaleLowerCase();
        let nombre = prompt("Ingrese un nombre");
        let nuevoContacto = new Contacto(nombre, telefono);
        agendaTelefonica.aniadirContacto(nuevoContacto)
        //crear el contacto
        break;
    case 2:
        let nombreBuscado = prompt("Ingrese un nombre").toLocaleLowerCase();
        agendaTelefonica.existeContacto(nombreBuscado);
           // 2- Consultar si el contacto existe,
        break;
    case 3:
        // 3- Listar contactos,
        break;
            
    case 4:
        // 4-Buscar un contacto,
        break;
    case 5:
        let contactoBorrar = prompt("Ingrese un contacto para eliminar").toLocaleLowerCase();
        agendaTelefonica.eliminarContacto(nombreBuscado);

        // 5-Eliminar un cotacto,
        break;

    case 6:
        // 6- Consultar si la agenda esta llena,
        break;

    case 7:
        // 7- Espacio disponible,
        break;

    case 8:
        // 8- Modificar tamaño de la agenda
        break;
    default:
        alert("Accion incorrecta")
}


}while(confirm(`Desea realizar otra operacion ?`))