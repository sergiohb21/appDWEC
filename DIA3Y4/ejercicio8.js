const filas = parseInt(prompt('Introduce el número de filas'));
const columnas = parseInt(prompt('Introduce el número de columnas'));

if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    alert('Por favor, ingresa números válidos para filas y columnas.');
} else {
    const tabla = document.createElement('table');
    tabla.style.borderCollapse = 'collapse'; 

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');
            celda.style.width = '30px'; 
            celda.style.height = '30px'; 
            celda.style.border = '1px solid black'; 
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

