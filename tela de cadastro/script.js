document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const tipoUsuario = document.getElementById("tipoUsuario").value;
  
    // Exemplo de validação simples
    if (!nome || !email || !senha || !tipoUsuario) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Exibe uma mensagem de confirmação
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = `Usuário ${tipoUsuario} cadastrado com sucesso!`;
  
    // Limpa os campos do formulário
    document.getElementById("formCadastro").reset();
  });
  