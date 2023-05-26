//Este es un comentario 
/*
Comentario de multiples lineas
otro comentario
*/
/*
num1 = 1;
num2 = 2;
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;


alert("El resultado de la suma es: " + suma +"\n la resta es: " + resta
+ "\n la multiplicacion es: " + multiplicacion + "\n la division es: " + division );*/

/*declaracion de variables con var
var a1 = 20;
var a2 = 30;

alert(a1);
var a1;
alert(a1);*/

//declaracion de variables con let//

let num1 = 1;
let num2 = 2;

suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;
alert("El resultado de la suma es: " + suma +"\n la resta es: " + resta
+ "\n la multiplicacion es: " + multiplicacion + "\n la division es: " + division );

//declaracion de constante//
const valor = 2000;
alert(valor);

//declaracion de multiplicaicon variable;
let number1 = 4, number2 = 10, resultado;
number1++;
number2--;
alert(number1+ "y" + number2);

let flat = true;
alert(flat);
alert(!flat);

//creacion de arreglos
const nombres = ["Maria", "Juan"];
alert(nombres[0]+ "-" + nombres[1]);

const marcas = new Array("Iphone", "Samsung", "Xiaomi")
alert (marcas[0] + "-" + marcas[1]+ "-" + marcas[2])

const animales = new Array("perro","gato","caballo")
alert (animales[0] + "-" + animales[1]+ "-" + animales[2])

const colores = new Array("rojo","negro","rosado")
alert (colores[0] + "-" + colores[1]+ "-" + colores[2])

//alerta longitud del arreglo
alert("la longitud del arreglo es: " + nombres.length)

//ordenar el arreglo
nombres.sort();
alert(nombres[0] + "-" + nombres[1]);

nombres.push("Karla");
alert(nombres[0] + "-" + nombres[1] + "-" + nombres[2])

nombres.pop();
alert(nombres[0] + "-" + nombres[1] + "-" + nombres[2])


