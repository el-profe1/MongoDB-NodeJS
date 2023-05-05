// Forma en desuso de declarar
// var a = 7;
// var b = 5;
// var c = a + b;

// console.log(c);

// c = 13;

// console.log(c);

// Forma nueva de declarar variables
// Utilizo let si se que el valor va a cambiar
// let a = 7;
// let b = 5;
// let c = a + b; 
 
// console.log(c);

// c puede cambiar de valor
// c = 11;

// console.log(c);

// let c = 15;

// Manejo de const
// Se utiliza mucho con funciones y arreglos
// const a = 7;
// const b = 5;
// const c = a+b;
// console.log(c);

// c= 20;

// console.log(c);

// COMPLIQUEMOS UN POCO ESTO CON FUNCIONES
// let y const me permiten declarar variables solo dentro de un SCOPE
// const frutas = () =>{
//     if(true){
//         var fruta1 = "Aguacate";
//         let fruta2 = "Banano";
//         const fruta3 = "Coco";
//     }
//     console.log(fruta1);
//     console.log(fruta2);
//     console.log(fruta3);
// }

// frutas();

// Qué nos muestra esta funcion?
// HOISTING
// function getClothing(isCold) {
//     if (isCold) {
//       var freezing = 'Consigue una chaqueta!';
//     } else {
//       var hot = 'Usa pantaloneta!';
//       console.log(freezing);
//     }
//   }

// function getClothing(isCold) {
//     if (isCold) {
//       const freezing = 'Consigue una chaqueta!';
//     } else {
//       const hot = 'Usa pantaloneta!';
//       console.log(freezing);
//     }
//   }

//   getClothing(false);

// 2 FUNCIONES FLECHA o ARROW FUNCTIONS
// Nos permite manjear el codigo de una manera mas clara

// function suma(a, b){
//     return a + b;
// }

// const suma = (a, b) =>{ 
//     return a+b;
// };

// console.log(suma(7,5));

// const cuadrado = n => n*n;

// console.log(cuadrado(2));

// FUNCIONES IIFE

// (function (x, y){ console.log(x*y)})(2,3)

//3. TEMPLATE LITERALS
// Forma tradicional de trabajar con cadenas
// const nombre = "Pepito";
//const mensaje = "Mi nombre es \n"+nombre;

// console.log(mensaje);

// trabajando con backstick
// const mensaje = `Mi nombre 
// es ${nombre}`;
// console.log(mensaje);

// 4. DESESTRUCTURACION
// const punto = [5, 10, 22];
// const x = punto[0];
// const y = punto[1];
// const z = punto[2];
// Como mostrar los puntos por separado
// console.log(`x: ${x}, y: ${y}, z:${z}`);

// Forma corta de hacer la asignacion
// const [x, y, z] = punto;
// console.log(`x: ${x}, y: ${y}, z:${z}`);

// const [x, , z] = punto;
// console.log(`x: ${x}, z:${z}`);

/// ... RESTO
const almuerzo = ["Aguacate","Arroz","Huevo","Remolacha","Papas","Platano","Salchichon","Sal"];
const [primero, segundo, tercero, ...otros] = almuerzo;
console.log(primero, segundo, otros);