var seleccionoBorde = false;
function desafio_uno() {
    var desafio1 = document.querySelector("#desafio_uno");
    if (seleccionoBorde == true) {
        seleccionoBorde = false;
        desafio1.style.borderWidth = "0px";
    } else {
        seleccionoBorde = true;
        desafio1.style.borderWidth = "10px";
    }
}

function desafio_dos() {
    var imagenUno = Number.parseFloat(document.querySelector("#imagenUno").value);;
    var imagenDos = Number.parseFloat(document.querySelector("#imagenDos").value);
    var imagenTres = Number.parseFloat(document.querySelector("#imagenTres").value);

    var total = imagenUno + imagenDos + imagenTres;
    if (total <= 10) {
        document.querySelector("#textoInformativo").innerHTML = "Has seleccionado " + total + " stikers";
    } else {
        document.querySelector("#textoInformativo").innerHTML = "Has ingresado demasiados stikers";
    }
}

function desafio_tres() {
    var digitoUno = document.querySelector("#digitoUno").value;
    var digitoDos = document.querySelector("#digitoDos").value;
    var digitoTres = document.querySelector("#digitoTres").value;

    var contrasenia = digitoUno + digitoDos + digitoTres;
    if (contrasenia=="911") {
        document.querySelector("#estadoContraseña").innerHTML = "Password 1 Correcto";
    } else if(contrasenia=="714"){
        document.querySelector("#estadoContraseña").innerHTML = "Password 2 Correcto";
    }else{
        document.querySelector("#estadoContraseña").innerHTML = "Password incorrecto";

    }
}
