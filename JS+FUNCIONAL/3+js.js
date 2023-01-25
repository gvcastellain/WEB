const sayMyName = () => console.log("gab")
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log("discover"))

console.log(runFunction(Math.random))