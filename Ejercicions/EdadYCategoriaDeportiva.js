let edad = parseInt(prompt("ingresa tu edad"));
if (edad > 0 && edad < 12) {
    alert("infantil");
}
else if (edad >= 13 && edad <= 17) {
    alert("adolescente");
}
else if (edad >= 18 && edad <= 59) {
    alert("adulto");
}
else if (edad >= 60) {
    alert("adulto mayor");
}

//operador ternario

(edad >= 0 && edad < 12)? alert("infantil") :
(edad >= 13 && edad <= 17)? alert("adolescente") :
(edad >= 18 && edad <= 59)? alert("adulto") :
(edad >= 60)? alert("adulto mayor") :
alert("edad no válida");