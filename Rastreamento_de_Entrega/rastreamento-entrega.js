document.getElementById('formRastreamentoEntrega').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var codigoRastreamento = document.getElementById('codigoRastreamento').value;
    var mensagem = document.getElementById('mensagem');

    // Ação fictícia de rastreamento
    mensagem.textContent = `Status do rastreamento para o código ${codigoRastreamento}: Em trânsito.`;
});
