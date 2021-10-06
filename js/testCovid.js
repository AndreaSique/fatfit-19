var cajaGeneral1 = document.querySelector("#cajaGeneral1");
var cajaGeneral2 = document.querySelector("#cajaGeneral2");
var boton = document.querySelector("#botonContinuar");

/*****************************************************/
function caja1(){
    cajaGeneral1.classList.add("activar");
}
caja1();

    boton.addEventListener("click", function(elEvento){
        elEvento.preventDefault();
        cajaGeneral1.classList.remove("activar");
        cajaGeneral2.classList.add("activar");
    })
/******************************************************/

function calculador(){
    var contador = 0;

    if(document.getElementById('cbox1').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox2').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox3').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox4').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox5').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox6').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox7').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox8').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox9').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox10').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox11').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox12').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox13').checked){
        contador=contador+0.14;
    }

    if(document.getElementById('cbox14').checked){
        contador=contador+0.14;
    }

    console.log(contador);
}