
//CONSTRUYENDO ARREGLOS

//1.FORMA TRADICIONAL
let numeros=[1,2,3,4,5]
let nombres=['juan', 'camila', 'andres', 'catalina']
let votos=[true,true,false,false,false, true]



//2.FORMA POO
let numerosPOO=Array(1,2,3,4,5)
let nombresPOO=Array('juan', 'camila', 'andres', 'catalina')
let votosPOO=Array(true,true,false,false,false, true)

//IMPRIMIR LOS ELEMENTOS DEL ARREGLO
console.log(numeros)
console.log(numerosPOO)

//ACCEDER A UN SOLO ELEMENTO DEL ARREGLO
console.log(numeros[3])
console.log(numeros[4]) //aparece en la consola el numero 5 porque esta en la posicion 5(empieza a contar en 0)

//OBJETOS EN JS
let persona={
    nombre:'juan',
    edad:24,
    hinchaDelnacional:false,
    foto: 'url',
}

console.log(persona)
console.log(persona.nombre)




//en vez de hacer esto se hace array:
/*let nombreProducto = 'Funko pop de Petro'
let precioProducto=45000
let cantidadProducto=5
let imagenProducto='NA'

let identificacionUsuario='1036676219'
const IVA=0.19
const PAIS_USUARIO='COL'

let totalCompra=precioProducto*cantidadProducto*/
