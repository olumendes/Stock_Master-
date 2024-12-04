document.addEventListener('DOMContentLoaded', function() {
    var requests = [
        {numero: 1, data: '2023-11-01', departamento: 'Compras', item: 'Papel A4', quantidade: 10, urgencia: 'Alta', orcamento: 'R$ 50,00', status: 'Pendente'},
        {numero: 2, data: '2023-11-02', departamento: 'TI', item: 'Mouse', quantidade: 5, urgencia: 'Média', orcamento: 'R$ 150,00', status: 'Aprovado'},
        {numero: 3, data: '2023-11-03', departamento: 'Financeiro', item: 'Calculadora', quantidade: 3, urgencia: 'Baixa', orcamento: 'R$ 100,00', status: 'Reprovado'}
    ];

    var tableBody = document.getElementById('requestsTable');
    if (tableBody) {
        renderTable(requests);

        // Adiciona evento ao botão de filtro
        document.querySelector('button[onclick="applyFilters()"]').addEventListener('click', applyFilters);
    }

    function renderTable(data) {
        tableBody.innerHTML = ''; // Limpa a tabela
        data.forEach(function(request) {
            var row = document.createElement('tr');

            Object.values(request).forEach(function(value) {
                var cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }

    function applyFilters() {
        var departmentFilter = document.getElementById('departmentFilter').value;
        var statusFilter = document.getElementById('statusFilter').value;

        var filteredRequests = requests.filter(function(request) {
            var departmentMatch = departmentFilter ? request.departamento === departmentFilter : true;
            var statusMatch = statusFilter ? request.status === statusFilter : true;
            return departmentMatch && statusMatch;
        });

        renderTable(filteredRequests);
    }
});
