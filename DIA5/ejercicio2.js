
/*Creamos el boton */
const boton = document.createElement('button');

boton.textContent = 'Pulsame';

document.body.appendChild(boton);

/* Logica */

boton.addEventListener('click',()=>{
    const frase2 = document.getElementById('frase2').value;

    if (frase2.includes('aprobado')) {
        alert('Contiene el texto aprobado')
    }else {
        alert('No contiene el texto aprobado');
    }
    console.log(frase2);

});
