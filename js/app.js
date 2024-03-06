let amigosSorteados = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo'); 
        if (nomeAmigo.value == '') {
            alert('valor não correspondente a esse item');
            listaAmigos.textContent == '';
        }

        if (amigosSorteados.includes(nomeAmigo.value)) {
            alert('O nome já foi inserido!');
            return;
        }

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
    if (amigosSorteados.length <= 3) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

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
