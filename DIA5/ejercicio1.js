const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    const frase1 = document.getElementById('frase1').value;
    const caracteres = frase1.length;

    if( caracteres > 20 ){
        alert('MUY GRANDE');
    }
        
    console.log(`La longitud de la cadena es: ${caracteres}`);
    
});
