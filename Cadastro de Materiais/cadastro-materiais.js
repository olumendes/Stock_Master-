document.getElementById('formCadastroMateriais').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var nomeMaterial = document.getElementById('nomeMaterial').value;
    var quantidadeMaterial = document.getElementById('quantidadeMaterial').value;
    var mensagem = document.getElementById('mensagem');

    // Ação fictícia de cadastro de material
    mensagem.textContent = `Material ${nomeMaterial} com quantidade ${quantidadeMaterial} cadastrado com sucesso!`;
});
