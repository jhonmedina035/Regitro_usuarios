
function validarNumeros(elementoEnValidacion){
    var expresion = /^[0-9]+$/;
    if (expresion.test(elementoEnValidacion.value)){
       valor = true;
    }
    else{
        valor = false;
    }
}
function validarAlfabetico(elementoEnValidacion){
    var expresion = /^([a-z A-Z ñáéíóú]{1,50})$/;
    if(expresion.test(elementoEnValidacion.value)){
        valor = true;
    }
    else{
        valor = false;
    }
}
function validarSubmit(){  
    var profesion =document.getElementById("txtProfesion");
    var identificacion = document.getElementById("txtIdentificacion");
    var nombre = document.getElementById("txtNombre");
    var apellidos = document.getElementById("txtApellidos");
    var edad = document.getElementById("txtEdad");
    
    if(identificacion.value ==""|| nombre.value ==""|| apellidos.value ==""|| edad.value ==""|| profesion.value ==""){ 
        alert ("Todos los campos deben estar diligenciados para continuar");
        return false;
    }
    validarNumeros(identificacion);
   
    if(valor == false){
        alert("El campo identificación esta incorrecto inténtalo nuevamente ");
        document.getElementById("groupIdentificacion").className = "form-group has-error";
        identificacion.focus();
        return false;
    }else{
        document.getElementById("groupIdentificacion").className = "form-group has-success";
    }
    validarAlfabetico(nombre);

    if(valor == false){
        alert("El campo nombre esta incorrecto inténtalo nuevamente");
        document.getElementById("groupNombre").className = "form-group has-error";
        nombre.focus();
        return false;
    }else{
        document.getElementById("groupNombre").className = "form-group has-success";
    }
    validarAlfabetico(apellidos);

    if(valor == false){
        alert("El campo apellidos esta incorrecto inténtalo nuevamente");
        document.getElementById("groupApellidos").className = "form-group has-error";
        apellidos.focus();
        return false;
    }else{
        document.getElementById("groupApellidos").className = "form-group has-success";
    }
    validarNumeros(edad);

    if(valor == false){
        alert("El campo edad esta incorrecto inténtalo nuevamente");
        document.getElementById("groupEdad").className = "form-group has-error";
        edad.focus();
        return false;
    }else{
        document.getElementById("groupEdad").className = "form-group has-success";
    }
    valoHtml = profesion;
    validarAlfabetico(profesion);
    if(valor == false){
        alert("El campo profesión esta incorrecto inténtalo nuevamente");
        document.getElementById("groupProfesion").className = "form-group has-error";
        profesion.focus();
        return false;     
   }
    alert("Felicidades "+ nombre.value +" "+apellidos.value+ " Has sido registrado con éxito");
}
