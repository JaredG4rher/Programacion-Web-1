function Enviar() {

    var nom = document.getElementById("nombre").value;
    var ap = document.getElementById("ap").value;
    var am = document.getElementById("am").value;
    var usu = document.getElementById("user").value;
    var cal = document.getElementById("ch").value;
    var num = document.getElementById("numext").value;
    var col = document.getElementById("colonia").value;
    var cp = document.getElementById("cp").value;
    
    var resultado = document.getElementById("resultado");
    resultado.innerHTML =
        "<strong>Datos enviados:</strong><br><br>" +
        "Tu nombre es: " + nom + "<br>" +
        "Tu apellido paterno es: " + ap + "<br>" +
        "Tu apellido materno es: " + am + "<br>" +
        "Tu correo es: " + usu + "<br>" +
        "Tu calle es: " + cal + "<br>" +
        "Tu número exterior es: " + num + "<br>" +
        "Tu colonia es: " + col + "<br>" +
        "Tu código postal es: " + cp;
}
