var seccion1 = document.querySelector("#primeraSeccion");
var seccion2 = document.querySelector("#segundaSeccion");


function calcularIMC(elEvento){
    elEvento.preventDefault();

    var peso = document.querySelector("#inputPeso").value;
    var altura = document.querySelector("#inputAltura").value;
    var formula = peso/(altura*altura);

    seccion1.classList.add("desactivar");
    seccion2.classList.add("activar");

    console.log(formula);

    if(formula < 18.5){
        resultadoRespuesta.innerHTML =  'que tienes un bajo peso'+
                                        '<br>'+
                                        '<img src="img/noticias/visual_obesidad-IMC.png" alt="">'

    }else if(formula > 18.5 & formula < 24.9){
        resultadoRespuesta.innerHTML = '<p class="respuesta"> que tienes un peso normal </p>'
    }else if(formula > 25 & formula < 29.9){
        resultadoRespuesta.innerHTML = '<p class="respuesta"> que tienes sobrepeso </p>'
    }else if(formula >= 30){
        resultadoRespuesta.innerHTML = '<p class="respuesta"> que tienes obesidad </p>'
    }
}

var boton = document.querySelector("#botonListo");
seccion1.addEventListener("submit", calcularIMC);




/* Section programacion */
/*if(formula < 18.5){
    cajarespuesta.innerHTML = '<p class="respuesta">tienes un bajo peso</p>'
}else if(formula > 18.5 & formula < 24.9){
    alert("normal");
    cajarespuesta.innerHTML = '<p class="respuesta">tienes un peso normal</p>'
}else if(formula > 25 & formula < 29.9){
    alert("sobrepeso");
    cajarespuesta.innerHTML = '<p class="respuesta">tienes sobrepeso</p>'
}else if(formula >= 30){
    alert("obesidad");
    cajarespuesta.innerHTML = '<p class="respuesta">tienes obesidad</p>'
    }

}
var boton = document.querySelector("#botonListo");
boton.addEventListener("submit", calcularIMC);*/


   
    