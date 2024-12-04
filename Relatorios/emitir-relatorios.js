document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formEmitirRelatorios').addEventListener('submit', function(e) {
        e.preventDefault();
        gerarRelatorio();
    });

    function gerarRelatorio() {
        const tipoRelatorio = document.getElementById('tipoRelatorio').value;
        const requisicoesFiltradas = JSON.parse(localStorage.getItem('filteredRequests')) || [];

        let conteudoRelatorio = `
            <html>
            <head>
                <title>Relatório de Requisições</title>
                <style>
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #003366; color: white; }
                </style>
            </head>
            <body>
                <h2>Relatório de Requisições - ${tipoRelatorio}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Data</th>
                            <th>Departamento</th>
                            <th>Item</th>
                            <th>Quantidade</th>
                            <th>Urgência</th>
                            <th>Orçamento</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        requisicoesFiltradas.forEach(requisicao => {
            conteudoRelatorio += `
                <tr>
                    <td>${requisicao.numero}</td>
                    <td>${requisicao.data}</td>
                    <td>${requisicao.departamento}</td>
                    <td>${requisicao.item}</td>
                    <td>${requisicao.quantidade}</td>
                    <td>${requisicao.urgencia}</td>
                    <td>${requisicao.orcamento}</td>
                    <td>${requisicao.status}</td>
                </tr>
            `;
        });

        conteudoRelatorio += `
                    </tbody>
                </table>
            </body>
            </html>
        `;

        const blob = new Blob([conteudoRelatorio], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'relatorio.html';
        a.click();
        URL.revokeObjectURL(url);
    }
});
