var recomendaciones = document.querySelector("#seccion-recomendaciones");
var ejercicios = document.querySelector("#seccion-ejercicios");
var botonAlimentacion = document.querySelector("#boton_alimentacion");
var botonEjercicios = document.querySelector("#boton_ejercicios");

function index(){
    recomendaciones.classList.add("activar")
}

index();

    botonAlimentacion.addEventListener("click", function(){
        recomendaciones.classList.add("activar");
        ejercicios.classList.remove("activar");
    });

    botonEjercicios.addEventListener("click", function(){
        ejercicios.classList.add("activar");
        recomendaciones.classList.remove("activar");
    })
