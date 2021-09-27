var peso = document.querySelector("#inputPeso").value;
var altura = document.querySelector("#inputAltura").value;
var boton = document.querySelector("#botonListo");
var seccion1 = document.getElementById('primeraSeccion');
var seccion2 = document.getElementById('segundaSeccion');
var formula = peso/(altura*altura);

function index(){
    seccion1.classList.add("activar");
}
index();

        boton.addEventListener("click", function(){
        seccion2.classList.add("activar");
        seccion1.classList.remove("activar");


function calcularIMC(elEvento){
    elEvento.preventDefault()

    if(formula < 18.5){
        resultadoRespuesta.innerHTML = '<p class="respuesta"> que tienes un bajo peso </p>'
    }else if(formula > 18.5 & formula < 24.9){
        resultadoRespuesta.innerHTML = '<p class="respuesta"> que tienes un peso normal </p>'
    }else if(formula > 25 & formula < 29.9){
        resultadoRespuesta.innerHTML = '<p class="respuesta"> que tienes sobrepeso </p>'
    }else if(formula >= 30){
        resultadoRespuesta.innerHTML = '<p class="respuesta"> que tienes obesidad </p>'
    }
}

boton.addEventListener("submit", calcularIMC);

})