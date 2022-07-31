function calcPerimetro(altura, ancho){
        
    let p = (altura+ancho)*2;
    
    document.write(`El perimetro es ${p}`)
    console.log(p)
    return p;
}

calcPerimetro(2,3)