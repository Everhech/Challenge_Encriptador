var vocales = ["a", "e", "i", "o", "u"];
var vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];

var botonEncriptar = document.querySelector(".button-encriptar");
var botonDesencriptar = document.querySelector(".button-desencriptar");
var botonCopiar = document.querySelector(".button-copiar");
var input = document.querySelector("textarea");
input.focus();
oninput = "this.value = this.value.replace(/[^a-zA-Z0-9]/,'')";

var atrLetras = [];
function encriptador() {
    var atrMensaje = input.value;
    atrLetras = atrMensaje.split("");
    if (atrLetras == "[A-Za-z0-9]{1,15}") {
        alert("No");
    } else {
        for (var i = 0; i <= atrLetras.length; i++) {
            if (atrLetras[i] == vocales[0]) {
                atrLetras[i] = atrLetras[i].replace(/a/, vocalesEncriptadas[0]);
            } else if (atrLetras[i] == vocales[1]) {
                atrLetras[i] = atrLetras[i].replace(/e/, vocalesEncriptadas[1]);
            } else if (atrLetras[i] == vocales[2]) {
                atrLetras[i] = atrLetras[i].replace(/i/, vocalesEncriptadas[2]);
            } else if (atrLetras[i] == vocales[3]) {
                atrLetras[i] = atrLetras[i].replace(/o/, vocalesEncriptadas[3]);
            } else if (atrLetras[i] == vocales[4]) {
                atrLetras[i] = atrLetras[i].replace(/u/, vocalesEncriptadas[4]);
            }
        }
        atrMensaje = "";
        for (var i = 0; i < atrLetras.length; i++) {
            atrMensaje += atrLetras[i];
        }
        document.getElementById("showmensaje").style.display = "show";
        document.getElementById("showmensaje").style.display = "inherit";
        document.querySelector(".show-mensaje").innerHTML = atrMensaje;
        document.getElementById("button-copiar").style.display = "show";
        document.getElementById("button-copiar").style.display = "inherit";
    }
}

function desencriptador() {
    var atrMensaje = input.value;
    for (var i = 0; i < (atrMensaje.length / 2); i++) {
        atrMensaje = atrMensaje.replace(/ai/, vocales[0]);
        atrMensaje = atrMensaje.replace(/enter/, vocales[1]);
        atrMensaje = atrMensaje.replace(/imes/, vocales[2]);
        atrMensaje = atrMensaje.replace(/ober/, vocales[3]);
        atrMensaje = atrMensaje.replace(/ufat/, vocales[4]);
    }
    document.getElementById("showmensaje").style.display = "show";
    document.getElementById("showmensaje").style.display = "inherit";
    document.querySelector(".show-mensaje").innerHTML = atrMensaje;
    document.getElementById("button-copiar").style.display = "show";
    document.getElementById("button-copiar").style.display = "inherit";
}

function copiarMensaje(mensaje) {
    var mensaje = document.querySelector(".show-mensaje");
    mensaje.select();
    document.execCommand("copy");
    document.querySelector(".show-mensaje").innerHTML = "";
}

botonEncriptar.onclick = encriptador;
botonDesencriptar.onclick = desencriptador;
botonCopiar.onclick = copiarMensaje;