var contenido = document.querySelector("#contenido");
var boton1 = document.querySelector("#boton1");
var ico1 = document.querySelector("#ico1");



    boton1.addEventListener("click", function(){
        contenido.classList.add("activarContenido");
        ico1.classList.add("ocultar")

    })

    boton2.addEventListener("click", function(){
        contenido.classList.remove("activarContenido");
        ico1.classList.remove("ocultar")

    })