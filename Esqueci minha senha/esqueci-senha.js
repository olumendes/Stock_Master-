document.getElementById('formEsqueciSenha').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Um link de redefinição de senha foi enviado para o seu email.';
});
