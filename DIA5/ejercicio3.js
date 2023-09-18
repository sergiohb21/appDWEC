/* Creamos el boton */
const boton = document.createElement('button');
boton.textContent = 'Ejercicio 3';
document.body.appendChild(boton);

/* Logica */ 
const frase1 = document.getElementById('frase1');

boton.addEventListener('click', () => {
    const valorFrase1 = frase1.value;

    if( valorFrase1.includes( 'ado' ) ){
        let posicion = valorFrase1.indexOf('ado');
        frase1.value = `LA POSICION EN LA QUE APARECE ES: ${posicion}`;
    }else{
        frase1.value = 'NO APARECE';
    }
    console.log(frase1.value);
});
