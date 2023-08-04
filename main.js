
//IF ELSE
let usuario1 = prompt("Ingresa tu nombre de usuario");

if (usuario1 != "") {
    alert(`Bienvenido ${usuario1}`);
}

let edad1 = parseInt(prompt("Ingresa tu año de nacimiento"));

if (edad1 <= 2005 && edad1 >= 1900 && edad1 != "") {
    alert(`Eres mayor de edad, puedes continuar`);
} else {
    alert(`No puedes ingresar al sitio`);
}
// CICLOS
let numero = parseInt(prompt("Escribe un numero porfavor"));
for (let i = 1; i <= 3; i = i + 1) {
    let resultado = numero + i;
    alert(`${numero} + ${i} = ${resultado}`);

}

let contrasena = prompt("Introduce tu contraseña porfavor")
while (contrasena != "ESC") {
    switch (contrasena) {
        case "123":
            alert("contraseña antigua");
            contrasena = prompt("Intentalo de nuevo")
            break;
        case "456":
            alert("contraseña correta")
            contrasena = prompt("SOLO ES PARA DETENER EL BUCLE")
            break;
        default:
            alert("contraseña incorrecta")
            contrasena = prompt("Introduce tu contraseña porfavor")
            break;
    }
}

//FUNCIONES
alert("Vamos a adivinar el numero que estas pensando");
const numero1 = parseInt(prompt("Porfvor introduce un numero del 1 al 10 y recuerdalo"))
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

let numeroPensado = resta(division(suma(multiplicacion (numero1, 2), 10), 2),numero1) ;

alert("Has las operaciones mentalmente, multiplica tu numero *2");
alert("Ahora sumale 10");
alert("Ahora dividelo entre 2");
alert("Por ultimo, restale el numero que pensaste inicialmente");
alert(`El numero que estas pensando es ${numeroPensado} :P`)
