
// PARTE 1: VARIABLES.
console.log("PARTE UNO: VARIABLES")

//alert('funcionando correctamente')

let variableSinValor;

console.log(variableSinValor)
// al no tener valor la variable es 'undefined' :) 

let booleano1 = true;
console.log("booleano1",booleano1)
let booleano2 = false;
console.log('booleano2', booleano2)

const PI = 3.14;
console.log("PI", PI)

const TAU = 2*PI;
console.log("TAU", TAU)

const miNombre = 'Fran';
console.log('miNombre', miNombre)
// Ponemos el texto entre comillas 

const miNumeroFav = 8;
console.log("miNumeroFav", miNumeroFav)

// Hay varias formas de hacer una booleana:
// con let (sin declarar o declarar)
// con const (declaración obligatoria)
let booleano3
booleano3 = false;
const booleano4 =false;
const booleano5 = true; 
console.log(booleano4)
console.log(booleano5)

// longitud de la variable miNombre

const miNombreLength= miNombre.length;
console.log(miNombreLength)

//muestra el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav)

//Concatenar varias variables
console.log("Mi nombre es " + miNombre + "y mi número favorito es el " + miNumeroFav +" version 1")
//Interpolamos para usar varias variables 
console.log(`Mi nombre es ${miNombre} y mi número favorito es el ${miNumeroFav} version 2`)

// Transformar un texto a mayúscula

const crack = 'Seré un crack en JavaScript al terminar el bootcamp';
console.log(crack)
const mayusCrack = crack.toUpperCase();
// lo mismo da crear la variable e imprimirla o imprimirla con la transformación
console.log(crack.toUpperCase() +' 1')
console.log(mayusCrack+' 2')

//Muestra los 5 primeros caracteres de las siguiente variable.

const holaCrack ='Hola soy un crack'
console.log(holaCrack)

console.log(holaCrack.substring(0,5))
// los cinco primeros caracteres conforman 'hola '


// convertir cualquier variable a string

console.log("miNumeroFav", miNumeroFav,typeof miNumeroFav)
let miNumeroFavString = miNumeroFav.toString();
console.log("miNumeroFavString", miNumeroFavString, typeof miNumeroFavString)

// Concatenación 

const presentacion = `Mi nombre es ${miNombre} y mi número favorito es el ${miNumeroFav}`
console.log(presentacion)

// Valor de Pi sin decimales.

// tomamos el valor total de pi
const realPI = Math.PI
console.log("Valor de PI",realPI, "(",typeof realPI,")")

// transformamos en cadena y sacamos los 4 primeros caracterers "3,14"
// que incluyen dos decimales, junto con la coma y el valor de unidad.
const realPI2 =realPI.toString().substring(0,4)
console.log("pi con dos decimales vers 1", realPI2, "(",typeof realPI2,")")

// to.Fixed nos permite sacar decimales pero los convierte en cadena.
const PI2decimales = realPI.toFixed(2)
console.log("Pi con dos decimales  vers 2",PI2decimales, "(", typeof PI2decimales,")")

// PARTE DOS ARRAYS. 
console.log("PARTE DOS: ARRAYS")

// array vacío

const arrayVacio = [];
console.log(arrayVacio)

const arrayNumeros = [1,2,3,4,5,6,7,8,9]
console.log("del 1 al 9",arrayNumeros)

// .push nos permite añadir elementos a un array números o 'caracteres'

arrayNumeros.push(10,11,12,13,14,15)
console.log("del 1 al 15",arrayNumeros)


const numerosPares = [0,2,4,6,8]
console.log("Numeros Pares", numerosPares)

