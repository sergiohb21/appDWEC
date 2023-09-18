const nPares = []; 

for (let i = 0; i < 20; i++) {
    nPares.push(`<p>Numero par ${i+1} = ${i*2}</p>`);
}

document.body.innerHTML = nPares.join('');