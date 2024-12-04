document.addEventListener('DOMContentLoaded', function() {
    // Função para popular a tabela com exemplos de requisições
    function populateTable() {
        const requestsTable = document.getElementById('requestsTable');
        const requisicoes = [
            { numero: '001', data: '2023-12-01', departamento: 'Compras', item: 'Caneta', quantidade: '100', urgencia: 'Baixa', orcamento: 'R$ 200', status: 'Pendente' },
            { numero: '002', data: '2023-12-02', departamento: 'TI', item: 'Laptop', quantidade: '10', urgencia: 'Alta', orcamento: 'R$ 20.000', status: 'Aprovado' },
            { numero: '003', data: '2023-12-03', departamento: 'Financeiro', item: 'Papel', quantidade: '500', urgencia: 'Média', orcamento: 'R$ 500', status: 'Reprovado' }
        ];

        requisicoes.forEach(requisicao => {
            const row = document.createElement('tr');
            row.dataset.numero = requisicao.numero;
            row.innerHTML = `
                <td>${requisicao.numero}</td>
                <td>${requisicao.data}</td>
                <td>${requisicao.departamento}</td>
                <td>${requisicao.item}</td>
                <td>${requisicao.quantidade}</td>
                <td>${requisicao.urgencia}</td>
                <td>${requisicao.orcamento}</td>
                <td>${requisicao.status}</td>
            `;
            row.addEventListener('click', showRequestDetails);
            requestsTable.appendChild(row);
        });
    }

    // Função para aplicar filtros na tabela
    function applyFilters() {
        const departmentFilter = document.getElementById('departmentFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;
        const tableRows = document.querySelectorAll('#requisicoes-table tbody tr');
        const filteredRequests = [];

        tableRows.forEach(row => {
            const departamento = row.querySelector('td:nth-child(3)').innerText;
            const status = row.querySelector('td:nth-child(8)').innerText;
            const matchDepartment = departmentFilter === '' || departamento === departmentFilter;
            const matchStatus = statusFilter === '' || status === statusFilter;

            if (matchDepartment && matchStatus) {
                row.style.display = '';
                filteredRequests.push({
                    numero: row.querySelector('td:nth-child(1)').innerText,
                    data: row.querySelector('td:nth-child(2)').innerText,
                    departamento: row.querySelector('td:nth-child(3)').innerText,
                    item: row.querySelector('td:nth-child(4)').innerText,
                    quantidade: row.querySelector('td:nth-child(5)').innerText,
                    urgencia: row.querySelector('td:nth-child(6)').innerText,
                    orcamento: row.querySelector('td:nth-child(7)').innerText,
                    status: row.querySelector('td:nth-child(8)').innerText
                });
            } else {
                row.style.display = 'none';
            }
        });

        // Salvar as requisições filtradas no LocalStorage
        localStorage.setItem('filteredRequests', JSON.stringify(filteredRequests));
    }

    // Função para detalhar uma requisição
    function showRequestDetails(event) {
        const row = event.currentTarget;
        const cells = row.querySelectorAll('td');
        
        document.getElementById('itemDetail').innerText = cells[3].innerText;
        document.getElementById('justificationDetail').innerText = 'Exemplo de Justificativa'; // Ajuste conforme necessário
        document.getElementById('budgetDetail').innerText = cells[6].innerText;
        document.getElementById('detailsPanel').dataset.rowNumero = row.dataset.numero;

        document.getElementById('detailsPanel').style.display = 'block';
    }

    // Função para aprovar uma requisição
    function approveRequest() {
        const rowNumero = document.getElementById('detailsPanel').dataset.rowNumero;
        const row = document.querySelector(`#requestsTable tr[data-numero="${rowNumero}"]`);
        if (row) {
            row.querySelector('td:nth-child(8)').innerText = 'Aprovado';
        }
        alert('Requisição Aprovada');
    }

    // Função para reprovar uma requisição
    function rejectRequest() {
        const rowNumero = document.getElementById('detailsPanel').dataset.rowNumero;
        const row = document.querySelector(`#requestsTable tr[data-numero="${rowNumero}"]`);
        if (row) {
            row.querySelector('td:nth-child(8)').innerText = 'Reprovado';
        }
        alert('Requisição Reprovada');
    }

    // Adicionar evento de clique às linhas da tabela para exibir detalhes
    populateTable();
    const tableRows = document.querySelectorAll('#requisicoes-table tbody tr');
   [_{{{CITATION{{{_1{](https://github.com/ricardo-cas/pandas/tree/eefd8f3ed9250c15e029b7ae59a24ef9f7ffc4ab/GUIA_MARKDOWN.MD)[_{{{CITATION{{{_2{](https://github.com/NatanaelSaymon/code-drops/tree/ada5a46222082116f8d070796ed15e4c0539d38b/TEMPLATE_BOOTSTRAP.md)[_{{{CITATION{{{_3{](https://github.com/lgfranco22/blog/tree/2ff765f5547038ea91aa40671858d9fd9d5ffb28/entrar.php)