const numerosNegativos =[0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
console.log("numerosNegativos",numerosNegativos)

// creamos array "Hola Mundo"
const holaMundo =["hola","Mundo"]
console.log(holaMundo)

// Creamos array loGuardoTodo y añadimos elementos después.
const loGuardoTodo =["hola", "que",23,43.24, "tal"]
console.log(loGuardoTodo)
console.log("longitud de loGuardoTodo", loGuardoTodo.length)
// añadimos texto
loGuardoTodo.push("estas?")
console.log(loGuardoTodo)

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log(arrayDeArrays)

// reordenar un array.
console.log(arrayNumeros)
const arrayNumerosReversed = arrayNumeros.reverse()
console.log(arrayNumerosReversed)

// mostrar una propiedad de un array, 
//el 2 elemento es la posicion 1, porque empieza en 0
console.log("array",loGuardoTodo)
console.log("2º elemento del array >>",loGuardoTodo[1])

// añadir una propiedad al array.
loGuardoTodo.push("Euralio")
console.log(loGuardoTodo);
console.log(loGuardoTodo[6]);

// PARTE TRES: OBJETOS.
console.log("PARTE TRES: OBJETOS")

// crear un objeto
const coche = {
    marca: "Fiat",
    modelo: "500",
    matricula: "123456AB"
}
console.log("el cochecito leré", coche)

const casa = {
    codPostal: 46007,
    calle: "Desengaño",
    portal: 21,
    piso: 2
}
console.log("el piso de barbie", casa)

const FullStackDeveloper ={
    arrayLenguajes : ["javascript","php"],
    arrayProyectos : ["web personal", "web catering"]
}
console.log("El developer sabe de ", FullStackDeveloper)

const perro = {
    nombre: "Nevado",
    raza: "callejero",
    color: "blanquito",
    edad:  3,

}
console.log("Conoce a mi perro", perro)


const noticia ={
    titular: "Perro desaparecido",
    descripcion:"Se ha perdido mi perro uwu"
}

console.log(`¡Extra extra! ${noticia.titular} por favor, ${noticia.descripcion} se llama ${perro.nombre} de raza ${perro.raza} y color ${perro.color} ehe`)

const persona ={
    nombre: "Luffy",
    apellidos: "Monkey D.",
    edad: 18
}
console.log("Te presento a",persona)
console.log(`Se llama ${persona.nombre}`)
console.log(`y sabe de ${FullStackDeveloper.arrayLenguajes[0]}`)

const portatil ={
    marca: "apple",
    modelo:"macbook pro",
    color: "gris espacial",
    tamaño: "15 pulgadas"
}

console.log(`Me he comprado un ordenador nuevo:`, portatil)
console.log(`me han dicho que es de marca ${portatil.marca}`)
// esta primera forma me gusta porque me da las propiedades del objeto
console.log(`por si no te queda claro es un ${portatil['marca']}`)
// esta segunda forma no me gusta porque no me sugiere valores


// CONCIERTO
const concierto ={
    cantantes :["Nathy Peluso", "Bad Gyal", "C. Tangana", "Rosalía"],
    grupos: ["La Moda", "Miss Caffeina", "Varry Brava", "Cariño"]
}
console.log(concierto)
console.log(`Dime qué grupos vienen al festival: ${concierto.grupos}`)
console.log(`¿Cuál es tu favorito? El mío es: ${concierto.grupos[1]}`)
const led ={
    rgb : ["azul","rojo","verde"]
}

// Led de Colorines
console.log(led)
console.log(`¿Qué colores tiene un led?: ${led['rgb']}`)

const O_Error = {
    codigo: ["Todo bien","Error", "Prueba otra vez"]
}
console.log(O_Error)
console.log(`¿Qué dice el sistema?:${O_Error.codigo[1]}!`)

// Crea un objeto de nombre Grupo con la propiedad integrantes (array)
// ,obtén el valor de la propiedad guardándolo en la variable integrantes 
// y muestra por consola a uno de los integrantes

//  Este no lo he entendido pero hago un intento =( 


// opcion uno con un objeto cuya propiedad es un array
const grupo ={
    integrante: [
        guitarra ={
            nombre : "Homer",
            apellido : "Simpson"},
        bajista ={
            nombre : "Marge",
            apellido: "Simpson"},
        cantante={
            nombre : "Lisa",
            apellido: "Simpson"}]
}
console.log(grupo)
console.log(`¿Quien es el cantante?: ${grupo.integrante[2].nombre} ${grupo.integrante[0].apellido}`)
 
// Opcion dos haciendo un objeto con la propiedad integrantes
// y dicha propiedad es otro objeto
const grupo2={
    integrantes:{
        guitarrista:{
            nombre: "Finn",
            apellido:"El Humano"
        },
        bajista:{
            nombre: "Marceline",
            apellido:"La Vampira"
        },
        cantante:{
            nombre: "Jake",
            apellido:"El perro"
        }
    }
}
console.log(grupo2.integrantes)
console.log(`El grupo lo forman ${grupo2.integrantes.bajista.nombre} , ${grupo2.integrantes.guitarrista.nombre} y ${grupo2.integrantes.cantante.nombre}`)
// IMPRESORA
const impresora ={
    tinta : [
        roja ={
            colorTinta: "rojo",
            nivelesTinta: "bajo"
        },
        verde ={
            colorTinta: "verde",
            nivelesTinta: "medio"
        },
        azul ={
            colorTinta: "Azul",
            nivelesTinta: "alto"
        }
    ]
}
console.log(impresora)
console.log(`El nivel de tinta ${impresora.tinta[1].colorTinta} es ${impresora.tinta[1].nivelesTinta}`)

// MOVIL
const movil ={
especificaciones: [
    pantalla = "5,3pulgadas",
    peso = "230gramos",
    camara = "20megapixeles",
    sistema ="iOS"
],
marca : "apple",
fecha : 2020
}
console.log(movil)
console.log(movil["especificaciones"])
console.log(movil.especificaciones)

// cambiar la marca de portatil

portatil.marca = "MSI"
console.log(`La nueva marca de portatil es: ${portatil.marca}`)

// Añadir Guns'n'Roses al concierto.

concierto.grupos.push("Gun'n'Roses")
console.log(`Al festival vienen ahora: ${concierto.grupos}`)

// Añadir nuevas Propiedades a un Objeto
// Simplemente escribimos "objeto.propiedadNueva = valor"

// Ver valores de fecha aquí: https://www.w3schools.com/js/js_dates.asp

concierto.fecha = new Date()
console.log(concierto)

// Determinar número de integrantes en el grupo
console.log(`En el grupo1 (Los Simpson) hay ${grupo.integrante.length} integrantes`)
// Como en el grupo2 es un OBJETO usamos Object.keys(loquequiero) con .length
// You can also use Object.keys() method to count all the enumerable properties (more about that in a sec) on an object.
console.log(`En el grupo2 (Hora de Aventuras) hay ${Object.keys(grupo2.integrantes).length} integrantes`)


// Quitar un integrante al grupo, es decir quitar un elemento de una propieda de un objeto

grupo.integrante.pop()
console.log(grupo.integrante)
console.log(`En el grupo1 (Los Simpson) hay ${grupo.integrante.length} integrantes ahora `)

// Aquí tengo dudas porque con el grupo2 que es un objeto el pop() no funciona
// y no se me ocurre como quitarlo 
g