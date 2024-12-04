document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'usuario') {
        window.location.href = 'Central de Requisições/centralreq.html'; // Redireciona para a Central de Requisição
    } else if (username === 'admin' && password === 'colaborador') {
        window.location.href = 'tela inicial/telainicial.html'; // Redireciona para a Tela Inicial
    } else if (username === 'admin' && password === 'admin') {
        window.location.href = 'tela de admin/site.html'; // Redireciona para a Tela de Admin
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
