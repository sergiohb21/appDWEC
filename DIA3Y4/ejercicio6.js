document.body.innerHTML     = `<div class="caja" id="red" style="background-color: red; height: 200px; width: 200px; float: left;"></div>`;
document.body.innerHTML    += `<div class="caja" id="green" style="background-color: green; height: 200px; width: 200px; float: left;"></div>`;
document.body.innerHTML    += `<div class="caja" id="blue" style="background-color: blue; height: 200px; width: 200px; float: left;"></div>`;
document.body.innerHTML    += `<div class="caja" id="yellow" style="background-color: yellow; height: 200px; width: 200px; float: left;"></div>`;
document.body.innerHTML    += `<div class="caja" id="orange" style="background-color: orange; height: 200px; width: 200px; float: left;"></div>`;

const color = prompt('Introduce un color');


const eliminarCaja = document.getElementById(`${color}`);

eliminarCaja.remove();


