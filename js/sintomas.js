var caja_efectos1 = document.querySelector("#caja_opciones_efectos1");
var boton1 = document.querySelector("#boton1");



    boton1.addEventListener("click", function(){
        caja_efectos1.classList.add("cajaEfectos");
        caja_efectos1.innerHTML = 
                                 '<div class="caja-fondo"><img  src="img/imgSintomas/fiebre.svg"></div>'+ 
                                 '<p class="texto-efecto">Fiebre</p>'+
                                 '<button class="boton" id="boton"><img src="img/iconos/Path.svg"></button>'+
                                 '<p class="texto"> La temperatura media causada por la enfermedad del coronavirus es de 38 grados o más.</p>'
    })

    

