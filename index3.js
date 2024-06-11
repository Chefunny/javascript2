function Page1() {
    window.location.href = './index.html';
}

function Page2() {
    window.location.href = './index2.html';
}

// Generar opciones para los select
function generarOpciones() {
    for (let i = 1; i <= 9; i++) {
        let option = `<option value="${i}">${i}</option>`;
        document.getElementById('digit1').innerHTML += option;
        document.getElementById('digit2').innerHTML += option;
        document.getElementById('digit3').innerHTML += option;
    }
}

// Llamar a la función para generar opciones
generarOpciones();

// Verificar el password ingresado
function verificarPassword() {
    let digit1 = document.getElementById('digit1').value;
    let digit2 = document.getElementById('digit2').value;
    let digit3 = document.getElementById('digit3').value;

    let password = digit1 + digit2 + digit3;

    let resultado = document.getElementById('resultado');
    if (password === '911') {
        resultado.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultado.textContent = 'Password 2 correcto';
    } else {
        resultado.textContent = 'Password incorrecto';
    }
}