const requests = [
    { number: '001', date: '2023-10-01', department: 'Compras', item: 'Papel A4', quantity: 100, urgency: 'Alta', budget: 'Aprovado', status: 'Pendente' },
    { number: '002', date: '2023-10-03', department: 'TI', item: 'Notebook', quantity: 1, urgency: 'Média', budget: 'Insuficiente', status: 'Pendente' },
    // Adicione mais requisições conforme necessário
];

function loadRequests() {
    const tableBody = document.getElementById('requestsTable');
    tableBody.innerHTML = '';
    requests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.number}</td>
            <td>${request.date}</td>
            <td>${request.department}</td>
            <td>${request.item}</td>
            <td>${request.quantity}</td>
            <td>${request.urgency}</td>
            <td>${request.budget}</td>
            <td>${request.status}</td>
        `;
        row.addEventListener('click', () => showDetails(request));
        tableBody.appendChild(row);
    });
}

function applyFilters() {
    const department = document.getElementById('departmentFilter').value;
    const status = document.getElementById('statusFilter').value;
    
    const filteredRequests = requests.filter(request => {
        return (department === '' || request.department === department) &&
               (status === '' || request.status === status);
    });

    const tableBody = document.getElementById('requestsTable');
    tableBody.innerHTML = '';
    filteredRequests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.number}</td>
            <td>${request.date}</td>
            <td>${request.department}</td>
            <td>${request.item}</td>
            <td>${request.quantity}</td>
            <td>${request.urgency}</td>
            <td>${request.budget}</td>
            <td>${request.status}</td>
        `;
        row.addEventListener('click', () => showDetails(request));
        tableBody.appendChild(row);
    });
}

function showDetails(request) {
    document.getElementById('detailsPanel').style.display = 'block';
    document.getElementById('itemDetail').textContent = request.item;
    document.getElementById('justificationDetail').textContent = 'Necessidade de reabastecimento de papel para o escritório';
    document.getElementById('budgetDetail').textContent = request.budget;
}

function approveRequest() {
    alert('Requisição aprovada!');
    document.getElementById('detailsPanel').style.display = 'none';
}

function rejectRequest() {
    alert('Requisição reprovada!');
    document.getElementById('detailsPanel').style.display = 'none';
}

window.onload = loadRequests;
