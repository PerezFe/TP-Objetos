class Libro{
    constructor(isbn, titulo, autor, numPaginas){
        this.isbn=isbn,
        this.titulo=titulo,
        this.autor=autor,
        this.numPaginas=numPaginas
    }
    get mostrarIsbn(){
        return this.isbn
    }
    get mostrarTitulo(){
        return this.titulo
    }
    get mostrarAutor(){
        return this.autor
    }
    get mostrarNumPaginas(){
        return this.numPaginas
    }
    mostrarInfo(){
        document.write(`El libro ${this.titulo} con ISBN:${this.isbn} creador por el autor ${this.autor} tiene ${this.numPaginas} páginas`)
    }
}

let libro1 = new Libro(8561234978564, `Matar a un ruiseñor`, "Harper Lee", 500)
let libro2 = new Libro(5964825868712, `A sangre fria`, "Truman Capote", 350)