document.addEventListener('DOMContentLoaded', function() {
    var requests = [
        {numero: 1, data: '2023-11-01', departamento: 'Compras', item: 'Papel A4', quantidade: 10, urgencia: 'Alta', orcamento: 'R$ 50,00', status: 'Pendente'},
        {numero: 2, data: '2023-11-02', departamento: 'TI', item: 'Mouse', quantidade: 5, urgencia: 'Média', orcamento: 'R$ 150,00', status: 'Aprovado'},
        {numero: 3, data: '2023-11-03', departamento: 'Financeiro', item: 'Calculadora', quantidade: 3, urgencia: 'Baixa', orcamento: 'R$ 100,00', status: 'Reprovado'}
    ];

    var tableBody = document.getElementById('requestsTable');
    if (tableBody) {
        requests.forEach(function(request) {
            var row = document.createElement('tr');

            Object.values(request).forEach(function(value) {
                var cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }

    var chatResponses = {
        "quantidade de materiais": function() {
            return "A quantidade total de materiais requisitados é: " + requests.reduce((total, req) => total + req.quantidade, 0);
        },
        "requisições reprovadas": function() {
            return "O número de requisições reprovadas é: " + requests.filter(req => req.status === 'Reprovado').length;
        },
        "requisições aprovadas": function() {
            return "O número de requisições aprovadas é: " + requests.filter(req => req.status === 'Aprovado').length;
        },
        "materiais requisitados": function() {
            return "Os materiais requisitados são: " + requests.map(req => req.item).join(', ');
        },
        "setores requisitantes": function() {
            return "Os setores requisitantes são: " + Array.from(new Set(requests.map(req => req.departamento))).join(', ');
        }
    };

    document.getElementById('userInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        var userInput = document.getElementById('userInput').value.trim().toLowerCase();
        var chatBox = document.getElementById('messages');

        if (userInput === "") return;

        var userMessage = document.createElement('div');
        userMessage.textContent = userInput;
        userMessage.className = 'user-message';
        chatBox.appendChild(userMessage);

        var botResponse = document.createElement('div');
        botResponse.className = 'bot-response';

        if (chatResponses[userInput]) {
            botResponse.textContent = chatResponses[userInput]();
        } else {
            botResponse.textContent = "Desculpe, não entendi sua pergunta. Tente: 'quantidade de materiais', 'requisições reprovadas', 'requisições aprovadas', 'materiais requisitados' ou 'setores requisitantes'.";
        }

        chatBox.appendChild(botResponse);
        document.getElementById('userInput').value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll para a mensagem mais recente
    }

    document.getElementById('chatBox').querySelector('button').addEventListener('click', sendMessage);
});
