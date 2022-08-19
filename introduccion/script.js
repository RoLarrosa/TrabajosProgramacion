//alert("Bienvenidos!");

// function mostrar(mensaje,divElement){
//     divElement.innerHTML = `
//     <div> ${mensaje}</div>
//     `; 
// }

// function hola() {
//     let nombre = document.getElementById("nombre").value;
//     let apellido = document.getElementById("apellido").value ;
    
//     let alert = document.getElementById("alerta")
//     let msj = "Bienvenido "+ nombre  + " "+ apellido.toUpperCase();

//     mostrar(msj,alert)
// }

// function calcular(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let alerta = document.getElementById("mostrar");
//     let suma = parseInt(num1)+ parseInt(num2); 
//     let resta = (num1 - num2);
//     let division = (num1 / num2);
//     let multiplicacion = (num1 * num2 );
//     let msj = "El Resultado de la suma es: "+ suma + " El Resultado de la resta es: "+ resta + " El Resultado de la division es: "+ division + " El Resultado de la multiplicacion es: "+ multiplicacion;

//     mostrar(msj,alerta)
// }


// //MANIPULACION DE ARRAYS

// const miArray = ["nomg",1, ()=>{},[]]; 
// console.log(miArray.length);
// console.log(miArray[1]);
// console.log(miArray);

// //MODIFICAR UN ELEMENTO DEL ARRAY

// miArray[0]= "banana";
// console.log(miArray);

// //mostrar un elemento del array 

// const objeto = miArray[1];
// console.log(objeto);

// const ultimoElemento = miArray[miArray.length-1];
// console.log(ultimoElemento);

// //INDEX OF
// const nombres = ["susana","rut","lautaro"];
// console.log(nombres);

// const nombre1 ="lautaro";
// const indice = nombres.indexOf(nombre1);
// console.log(indice);

// nombres[nombres.indexOf("lautaro")] = "Ruben";
// console.log(nombres);

// //GREGAR ELEMENTOS

// nombres.push("rocio"); //agrega al final
// console.log(nombres); 
// nombres.unshift("monica"); // agrega elemento al principio
// console.log(nombres); 
// nombres.pop(); // elimina ultimo elemento
// console.log(nombres); 
// nombres.shift(); // elimina el primer elemento
// console.log(nombres); 

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// months.splice(2, 3, 'May','sjds','juan');
// console.log(months);

// //FUNCIONES
// function validarNombre(nombre){
// return;
// }


// const validarNombres = (nombre)=>`${nombre} nuevo`;

// //hacer una funcion llamada numeros que el primer parametro indique el valor que tengo que agregar al arreglo objetosNumeros y el segundo parametro me indique  el indice donde sera agregado y ademas muestre por consola el nuevo arreglo 


// const objetosNumeros = [1,4,6,7,8,23]; 
// console.log(objetosNumeros)

// numeros(10,0)

// function numeros(valor,indice){

//     objetosNumeros.splice(indice,1,valor)
//     console.log(objetosNumeros);

// }

// function sumar(num1,num2){
//     let total = num1+num2;
//     console.log(total) ;
// }
// sumar(10,20);

// //FUNCION FLECHA

// const sumarr = (num1,num2) =>  num1 + num2; 

// console.log(sumarr(2,6))


// let string = "1234";
// console.log(typeof(string));


// //JS ES UN LENGUAJE SINCRONICO, JS ES UN LENGUAJE NO BLOQUEANTE , JS ES DE HILO SIMPLE


// //SetTimeout no es de js

// // console.log("me despierto")
// // console.log("me cepillo los dientes")
// // console.log("prendo la cafetera")
// // for(let tiempo = 120;tiempo>0;tiempo--) {
// //     console.log(tiempo);
// //     if(tiempo===1){
// //         console.log("el cafe esta listo")
// //     }
// // }
// // console.log("tomo el cafe")
// // console.log()


// // setTimeout(()=>{console.log("el cafe esta listo")},3000)

// //ejemplo 2

// //a
// console.log("Hugo");
// console.log("Rodrigo");
// console.log("Teresa");

// //B
// setTimeout(()=> console.log("Teresa"),5000);
// console.log("Hugo");
// console.log("Rodrigo");

// //c

// setTimeout(()=> console.log("Teresa"),5000);
// for (let index = 0; index <=300; index++) {
//     console.log(index)
//     if(index===300){

//     }
// }
// console.log("Hugo");
// console.log("Rodrigo");


// definir una funcion que se llama primero


// function primero(fn){
//     setTimeout(function() {
//         console.log("primero");
//         fn();
//     }, 3000);
// }
let primero = (fn) => setTimeout(()=> {
    console.log("primero") 
    fn(),3000
})
console.log(primero);

// function segundo(){
//     console.log("segundo");
// }

// primero(segundo);

//foreach

const miArray = ["Hugo","Lucas","Fernando"];
miArray.forEach((nombre,indice)=> console.log(nombre,indice));
const result = miArray.filter(word=> word.length>4);


//objetos

const nuevoObjeto = new Object();
const objeto2 = {nombre: "Teresa",
                    edad: 27,
                    domicilio: {domi1:"doffowsj",
                                domi2:"sdhfowihe"},
                }
objeto2.apellido="Gonzales";

console.log(objeto2);

console.log(objeto2.domicilio);

console.log(objeto2.domicilio.domi1);

delete objeto2.edad;
console.log(objeto2);

console.log("edad" in objeto2);
console.log("nombre" in objeto2);

//crea un obj user vacio, agregar la propiedad name con el valor jhon, agregar la propiedad surname con el valor surname smith,camia el valor de name a peter, remueve la propiedad name

const user ={   name: "John", 
                surname: "Smith"};
console.log(user);

user.name="Peter";
console.log(user);

delete user.name;
console.log(user);

//imprime todas las propiedades
for(key in user){
    console.log(key)
}

let prodAlgodon = {
    pirane: 420,
    laishi: 100,
    ibarreta: 250,
    "Palo Santo": 120
}
//escribe el codigo para sumar todas las entidades y  almacenar el resultado en la variable sum.


function sumaObjetos(objeto){
    let suma = 0
for (const key in objeto) {
    suma = suma + objeto[key];
}
console.log(suma);
}

sumaObjetos(prodAlgodon)