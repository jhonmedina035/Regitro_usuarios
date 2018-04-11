

function validacion() {
    var nombre,apellidos,identificacion,edad,profesion,estadosCivil,genero,exprecionNumeros,exprecionTexto;
    exprecionTexto = /^([a-z A-Z ñáéíóú]{2,60})$/;
    exprecionNumeros= /[0-9]$/ ;
  
    identificacion= document.getElementById("txtIdentificacion").value;
    nombre= document.getElementById("txtNombre").value;
    apellidos= document.getElementById("txtApellidos").value;
    edad= document.getElementById("txtEdad").value;
    profesion= document.getElementById("txtProfesion").value;
    genero= document.getElementById("opcionGenero").value;
    estadosCivil= document.getElementById("opcionEstadoCivil").value;

if (identificacion.length > 12){
    alert("Identificación inválida (Supera la longitud permitida)");
    return false;
}
else if(!exprecionTexto.test(nombre)){
    alert("El nombre es inválido (Carácter no permitido)");
    document.forms.nombre.focus();
    return false;
}
else if(!exprecionTexto.test(apellidos)){
    alert("Los apellido son inválidos (Carácter no permitido)");
    return false;
}
else if(!exprecionTexto.test(profesion)){
    alert("La profesión es inválida (Carácter no permitido)");
    return false;
}
else if (edad.length > 3){
    alert("La edad es inválida (Supera la longitud permitida)");
    return false;
}
else{
    alert ("has sido registrado correctamente "+nombre+" "+apellidos);
}
}
