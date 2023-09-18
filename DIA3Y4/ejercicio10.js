let suma = 0;
let contador = 1;

while (true) {
    const numero = prompt('Introduce un número (o escribe "666" para finalizar):');

    if (numero === '666') {
        break; 
    }

    const numeroConvertido = parseFloat(numero);
   
    if (!isNaN(numeroConvertido)) {
        suma += numeroConvertido; 
    } else {
        alert('Por favor, ingresa un número válido.');
    }
    contador++;
}

const resultadoParrafo = document.createElement('p');
resultadoParrafo.innerHTML = `Suma total: ${suma}, Número de valores introducidos: ${contador}`;

document.body.appendChild(resultadoParrafo);
