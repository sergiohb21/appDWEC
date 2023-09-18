
const colores = ['red','green','blue','yellow','orange'];

const color = prompt('Introduce un color');

const colorEncontrado = colores.includes(color);


if( colorEncontrado ){
    document.body.innerHTML = `<div class="caja" style="background-color: ${color}; height: 200px; width: 200px;"></div>`;
}else{
    alert('Color no encontrado');
}
