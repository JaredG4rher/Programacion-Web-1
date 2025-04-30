function sumar() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var result = parseFloat(n1) + parseFloat(n2);
    document.getElementById("r").innerHTML = result;
}

function restar() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var result = parseFloat(n1) - parseFloat(n2);
    document.getElementById("r").innerHTML = result;
}

function Multi() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var result = parseFloat(n1) * parseFloat(n2);
    document.getElementById("r").innerHTML = result;
}
function divi() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    // Convertir a número flotante
    var num1 = parseFloat(n1);
    var num2 = parseFloat(n2);

    // Validaciones para evitar NaN o división por cero
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("r").innerHTML = "Por favor ingresa números válidos.";
    } else if (num2 === 0) {
        document.getElementById("r").innerHTML = "No se puede dividir por cero.";
    } else {
        var result = num1 / num2;
        document.getElementById("r").innerHTML = result;
    }
}
