let amigosSorteados = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo'); 
    let listaAmigos = document.getElementById('lista-amigos');
    amigosSorteados.push(nomeAmigo.value);
    
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
        limparNome()
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
        limparNome()
    }
}

function limparNome() {
    document.getElementById('nome-amigo').value = ('');
 }

function sortear() {
    embaralhar(amigosSorteados);

    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigosSorteados.length; i++) {
        
        if (i == amigosSorteados.length -1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosSorteados[i] + ' -->' + amigosSorteados[0] + '<br>';
        }   else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosSorteados[i] + ' -->' + amigosSorteados[i +1] + '<br>';
        }
    }
}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = ('');
    document.getElementById('lista-sorteio').textContent = ('');
    amigosSorteados = [];
}