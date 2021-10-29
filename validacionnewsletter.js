function newsl(){
    var formula = document.getElementsByName('newsletter')[0],
        elements = newsletter.elements,
        button = document.getElementById('boton');

    var validarName = function(g){
        if (newsletter.name.value == 0){
            alert("Debe ingresar un nombre");
            g.preventDefault();
        }
    };

    var validarSurname = function(g){
        if (newsletter.surname.value == 0){
            alert("Debe ingresar un apellido");
            g.preventDefault();
        }
    };

    var validarEEMail = function(g){
        if (newsletter.eemail.value == 0){
            alert("Debe ingresar una direccion de correo electronico");
            g.preventDefault();
        }
    };

    var validarCCheckbox = function(g){
        if (newsletter.terminos.checked == false){
            alert("Acepta los términos y condiciones");
            g.preventDefault();
        }
    };

    var valida = function(g){
        validarName(g);
        validarSurname(g);
        validarEEMail(g);
        validarCCheckbox(g);
    };
    formula.addEventListener("submit", valida);
}