// Ejercicio 1
const activarAlert = () => alert('Un mensaje');

// Ejercicio 2
const imprimirMensaje = () => document.write('<h3>Hello, world.</h3>');

// Ejercicio 3
const sumarTresyCinco = () => alert(3+5);

// Ejercicio 4
const pedirNombre = () => {
    let usuario = prompt('Escribí tu nombre:');
    alert(`Hola, ${usuario}. Ponete las pilas!`);
};

// Ejercicio 5
const sumarNumeros = () => {
    let numA = parseInt(prompt('Ingrese primer número a sumar:'));
    let numB = parseInt(prompt('Ingrese segundo número a sumar:'));

    let resultado = numA + numB;

    alert(`La suma de ${numA} y ${numB} es: ${resultado}`);
};

// Ejercicio 6
const comparar = () =>{
    let numA = parseInt(prompt('Ingrese primer número a comparar:'));
    let numB = parseInt(prompt('Ingrese segundo número a comparar:'));

    if(numA>numB) alert(`${numA} es mayor que ${numB}`);
    else alert(`${numB} es mayor que ${numA}`);
}

// Ejercicio 7
const compararTres = () =>{
    let mayor = document.getElementById('mayorNumeroIngresado');

    let arrPrimitivo = [];

    for(let i=0;i<3;i++){
        arrPrimitivo.push(parseInt(prompt('Ingrese un número...')))
    }

    if(arrPrimitivo[0] > arrPrimitivo[1]){
        if(arrPrimitivo[0] > arrPrimitivo[2]){
            mayor.innerHTML = `${arrPrimitivo[0]} es el valor más alto.`;
        }else mayor.innerHTML = `${arrPrimitivo[2]} es el valor más alto.`;
    } else if(arrPrimitivo[1] > arrPrimitivo[2]){
        mayor.innerHTML = `${arrPrimitivo[1]} es el valor más alto.`
    } else mayor.innerHTML = `${arrPrimitivo[2]} es el valor más alto.`
};

// Ejercicio 8
const divisibleEnDos = () =>{
    let divi = parseInt(prompt('Ingrese un número...'));

    if(divi%2 == 0) alert(`El número ${divi}, es divisible por 2.`);
    else alert(`El número ${divi}, no es divisible por 2.`);
}

// Ejercicio 9
const buscarVocales = () =>{
    let vocalesContenidas = document.getElementById('vocalesContenidas')
    let frase = prompt('Escribí una frase cualquiera...').toLowerCase();
    let vocales = [];

    for(let i=0;i<frase.length;i++){
        if(frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') vocales.push(frase[i]);
        if(frase[i] == 'á' || frase[i] == 'é' || frase[i] == 'í' || frase[i] == 'ó' || frase[i] == 'ú')vocales.push(frase[i]);
    }

    vocalesContenidas.innerHTML = `Las vocales contenidas en la frase "${frase}", son: ${vocales.join(" - ")}`;
}

// Ejercicio 10
const numerosDivisibles = () =>{
    let numero = parseInt(document.getElementById('diez').value);
    let mensaje = document.getElementById('mensajeDivisible');

    if(numero%2 == 0) mensaje.innerHTML = `El número ${numero} es divisible por 2.`;
    else if(numero%3 == 0) mensaje.innerHTML = `El número ${numero} es divisible por 3.`;
    else if(numero%5 == 0) mensaje.innerHTML = `El número ${numero} es divisible por 5.`;
    else if(numero%7 == 0) mensaje.innerHTML = `El número ${numero} es divisible por 7.`;
}

// Ejercicio 11
const numerosDivisiblesParteDos = () =>{
    let numero = parseInt(document.getElementById('once').value);
    let mensaje = document.getElementById('mensajeDivisibleParteDos');
    let divisibles = [];

    if(numero%2 == 0) divisibles.push('2');
    if(numero%3 == 0) divisibles.push('3');
    if(numero%5 == 0) divisibles.push('5');
    if(numero%7 == 0) divisibles.push('7');

    if(divisibles.length == 0) mensaje.innerHTML = `El número ${numero}, no es divisible por 2, 3, 5 o 7`;
    else mensaje.innerHTML = `El número ${numero} es divisible por ${divisibles.join(' - ')}`;
};

// DarkMode
const darkMode = () =>{
/*     let pagina = document.getElementById('cuerpoPagina');
    if(pagina.className === 'dark'){
        pagina.classList.remove('dark');
        botonDark.classList.remove('botonNegro');
    }else{ 
        pagina.classList.add('dark');
        let botonDark = document.getElementById('botonDark');
        botonDark.classList.add('botonNegro');
    }
    
    TODO LO ANTERIOR ES LO MISMO QUE EL TOGGLE .. SI NO LO ENCUENTRA, LO AGREGA, DE LO CONTRARIO, LO ELIMINA.
    */

    let pagina = document.getElementById('cuerpoPagina');
    let botonDark = document.getElementById('botonDark');
    pagina.classList.toggle('dark');
    botonDark.classList.toggle('botonNegro');

}

