const texto = prompt("Introduzca un texto");

if(texto){
    document.body.innerHTML = `<strong>${texto}</strong>`;
}else{
    alert('No has introducido ningun texto');
}
