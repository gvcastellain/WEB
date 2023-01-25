class Queue {
    constructor(){
        this.data = []
    }

    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu na fila`)

    }
}

const fila = new Queue

fila.enqueue("gab")
fila.enqueue("bento")
fila.enqueue("paulo")
fila.dequeue()
fila.dequeue()
fila.dequeue()