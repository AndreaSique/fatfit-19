var cajaGeneral1 = document.querySelector("#cajaGeneral1");
var cajaGeneral2 = document.querySelector("#cajaGeneral2");
var boton = document.querySelector("#botonContinuar");

function caja1(){
    cajaGeneral1.classList.add("activar");
}
caja1();

    boton.addEventListener("click", function(){
        cajaGeneral1.classList.remove("activar");
        cajaGeneral2.classList.add("activar");
    })