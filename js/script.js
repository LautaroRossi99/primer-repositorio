/*  const nombres = ["Pepe", "Lucas", "Jose"]
console.log(nombres)
 */
//Imprime los números del 1 al 10, pero se detiene al llegar al 5
for(let i = 1 ; i<10; i = i + 1){
    if(i == 5){
        break
    }
    console.log(i)
}

//rellenar un array por teclado

const alumnos =["pepe", "maria"]

alumnos.push(prompt("ingrese un nombre"))
console.log(alumnos)


//ABREVIACIONES JAVA SCRIPT
let contador = 0
contador = contador + 1
//para abreviar esto, hacemos 
contador ++
console.log(contador)

//para hacer un acumulador sumandole de mas
contador +=5 //acumula 5 veces

//recorremos array y mostramos x consola
const notasdel1erSemestre = [10, 6, 8, 5, 5, 9]

for(let i = 0; i< notasdel1erSemestre.length; i++){
    console.log(notasdel1erSemestre[i])
}

//abreviacion de lo de arriba (for-Of)
for(let nota of notasdel1erSemestre){
    console.log(nota)
}

const nombres = ["maria", "pepe", "lucas","juan"]
const numeros = [123, 12331, 2134, 4]
const mesesQueGane = [true, false, true, true, false]

for(let nombre of nombres){
    console.log("Hola soy " + nombre)
}

//sumatoria de todos los numeros del array
let totalPerdido = 0
for(let numero of numeros){
    totalPerdido += numero
}
console.log("el total perdido fue $" + totalPerdido)


let contador = 1
for(let mes of mesesQueGane){
    if(mes){
        console.log("en el mes " + contador + "gane")
    }else{
        console.log("en el mes "+ contador + "perdi")
    }
    contador++
}