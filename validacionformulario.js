(function(){
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('boto');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Debe ingresar un nombre");
            e.preventDefault();
        }
    };

    var validarApellido = function(e){
        if (formulario.apellido.value == 0){
            alert("Debe ingresar un apellido");
            e.preventDefault();
        }
    };

    var validarMail = function(e){
        if (formulario.mail.value == 0){
            alert("Debe ingresar una direccion de correo electronico");
            e.preventDefault();
        }
    };

    var validarConsulta = function(e){
        if (formulario.consultas.value == 0){
            alert("Debe ingresar una consulta");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarMail(e);
        validarConsulta(e);
    };
    formulario.addEventListener("submit", validar);
}())


