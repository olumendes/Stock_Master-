// Dados simulados de requisições
const requisicoes = [
    {
        material: "Papel A4",
        quantidade: 500,
        dataPedido: "2024-10-28",
        dataEstimadaEntrega: "2024-11-05",
        status: "Pendente"
    },
    {
        material: "Canetas",
        quantidade: 100,
        dataPedido: "2024-10-29",
        dataEstimadaEntrega: "2024-11-07",
        status: "Pendente"
    },
    {
        material: "Toner de Impressora",
        quantidade: 2,
        dataPedido: "2024-10-26",
        dataEstimadaEntrega: "2024-11-03",
        status: "Pendente"
    }
];

// Função para renderizar a tabela
function renderTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = ""; // Limpa a tabela antes de renderizar

    requisicoes.forEach((req, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${req.material}</td>
            <td>${req.quantidade}</td>
            <td>${req.dataPedido}</td>
            <td>${req.dataEstimadaEntrega}</td>
            <td>${req.status}</td>
            <td>
                ${req.status === "Pendente" ? `<button onclick="marcarAtendido(${index})">Finalizar</button>` : "Atendido"}
            </td>
        `;

        corpoTabela.appendChild(row);
    });
}

// Função para marcar uma requisição como "Atendida"
function marcarAtendido(index) {
    requisicoes[index].status = "Atendido";
    renderTabela();
}

// Chama a função para renderizar a tabela ao carregar a página
document.addEventListener("DOMContentLoaded", renderTabela);
