
/*
//IF ELSE
let usuario1 = prompt("Ingresa tu nombre de usuario");

if (usuario1 != "") {
    alert(`Bienvenido ${usuario1}`);
}
*/
/*
let edad1 = parseInt(prompt("Ingresa tu año de nacimiento"));

if (edad1 <= 2005 && edad1 >= 1900) {
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
*/
// CORREGIDO 14/08/23
/*
let contrasena = prompt("Introduce tu contraseña porfavor, con ´ESC´ puedes salir");

while (contrasena != "ESC"){
    switch (contrasena) {
        case "123":
            alert("contraseña antigua");
            contrasena = prompt("Contrasena antigua, intentalo de nuevo");
            break;
        case "456":
            alert("contraseña correta")
            contrasena = "ESC"
            break;
        default:
            alert("contraseña incorrecta")
            contrasena = "ESC"
            break;
    }
}
*/


//FUNCIONES
function adivinar() {
    

alert("Vamos a adivinar el numero que estas pensando");
const numero1 = parseInt(prompt("Porfvor introduce un numero del 1 al 10 y recuerdalo"));

let numeroPensado = (numero1 * 2 + 10) / 2 - numero1;

alert("Has las operaciones mentalmente, multiplica tu numero *2");
alert("Ahora sumale 10");
alert("Ahora dividelo entre 2");
alert("Por ultimo, restale el numero que pensaste inicialmente");
alert(`El numero que estas pensando es ${numeroPensado} :P`)
}

adivinar();