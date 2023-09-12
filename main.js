
//DA LA BIENVENIDA SOLO SI EL USUARIO DIO EN LA PESTAÑA DE RECORDARME EN EL FORM DE USUARIO

let usuarioStorage = JSON.parse(localStorage.getItem("datosUsuario"));
let sessionUsuarioStorage = JSON.parse(sessionStorage.getItem("datosUsuario"));

if (usuarioStorage) {
    let divSaludo = document.createElement("div");
    divSaludo.innerHTML = `<h1>Bienvenid@ ${usuarioStorage.nombre}</h1>`;
    contenedor.append(divSaludo);
} else if (sessionUsuarioStorage) {
    let divSaludo = document.createElement("div");
    divSaludo.innerHTML = `<h1>Bienvenid@ ${sessionUsuarioStorage.nombre}</h1>`;
    contenedor.append(divSaludo);
} else {
    saludo.innerHTML = "<h1>Bienvenid@, Aun no has iniciado sesion. Tambien pudes ver nuestras carreras</h1>";
}
//SUBIMOS A LOCAL STORAGE LAS CARRERAS
const carreras = [
    { id: 1, nombreCarrera: "Diseño", modalidad: "Escolarizado", semestres: 8, colegiatura: 1200 },
    { id: 2, nombreCarrera: "Arquitectura", modalidad: "Escolarizado", semestres: 10, colegiatura: 1300 },
    { id: 3, nombreCarrera: "Administración", modalidad: "Mixto", semestres: 6, colegiatura: 1800 },
    { id: 4, nombreCarrera: "Programación", modalidad: "En linea", semestres: 8, colegiatura: 2000 },
    { id: 5, nombreCarrera: "Derecho", modalidad: "Mixto", semestres: 10, colegiatura: 1500 },
];
localStorage.setItem("carreras", JSON.stringify(carreras));

//FUNCTION ESCOGER CARRERA


//PAGES
let navInicio = document.getElementById("inicio");
navInicio.addEventListener("mouseup", () => {
    contenedor.innerHTML = "";
    if (usuarioStorage) {
        saludo.innerHTML = `<h1>Bienvenid@ ${usuarioStorage.nombre}</h1>`;
    } else if (sessionUsuarioStorage) {
        saludo.innerHTML = `<h1>Bienvenid@ ${sessionUsuarioStorage.nombre}</h1>`;
    }
    else {
        saludo.innerHTML = "<h1>Bienvenid@, Aun no has iniciado sesion. Tambien pudes ver nuestras carreras</h1>";
    }
});

let navUsuario = document.getElementById("usuario");
navUsuario.addEventListener("mouseup", () => {

    saludo.innerHTML = "<h1>Inicia Sesion o Registrate</h1>";
    if (usuarioStorage || sessionUsuarioStorage) {
        contenedor.innerHTML = `Ya has Iniciado Sesion`
        let divBoton = document.createElement("div");
        divBoton.innerHTML = `<div>
    <button id="eliminar">ELIMINAR USUARIO</button>
    </div>`
        contenedor.append(divBoton)
        let eliminar = document.getElementById("eliminar");
        eliminar.addEventListener("click", () => {
            localStorage.removeItem("datosUsuario");//NO QUIERO QUE ME BORRE TODO POR ESO SOLO USO EL REMOVE ITEM, Y NO CLEAR
            sessionStorage.removeItem("datosUsuario");
            location.reload();
        });
    }
    else {
        //FORM USUARIO HTML
        contenedor.innerHTML = "";
        saludo.innerHTML = "<h1>Inicia Sesion o Registrate</h1>";
        let div = document.createElement("div");
        div.innerHTML = `
        <form id="formulario">
        <label for = "formUsuario">Escribe tu nombre de usuario para iniciar sesion</label>
        <input type="text" id="formUsuario" placeholder="Nombre">
        <label for = "formUsuario">Correo</label>
        <input type="text" id="formCorreo" placeholder="example@hotmail.com">
        <label for = "formContrasena">Contraseña</label>
        <input type="text" id="formContrasena" placeholder="Password">
        <input type="submit" value = "Enviar">
        <input type="checkbox" id="formCheckbox">
        <label for = "formCheckbox"> Recordarme </label>
            
        </form>`;
        contenedor.append(div);

        //FORM USUARIO JSON
        let formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            let inputs = e.target.children;
            //DEPENDIENDO DE LA RESPUESTA SUBIREMOS INFORMACION A SESSION O A LOCAL STORAGE. TAMBIEN DETERMINA SI ESTA MAL ESCRITO
            if (inputs[1].value.includes("@") || !inputs[3].value.includes("@")) {
                inputs[1].value = "";
                inputs[3].value = "";
                inputs[5].value = "";

            } else if (inputs[7].checked === true) {
                const datosUsuario = { nombre: inputs[1].value, correo: inputs[3].value, contrasena: inputs[5].value };
                localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
                location.reload();
            } else {
                const datosUsuario = { nombre: inputs[1].value, correo: inputs[3].value, contrasena: inputs[5].value };
                sessionStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
                location.reload();
            };
        });

    
    }
});
//BTN ELIMINAR

