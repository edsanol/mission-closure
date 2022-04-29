const createContador = (num) => {
    return function increment (){
        return num++
    }
}

const contar = createContador(1)
console.log(contar)
console.log(contar())
console.log(contar())
console.log(contar())