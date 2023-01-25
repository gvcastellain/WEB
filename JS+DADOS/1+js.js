const numbers  = ["1", "2", "3", "4"]

console.log(numbers[0])
console.log(numbers[3])

console.log(numbers.length)

for (let number of numbers){
    console.log(number)
}

numbers.push("5")
console.log(numbers)

const um = numbers.find(number => number === "1")
console.log(um)

numbers.splice(1, 1)

console.log(numbers)