let navCarreras = document.getElementById("carreras");


const renderizarCarreras = (array) => {
    contenedor.innerHTML = `
    <label for="modalidadSelect">Elige una modaldad:</label>
    <select name="modalidadSelect" id="modalidadSelect">
      <option selected value="0">Seleccione Uno …</option>
      <option value="Escolarizado">Escolarizado</option>
      <option value="Mixto">Mixto</option>
      <option value="En linea">En linea</option>
      <option value="0">Todos</option>
    </select>
  `;
    array = array || JSON.parse(localStorage.getItem("carreras"));
    array.forEach((carrera) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
            <div class="card">
             <h3 class="card-header">${carrera.nombreCarrera}</h3>
              <div class="card-body">
                 <h5 class="card-title">Modalidad: ${carrera.modalidad}</h5>
                 <p class="card-text">Cantidad de semestres a cursar: ${carrera.semestres}.</p>
                 <p class="card-text">Colegiatura: $${carrera.colegiatura}.</p>
                 <button class="btn btn-primary" id="btnEscoger${carrera.id}">Escoger</button>
              </div>
            </div> 
        </div>     
`;
        contenedor.appendChild(div);

        const btnEscoger = document.getElementById(`btnEscoger${carrera.id}`);
        btnEscoger.addEventListener("click", () => {
            const { modalidad, nombre, colegiatura } = carrera
            localStorage.setItem("carreraSelect", JSON.stringify(carrera))
        });

    });

    const selectorModalidad = document.getElementById("modalidadSelect")
    selectorModalidad.onchange = (evt) => {
        const modalidadSeleccionada = evt.target.value
        if (modalidadSeleccionada === "0") {
            renderizarCarreras(carreras);
        } else {
            renderizarCarreras(carreras.filter(prod => prod.modalidad === modalidadSeleccionada))
        }
    };

};

navCarreras.addEventListener("mouseup", () => {
    saludo.innerHTML = "<h1>Bienvenid@ las carreras </h1>";
    renderizarCarreras();


});

let navPerfil = document.getElementById("perfil");
navPerfil.addEventListener("mouseup", () => {
    saludo.innerHTML = "<h1>Bienvenido a tu perfil </h1>"
    contenedor.innerHTML = ""
    if (usuarioStorage || sessionUsuarioStorage) {
        let tuCarrera = JSON.parse(localStorage.getItem("carreraSelect"));
        let div = document.createElement("div");
        let tuPerfil = { ...(usuarioStorage || sessionUsuarioStorage), ...tuCarrera };
        if (tuCarrera) {
            div.innerHTML = `
        <div class="card">
        <div class="card">
             <h2 class="card-header">${tuPerfil.nombre}</h2>
             <h2 class="card-header">Estas inscrito en la carrera de:</h2>
              <div class="card-body">
            <div class="card">
             <h3 class="card-header">${tuPerfil.nombreCarrera}</h3>
              <div class="card-body">
                 <h5 class="card-title">Modalidad: ${tuPerfil.modalidad}</h5>
                 <p class="card-text">Colegiatura: $${tuPerfil.colegiatura}.</p>
              </div>
            </div> 
        </div>     
`
            contenedor.append(div);
        } else {
            div.innerHTML = `
        
        <div class="card">
             <h2 class="card-header">${tuPerfil.nombre}</h2>
              <div class="card-body">
            <h3>Escoge una carrera Porfavor</h3>
            </div>
            </div>`
            contenedor.append(div);
        }
    } else {
        saludo.innerHTML = "<h1>Podras ver tu perfil cuando inicies sesion</h1>";
    };
});



