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
                                        '<img src="img/imgPeso/bajopeso.png">'

    }else if(formula > 18.5 & formula < 24.9){
        resultadoRespuesta.innerHTML =  'que tienes un peso normal'+
                                        '<br>'+
                                        '<img src="img/imgPeso/pesonormal.png">'

    }else if(formula > 25 & formula < 29.9){
        resultadoRespuesta.innerHTML =  'que tienes sobrepeso'+
                                        '<br>'+
                                        '<img src="img/imgPeso/sobrepeso.png">'
    }else if(formula >= 30){
        resultadoRespuesta.innerHTML =  'que tienes obesidad'+
                                        '<br>'+
                                        '<img src="img/imgPeso/obesidad.png">'
    }
}

var boton = document.querySelector("#botonListo");
seccion1.addEventListener("submit", calcularIMC);    