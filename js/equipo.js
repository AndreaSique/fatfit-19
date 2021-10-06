var btn_biologicas = document.querySelector("#boton_biologicas");
var btn_diseño = document.querySelector("#boton_diseño");
var btn_progra = document.querySelector("#boton_progra");
var caja_biologicas = document.querySelector("#caja_biologicas");
var caja_diseño = document.querySelector("#caja_diseño");
var caja_progra = document.querySelector("#caja_programadoras");

function index(){
    caja_biologicas.classList.add("activar")
}

index();

    btn_biologicas.addEventListener("click", function(){
        caja_biologicas.classList.add("activar");
        caja_diseño.classList.remove("activar");
        caja_progra.classList.remove("activar");
    });

    btn_diseño.addEventListener("click", function(){
        caja_diseño.classList.add("activar");
        caja_biologicas.classList.remove("activar");
        caja_progra.classList.remove("activar");
    });

    btn_progra.addEventListener("click", function(){
        caja_progra.classList.add("activar");
        caja_biologicas.classList.remove("activar");
        caja_diseño.classList.remove("activar");
    });