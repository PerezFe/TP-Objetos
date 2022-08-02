let cuenta = {
    titular: "Alex",
    saldo: 0,
    transferir(){
        console.log(this)
    },
    ingresar: (deposito)=>{
        this.saldo += deposito;
    },
    extraer (retiro){
        if(this.saldo >= retiro){
            this.saldo -= retiro;
            document.write(`<p>Se retiro $${retiro}</p>`)
        }else{
            alert("Saldo Insuficiente")
        }
    },
    informar: (objeto)=>{
        console.log(objeto)
        document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldo}</p>`)
    },
};

cuenta.informar();


let deposito = parseFloat(prompt("Ingrese el monto desead"));
cuenta.ingresar(deposito);

let retiro = parseFloat(prompt("Ingrese el monto a extraer"));
cuenta.extraer(retiro);

cuenta.informar();