let negar = false

console.log("pedir uber")
const promessa = new Promise((resolve, reject) => {
    if(negar) {
        return reject("pedido negado")
    }
    return resolve("carro chegou")
})

console.log("aguardando")

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log("finalizado"))