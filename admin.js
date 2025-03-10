const form = document.getElementById('add-versiculo-form');
const lista = document.getElementById('versiculos-lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = document.getElementById('texto').value;
    const referencia = document.getElementById('referencia').value;
    const assuntos = document.getElementById('assuntos').value.split(',');
    const pesos = document.getElementById('pesos').value.split(',').map(Number);

    const novoVersiculo = { texto, referencia, assuntos, pesos };
    database.ref('versiculos').push(novoVersiculo);

    form.reset();
});

function carregarVersiculos() {
    database.ref('versiculos').on('value', (snapshot) => {
        lista.innerHTML = '';
        snapshot.forEach(child => {
            const v = child.val();
            const div = document.createElement('div');
            div.innerHTML = `<p>${v.texto} - <small>${v.referencia}</small></p>`;
            lista.appendChild(div);
        });
    });
}
carregarVersiculos();