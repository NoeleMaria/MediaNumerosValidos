function mediaBotaoJS() {
    let numero1 = 85;
    let numero2 = 52;

    document.getElementById('numero-JS1').innerHTML = `<strong>Número 1:</strong> ${numero1}`;
    document.getElementById('numero-JS2').innerHTML = `<strong>Número 2:</strong> ${numero2}`;
    let resultado = document.getElementById('validacao-js');

    calcularMedia(numero1, numero2, resultado);
}

function mediaBotaoUsuario() {
    let numero1 = document.getElementById('numero-usuario1').value;
    let numero2 = document.getElementById('numero-usuario2').value;

    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(numero1);
    console.log(numero2);
    console.log(soma);
    console.log(soma/2);

    let resultado = document.getElementById('validacao-usuario');

    calcularMedia(numero1, numero2, resultado);    
}

// function calcularMedia(numero1, numero2, resultado) {
//     let soma = parseInt(numero1) + parseInt(numero2);
//     let media = soma / 2;

//     if(isNaN(numero1)) {
//         resultado.innerHTML = `${numero1} não é um número válido. Por favor, insira um número.`;
//     } else if (isNaN(numero2)) {
//         resultado.innerHTML = `${numero2} não é um número válido. Por favor, insira um número.`;
//     } else if (isNaN(numero1) && isNaN(numero2)) {
//         resultado.innerHTML = `${numero1} e ${numero2} não são números válidos. Por favor, insira os números.`;
//     } else {
//         resultado.innerHTML = `A média de ${numero1} e ${numero2} é ${media}.`;
//     }
// }

function calcularMedia(numero1, numero2, resultado) {
    let soma = parseInt(numero1) + parseInt(numero2);
    let media = soma / 2;

    if (isNaN(numero1) && isNaN(numero2)) {
        resultado.innerHTML = `${numero1} e ${numero2} não são números válidos. Por favor, insira os números.`;
    } else if (isNaN(numero1)) {
        resultado.innerHTML = `${numero1} não é um número válido. Por favor, insira um número.`;
    } else if (isNaN(numero2)) {
        resultado.innerHTML = `${numero2} não é um número válido. Por favor, insira um número.`;
    } else {
        resultado.innerHTML = `A média de ${numero1} e ${numero2} é ${media}.`;
    }
}