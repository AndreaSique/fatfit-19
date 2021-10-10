var cajaGeneral1 = document.querySelector("#cajaGeneral1");
var cajaGeneral2 = document.querySelector("#cajaGeneral2");

/******************************************************/

function calculador(elEvento){
    elEvento.preventDefault();


    var contador = 0;
    var porcentaje = 7.142857143;

    cajaGeneral1.classList.add("desactivar")
    cajaGeneral2.classList.add("activar")


    if(document.getElementById('cbox1').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox2').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox3').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox4').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox5').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox6').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox7').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox8').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox9').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox10').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox11').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox12').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox13').checked){
        contador=contador+porcentaje;
    }

    if(document.getElementById('cbox14').checked){
        contador=contador+porcentaje;
    }

    var probabilidad25 = 30.0;
    var probabilidad50 = 40.0;
    var probabilidad75 = 79.0;
    var probabilidad100 = 80.0;

    if(contador == 0){
        caja_img_probabilidad.innerHTML = '<img class="resultCovid-img" src="img/Graficas/0probabilidad.png">'
        caja_texte_probabilidad.innerHTML = '<p class="probabilidad-respuesta">0% <br> Probabilidad</p>'

    }else if(contador <= probabilidad25){
        caja_img_probabilidad.innerHTML = '<img class="resultCovid-img" src="img/Graficas/grafica25.png">'
        caja_texte_probabilidad.innerHTML = '<p class="probabilidad-respuesta">' + contador.toFixed(2) + '%' +'<br> Probabilidad</p>'

    }else if(contador <= probabilidad50){
        caja_img_probabilidad.innerHTML = '<img class="resultCovid-img" src="img/Graficas/grafica35.png">'
        caja_texte_probabilidad.innerHTML = '<p class="probabilidad-respuesta">' + contador.toFixed(2) + '%' +'<br> Probabilidad</p>'
    
    }else if(contador <= probabilidad75){
        caja_img_probabilidad.innerHTML = '<img class="resultCovid-img" src="img/Graficas/grafica60.png">'
        caja_texte_probabilidad.innerHTML = '<p class="probabilidad-respuesta">' + contador.toFixed(2) + '%' +'<br> Probabilidad</p>'
    
    }else if(contador => probabilidad100){
        caja_img_probabilidad.innerHTML = '<img class="resultCovid-img" src="img/Graficas/grafica85.png">'
        caja_texte_probabilidad.innerHTML = '<p class="probabilidad-respuesta">' + contador.toFixed(2) + '%' +'<br> Probabilidad</p>'
    
    }
}

var boton = document.querySelector("#botonContinuar");
cajaGeneral1.addEventListener("submit", calculador);    
