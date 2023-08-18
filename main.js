
//CONSTRUCTOR ALUMNOS
class Alumno {
    constructor(nombre, carrera, colegiatura) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.colegiatura = colegiatura;
    }
    inscrito() {
        alert(`Felicidades ${this.nombre} estas inscrito en la carrera de 
    ${this.carrera}, tus mensualidades seran de
    ${this.colegiatura}, no te olvides asistir a todas clases y pagar puntualmente.`);
    }
}
//GRUPOS
const grupoDiseño = [];
const grupoAdmin = [];
const grupoDerecho = [];
const colegiaturas = [2000, 1700, 2100]
//ALUMNOS FICTICIOS
grupoDiseño.push(new Alumno("Javier", "Diseño", colegiaturas[0]));
grupoDiseño.push(new Alumno("Luis", "Diseño", colegiaturas[0]));

grupoAdmin.push(new Alumno("Lucas", "Admin", colegiaturas[1]));
grupoAdmin.push(new Alumno("Mariana", "Admin", colegiaturas[1]));

grupoDerecho.push(new Alumno("Sol", "Derecho", colegiaturas[2]));
grupoDerecho.push(new Alumno("Ana", "Derecho", colegiaturas[2]));

//INTERACCION
const nombreAlumno1 = prompt("¡Bienvenido! Ingresa tu nombre porfavor");
let mensaje = (`Hola ${nombreAlumno1}, estas son las carreras dispobibles en nuestra Institucion:
Diseño.
Admin.
Derecho.`);
alert(mensaje);

//infocarreras
const infoCarreras = [
    { nombre: "diseño", semestres: "8", colegiatura: colegiaturas[0], inicio: "6 de agosto" },
    { nombre: "admin", semestres: "6", colegiatura: colegiaturas[1], inicio: "15 de agosto" },
    { nombre: "derecho", semestres: "10", colegiatura: colegiaturas[2], inicio: "28 de agosto" },
];
//BUSCADOR
let buscador = prompt(`Si escribes el nombre de la carrera (Diseño, Admin o Derecho)
recibiras toda la informacion acerca de ella. O escribe "ESC" para avanzar`).toLocaleLowerCase();

while (buscador != "esc") {

    const info = infoCarreras.find((item) => item.nombre === buscador);

    if (info) {
        let mensajeInfo =
        `Licenciatura en ${info.nombre}:
        Semestres a cursar: ${info.semestres}
        Colegiatura: ${info.colegiatura}
        Inicia: ${info.inicio}`

        alert(mensajeInfo)

    } else {
        alert("No se encontro la carrera");    
    }
    buscador = prompt(`Si escribes el nombre de la carrera (Diseño, Admin, Derecho)
    recibiras toda la informacion acerca de ella o escribe "ESC" para avanzar`).toLocaleLowerCase();

}
//SELECCION DE CARRERA
const carreraAlumno1 = prompt(`Si quieres elegir una carrera solo tienes que escribir su nombre
(Diseño, Admin, Derecho)`).toLowerCase();

switch (carreraAlumno1) {
    case "diseño":
        const alumnoDis = new Alumno(nombreAlumno1, carreraAlumno1, colegiaturas[0]);
        grupoDiseño.push(alumnoDis);
        alumnoDis.inscrito();
        break;
    case "admin":
        const alumnoAdm = new Alumno(nombreAlumno1, carreraAlumno1, colegiaturas[1]);
        grupoAdmin.push(alumnoAdm);
        alumnoAdm.inscrito();
        break;
    case "derecho":
        const alumnoDer = new Alumno(nombreAlumno1, carreraAlumno1, colegiaturas[2]);
        grupoDerecho.push(alumnoDer);
        alumnoDer.inscrito();
        break;

    default:
        alert("No se encuentra esa carrera");
        break;
}
//BECA
let beca = prompt(`Si eres acredor de una Beca aqui te dejamos los costos a pagar
solo elige si es por Promedio o de Gobierno o usa "ESC" para avanzar`).toLocaleLowerCase();

switch (beca) {
    case "gobierno":
        const becaGob = colegiaturas.map ((item) =>
            item - item * .30);
            let mensajeBecaGob = `
            Diseño antes($2000). CON BECA GOBIERNO! ${becaGob[0]} 
            Admin antes($1700). CON BECA GOBIERNO! ${becaGob[1]} 
            Derecho antes($2100). CON BECA GOBIERNO! ${becaGob[2]} `
            
            alert(mensajeBecaGob);
        break;
    case "promedio":
        const  becaProm = colegiaturas.map ((item) =>
            item - item * .50);
            let mensajeBecaProm = `
            Diseño antes($2000). CON BECA POR PROMEDIO! ${becaProm[0]} 
            Admin antes($1700). CON BECA POR PROMEDIO! ${becaProm[1]} 
            Derecho antes($2100). CON BECA POR PROMEDIO! ${becaProm[2]} `
            
            alert(mensajeBecaProm);
        break;

    default:
        alert("Las becas se pueden adquirir en cualquier semestre asi que no te preocupes y da lo mejor de ti!")
        break;
}


//PARA USO INTERNO, COMPROBACION DE QUE LOS ALUMNOS ESTEN INTEGRADOS EN LOS GRUPOS
grupoDiseño.forEach(item => {
    console.log(item);
});

grupoAdmin.forEach(item => {
    console.log(item);
});
grupoDerecho.forEach(item => {
    console.log(item);
});




