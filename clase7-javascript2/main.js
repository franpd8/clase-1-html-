// PARTE 1: BOOLEANO

// && And
// || or
// ! distinto 


const booleano1 = true
console.log("booleano1",booleano1)
const booleano2 = false 
console.log("booleano2",booleano2)


// Crear variable booleanoAnd cuyo valor sea la comparación booleana: booleano1 and booleano2
// AND se pone con &&
const booleanoAnd = booleano1 && booleano2

console.log("Comparación AND",booleano2)

// Crear variable booleanoOr cuyo valor sea la comparación booleana: booleano1 or booleano2
// OR se pone con ||
const booleanoOr = booleano1 || booleano2
console.log("Comparación Or", booleanoOr)

// Crear variable booleanoNot cuyo valor sea la comparación booleana: no booleano1
// Para invertir valores usamos !
const booleanoNot = (!booleano1)
console.log("Comparación Not", booleanoNot)

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0 = booleanoOr && (booleano1 || ( !booleano1 && !booleano2))
console.log("Comparación Mixta", booleanoMix0)

// PARTE 2:OPERADORES

// Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

const valorDivisión = 17/7 
console.log(valorDivisión.toFixed(2))

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7

const valorResto = 17 % 7 
console.log(valorResto)

// PARTE 3: LÓGICA PROGRAMACIÓN

// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

const A = 9
const B = '9'

if (A == B){
    console.log("Son iguales")
} else{
    console.log("No son iguales")
}

if(A === B){
    console.log("Son exactamente iguales")
} else{
    console.log("Son iguales en valor pero no en tipo")
}

// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
console.log("Ejercicio mochila")

const mochila = [1,,2,3,4,5,6,7,8,9,10,11]
console.log(mochila.length)

const capacidad = mochila.length
console.log("Capacidad =", capacidad)

if ( capacidad < 2 ){
    console.log("Creo que no necesito mochila")
} else if (  2 <= capacidad <= 10 ){
    console.log("Que bien voy con mi mochila")
} else {
    console.log("No puedo cargar con tantas cosas")
} 
// No funciona bien, debería sacar el último mensaje y no lo hace.



