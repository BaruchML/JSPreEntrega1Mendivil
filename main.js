
//DA LA BIENVENIDA SOLO SI EL USUARIO DIO EN LA PESTAÑA DE RECORDARME EN EL FORM DE USUARIO

let usuarioStorage = JSON.parse(localStorage.getItem("datosUsuario"));
if (usuarioStorage) {
  usuarioStorage.forEach((item) => { 
  let divSaludo = document.createElement("div");
  divSaludo.innerHTML = `<h1>Bienvenid@ nuevamente ${item.nombre}</h1>`;
  contenedor.append(divSaludo);
  });
}else {saludo.innerHTML = "<h1>Bienvenid@, Aun no has iniciado sesion. Ve a usuario / usuario</h1>";
contenedor.innerHTML = `<h2>Los elementos que tienen puntos para calificar estan en</h2>
<ul>
    <li>El cambio del contenido en pantalla sin usar links</li>
    <li>La pagina de Usuario / Usuario </li>
    <li>La pagina de Menu / Carreras </li>
</ul>
<p> las demas pestañas estan en construccion :)</p>`;}
//BTN ELIMINAR
let eliminar = document.getElementById("eliminar");
//SUBIMOS A LOCAL STORAGE LOS GRUPOS
const carreras = [
    { id: 1, nombre: "Diseño", modalidad: "Escolarizado", semestres: 8,colegiatura: 1200 },
    { id: 2, nombre: "Arquitectura", modalidad: "Escolarizado", semestres: 10,colegiatura: 1300 },
    { id: 3, nombre: "Administración", modalidad: "Mixto", semestres: 6 ,colegiatura: 1800},
    { id: 4, nombre: "Programación", modalidad: "En linea", semestres: 8 ,colegiatura: 2000},
    { id: 5, nombre: "Derecho", modalidad: "Mixto", semestres: 10,colegiatura: 1500 },
];
localStorage.setItem("carreras", JSON.stringify(carreras));

//PAGES
let navInicio = document.getElementById("inicio");
navInicio.addEventListener("mouseup", () => {
    saludo.innerHTML = "<h1>Bienvenid@ a Inicio, ve a usuario / usuario para Iniciar Sesion </h1>";
    contenedor.innerHTML = `<h2>Los elementos que tienen puntos para calificar estan en</h2>
    <ul>
        <li>El cambio del contenido en pantalla sin usar links</li>
        <li>La pagina de Usuario / Usuario </li>
        <li>La pagina de Menu / Carreras </li>
    </ul>
    <p> las demas pestañas estan en construccion :)</p>`
    
});

let navUsuario = document.getElementById("usuario");
navUsuario.addEventListener("mouseup", () => {
    //FORM USUARIO HTML
    contenedor.innerHTML = "";
    saludo.innerHTML = "<h1>Bienvenid@ a usuario </h1>";
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
        <div>-------</div>
        <div>
        <button id="eliminar">ELIMINAR USUARIO</button>
        </div>
        
        
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
                
                alert("Tu nombre o el correo estan mal escritos");

            } else if (inputs[7].checked === true) {
                alert(`Bienvenid@ por primera vez ${inputs[1].value}`);
                const datosUsuario = [{ nombre: inputs[1].value, correo: inputs[3].value, contrasena: inputs[5].value }];
                localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
            } else {
                alert(`Bienvenid@ por unica vez ${inputs[1].value}`);
                const datosUsuario = [{ nombre: inputs[1].value, correo: inputs[3].value, contrasena: inputs[5].value }];
                sessionStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));          

            };
        //SÍ ELIMINA, PERO EL FORM VUELVE A DAR EL SUMBIT JUSTO DESPUES Y ENTONCES SE CARGA DE NUEVO LA INFO. AYUDA
            let eliminar = document.getElementById("eliminar");
            eliminar.addEventListener("click", () => {
            localStorage.removeItem("datosUsuario");//NO QUIERO QUE ME BORRE TODO POR ESO SOLO USO EL REMOVE ITEM, Y NO CLEAR
            sessionStorage.removeItem("datosUsuario");
            location.reload();
            alert("Usuario eliminado con exito");});

        });
    });
