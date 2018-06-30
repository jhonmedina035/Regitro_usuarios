
function validarNumeros(valoHtml,itm){
    var expresion = /^[0-9]+$/;
    if (expresion.test(valoHtml.value)){
       valoHtml.style.borderColor="#80FF00";
       valor = true;
    }
    else{
        valoHtml.style.borderColor="#FF0000";
        valor = false;
    }
}
function validarAlfabetico(valoHtml,itm){
    var expresion = /^([ñ a-z A-Z ñáéíóú]{2,60})$/;
    if(expresion.test(valoHtml.value)){
        valoHtml.style.borderColor="#80FF00";
        valor = true;
    }
    else{
        valoHtml.style.borderColor="#FF0000";
        valor = false;
          
    }
}
function validarSubmit(){  
    var profesion =document.getElementById("txtProfesion");
    var identificacion = document.getElementById("txtIdentificacion");
    var nombre = document.getElementById("txtNombre");
    var apellidos = document.getElementById("txtApellidos");
    var edad = document.getElementById("txtEdad");
    var itm = 0;
    if(identificacion.value ===""|| nombre.value===""|| apellidos.value===""|| edad.value===""|| profesion.value ==="" ){ 
        alert ("Todos los campos deven estar diligenciados para continuar")
        return false;
    }
    valoHtml= identificacion
    validarNumeros(valoHtml,itm);
   
    if(valor == false){
        alert("El campo identificación esta incorrecto inténtalo nuevamente");
        itm = itm + 1;
        identificacion.focus();
        return false;
    }
    valoHtml = nombre;
    validarAlfabetico(valoHtml,itm);

    if(valor == false){
        alert("El campo nombre esta incorrecto inténtalo nuevamente");
        itm = itm + 1;
        nombre.focus();
        return false;
    }
    valoHtml = apellidos;
    validarAlfabetico(valoHtml,itm);

    if(valor == false){
        alert("El campo apellidos esta incorrecto inténtalo nuevamente");
        itm = itm + 1;
        apellidos.focus();
        return false;
    }
    valoHtml = edad ;
    validarNumeros(valoHtml,itm);

    if(valor == false){
        alert("El campo edad esta incorrecto inténtalo nuevamente");
        itm = itm + 1;
        edad.focus();
        return false;
    }
    valoHtml = profesion;
    validarAlfabetico(valoHtml,itm);
    if(valor == false){
        alert("El campo profesión esta incorrecto inténtalo nuevamente");
        itm = itm + 1;
        profesion.focus();
        return false;
    }
    if(itm == 0){
        alert("Felicidades "+ nombre.value +" "+apellidos.value+ " has sido registado con exitoso");
    }
}