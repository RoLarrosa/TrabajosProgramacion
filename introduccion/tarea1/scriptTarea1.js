
//1)

const invitados = ["Lucas", "Matias", "Jose", "Martina", "Marcelo", "Esteban","Marcela", "Martin"];
console.log(invitados.length);

//2)
console.log(invitados[8]);

//3)
invitados.push("Pedro");
console.log(invitados);

//4)

let eliminarInvitado = invitados.splice(6,1);

console.log(eliminarInvitado);
console.log(invitados);

//Por cada invitado, asignarle un numero de orden conforme su posición.

let nuevaLista = invitados.map((nombre,i)=>({Orden: i, nombre:nombre}));
console.log(nuevaLista);

//Acomodar los invitados por orden alfabético
console.log(invitados.sort());

//--------------------------------------------

miArray=["hola","chau","que tal"];

miArray.forEach()











