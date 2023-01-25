class Parafuso {
    constructor(){
        if (this.contructor === Parafuso)
            throw new Error("classe abstrata não pode ser instanciada")
    }

    get tipo(){
        throw new Error("método get tipo precisa ser implementado")
    }
}

class Fenda extends Parafuso {
    constructor() { super() }
    
    get tipo() {
        return "fenda"
    }
}

class Philips extends Parafuso {
    constructor() { super() }

    get tipo(){
        return "philips"
    }
}

class Allen extends Parafuso{}

let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