let navCarreras = document.getElementById("carreras");
const renderizarCarreras = ()=>{
    //NO HE PIDIDO HACER QUE FUNCIONE ESTE SELECT
    contenedor.innerHTML = `<label
    >Elija una modaldad:
    <select class="nieve" name="nieve" id="tipoModalidad">
      <option selected value="0">Seleccione Uno …</option>
      <option value="Escolarizado">Escolarizado</option>
      <option value="Mixto">Mixto</option>
      <option value="En linea">En linea</option>
    </select>
  </label>`;

    saludo.innerHTML = "<h1>Bienvenid@ las carreras </h1>";

    let carrerasDisponibles = JSON.parse(localStorage.getItem("carreras"));
   
    carrerasDisponibles.forEach((carrera) => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="card">
            <div class="card">
             <h3 class="card-header">${carrera.nombre}</h3>
              <div class="card-body">
                 <h5 class="card-title">Modalidad: ${carrera.modalidad}</h5>
                 <p class="card-text">Cantidad de semestres a cursar: ${carrera.semestres}.</p>
                 <p class="card-text">Colegiatura: ${carrera.colegiatura}.</p>
                 <a href="#" class="btn btn-primary">Mirar más</a> 
                 <a href="#" class="btn btn-primary id="btnEscoger">Escoger</a>
              </div>
            </div>      
`
        contenedor.append(div);    
    });
};

navCarreras.addEventListener("mouseup", () => {
    renderizarCarreras();
     
});

/*QUIERO RENDERIZAR CON EL SELECT DE ARRIBA PARA FILTRAR LAS CARDS DE LAS CARRERAS POR MODALIDAD PERO NO LO HE CONSEGUIDO

const selectorModalidad = document.getElementById("tipoModalidad")
selectorModalidad.onchange = (evt)=>{
    const modalidadSeleccionada =  evt.target.value
    if(modalidadSeleccionada === "0"){
        renderizarCarreras(carreras);
    } else {
        renderizarCarreras(carreras.filter(prod=>prod.type === modalidadSeleccionada))
    }
}*/



let navPerfil = document.getElementById("perfil");
navPerfil.addEventListener("mouseup", () => {
    saludo.innerHTML = "<h1>Bienvenid@ a tu perfil </h1>";
    contenedor.innerHTML = `
    <a href="#" class="btn btn-primary id="tuGrupo">Tu Grupo</a>
    </div>`
    //EN PERFIL QUIERO TRAER INFORMACION DE CUANDO EL USUARIO INICIE SESION ("usuarioDatos") E INFORMACION DE LA CARRERA QUE ELIGA
    //EN LAS CARDS DE LAS CARRERAS VIENE EL BTN "ESCOGER". CON ESO PUEDO TRAER LA INFO DE ("carreras")
    //UNIENDO SOLO LOS DATOS QUE YO NECESITO DE AMBOS ARRAYS QUIERO CREAR TU PERFIL. ESE PERFIL METERLO A UN GRUPO.

    //RESUMIENDO:
    //QUIERO SACAR EL VALOR DE UN OBJETO QUE ESTE EN UN ARRAY QUE ESTE EN LOCALSTORAGE. PARA HACER UN OBJETO NUEVO.
    //ME PUEDE ORIENTAR DE COMO DEBERIA HACERLO PORFAVOR.
});

//PESTAÑAS EN CONSTRUCCION:
let navCampus = document.getElementById("campus");
navCampus.addEventListener("mouseup", () => {
    saludo.innerHTML = "<h1>Bienvenid@ a campus </h1>";
    contenedor.innerHTML = ""
});

let navNoticias = document.getElementById("noticias");
navNoticias.addEventListener("mouseup", () => {
    saludo.innerHTML = "<h1>Bienvenid@ a noticias </h1>";
    contenedor.innerHTML = ""
});
let navNosotros = document.getElementById("nosotros");
navNosotros.addEventListener("mouseup", () => {
    saludo.innerHTML = "<h1>Bienvenid@ a nosotros </h1>";
    contenedor.innerHTML = ""
});

