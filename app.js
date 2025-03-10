document.getElementById('sortear-btn').addEventListener('click', () => {
    database.ref('versiculos').once('value').then(snapshot => {
        const versiculos = Object.values(snapshot.val() || {});
        const sorteado = versiculos[Math.floor(Math.random() * versiculos.length)];
        document.getElementById('versiculo-container').innerHTML = `<p>${sorteado.texto}</p><small>${sorteado.referencia}</small>`;
    });
});