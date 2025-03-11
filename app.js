// Inicialização do Analytics
const analytics = firebase.analytics();

// Exemplo de evento de clique no botão "Sortear Versículo"
document.getElementById('sortear-btn').addEventListener('click', () => {
    analytics.logEvent('sortear_versiculo', {
        timestamp: new Date().toISOString()
    });
});
