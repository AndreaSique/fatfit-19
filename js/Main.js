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
        resultadoRespuesta.innerHTML =  '<img class="resultado-respuesta-img" src="img/imgPeso/bajopeso.svg">'+
                                        '<h3 class="resultado-imc">Bajo peso</h3>'

    }else if(formula > 18.5 & formula < 24.9){
        resultadoRespuesta.innerHTML =  '<img class="resultado-respuesta-img" src="img/imgPeso/pesonormal.svg">'+
                                        '<h3 class="resultado-imc">Peso normal</h3>'

    }else if(formula > 25 & formula < 29.9){
        resultadoRespuesta.innerHTML =  '<img class="resultado-respuesta-img" src="img/imgPeso/sobrepeso.svg">'+
                                        '<h3 class="resultado-imc">Sobrepeso</h3>'
    }else if(formula >= 30){
        resultadoRespuesta.innerHTML =  '<img class="resultado-respuesta-img" src="img/imgPeso/obesidad.svg">'+
                                        '<h3 class="resultado-imc">Obesidad</h3>'
    }
}
var boton = document.querySelector("#botonListo");
seccion1.addEventListener("submit", calcularIMC);    