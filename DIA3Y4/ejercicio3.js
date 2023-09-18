const texto = prompt('Introduce un texto');
const textoLenght = texto.length;


if(texto){
    if( textoLenght < 10 ){
        document.body.innerHTML = `<strong>${texto}</strong>`;
    }else if( textoLenght <=20 ){
        document.body.innerHTML = `<h1>${texto}</h1>`;
    }else{
        document.body.innerHTML = `<u>${texto}</u>`;
    }
}else{
    alert('Error, texto vacio')
}

console.log(textoLenght);