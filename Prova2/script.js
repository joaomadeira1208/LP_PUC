function aplicarNegrito(id) {
    var elementosNegrito = document.querySelectorAll('.negrito');
        elementosNegrito.forEach(function(elemento) {
            elemento.classList.remove('negrito');
        });

    var elemento = document.getElementById(id);
    elemento.classList.add('negrito');
}