// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

function operaciones(x,z){
    if (x < z) {
        let division = z/x;
        console.log(division);        
    } else {
        let multiplicacion = x*z;
        console.log(multiplicacion);
    }
}

operaciones(5,6);


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function tipoDato(a){
    console.log(typeof a);
}
let saludo = "Hola";
tipoDato(2);
tipoDato(saludo);

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

function calculos(a,b,c,d,e,f){
    let suma = a + b;
    console.log(suma)

    let resta = suma - c;
    console.log(resta)

    let multi = resta * d;
    console.log(multi)

    let divi = multi / e;
    console.log(divi)
    
    let resultado = Math.pow(divi, f);
    console.log(resultado);
}
calculos(10,4,6,8,4,2);

// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function traerArray(arreglo){
    let nuevoArray = arreglo.slice(arreglo.length-3)
    console.log(nuevoArray);
}

miArray = ["manzana","banana","pera","durazno"];
traerArray(miArray);


// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function ordenarArray(arreglo){
    let arrayOrdenado = arreglo.sort();
    console.log(arrayOrdenado);
return
}
ordenarArray(miArray);


// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

function filtrarArray(arreglo,valor){
    let arrayFiltrado = arreglo.filter(filtro=>filtro > valor);
    console.log(arrayFiltrado);
}
numeros = [1,4,5,7,3,9,5,6]

filtrarArray(numeros,5)


// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function sumar(arreglo){
    let valor=0;
    let suma;
    arreglo.forEach(element => { 
        suma = valor + element
        valor = suma;
    })
    let promedio = suma / arreglo.length;
    console.log(suma);
    console.log(promedio)
}
sumar(numeros);

// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

function maniObj(objeto, str){
console.log(objeto[str]);

}

const miObjeto = {
    nombre: "rocio",
    apellido: "larrosa",
    edad: 27
}
maniObj(miObjeto,"nombre");

// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

function sumaObjetos(objeto){
    let suma = 0
for (const key in objeto) {
    suma = suma + objeto[key];
}
console.log(suma);
}
const miObjeto2 = {
    dato1: 10,
    dato2: 20,
    dato3: 27
}

sumaObjetos(miObjeto2);

