// Funções para adicionar produtos
function adicionarProduto() {
    var codigo = document.getElementById("codigo").value;
    var nomeProduto = document.getElementById("nomeProduto").value;
    var tipoProduto = document.getElementById("tipoProduto").value;
    var valorProduto = document.getElementById("valorProduto").value;

    if (codigo === "" || nomeProduto === "" || tipoProduto === "" || valorProduto === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    valorProduto = parseFloat(valorProduto);
    adicionarProdutoNaTabela(codigo, nomeProduto, tipoProduto, valorProduto);
    limparCampos();
}

function adicionarProdutoNaTabela(codigo, nomeProduto, tipoProduto, valorProduto) {
    var tabela = document.getElementById("tabelaProdutosBody");
    var novaLinha = tabela.insertRow();

    var cellCodigo = novaLinha.insertCell(0);
    var cellNome = novaLinha.insertCell(1);
    var cellTipo = novaLinha.insertCell(2);
    var cellValor = novaLinha.insertCell(3);

    cellCodigo.innerHTML = codigo;
    cellNome.innerHTML = nomeProduto;
    cellTipo.innerHTML = tipoProduto;
    cellValor.innerHTML = valorProduto.toFixed(2);

    // Chama a função para atualizar o total
    atualizarTotal();
}

// Função para calcular o total
function calcularTotal() {
    var tabela = document.getElementById("tabelaProdutosBody");
    var linhas = tabela.getElementsByTagName("tr");
    var total = 0;

    for (var i = 0; i < linhas.length; i++) {
        var valorCelula = parseFloat(linhas[i].getElementsByTagName("td")[3].innerHTML);
        total += isNaN(valorCelula) ? 0 : valorCelula;
    }

    return total;
}

// Função para atualizar o total na interface
function atualizarTotal() {
    var total = calcularTotal();
    document.getElementById("total").innerHTML = "Total: R$ " + total.toFixed(2);
}

// Função para limpar campos de entrada
function limparCampos() {
    document.getElementById("codigo").value = "";
    document.getElementById("nomeProduto").value = "";
    document.getElementById("tipoProduto").value = "";
    document.getElementById("valorProduto").value = "";
}

// Funções para finalizar a compra
function finalizarCompra() {
    var total = calcularTotal();

    if (total === 0) {
        alert("Não há produtos para finalizar a compra.");
        return;
    }

    // Abre a modal de escolha de pagamento
    document.getElementById("modalPagamento").style.display = "block";
}

function fecharModalPagamento() {
    // Fecha a modal de escolha de pagamento
    document.getElementById("modalPagamento").style.display = "none";
}

function processarFormaPagamento(formaPagamento) {
    fecharModalPagamento();
    
    var senha = prompt("Insira a senha para a forma de pagamento " + formaPagamento + ":");

    if (senha !== null) {
        alert("Compra realizada com sucesso!");
        limparCampos();
        limparTabela();
        atualizarTotal();
    } else {
        alert("Senha incorreta. Compra não realizada.");
    }
}
function limparTabela() {
    var tabela = document.getElementById("tabelaProdutosBody");
    tabela.innerHTML = ""; // Remove todas as linhas da tabela
}
function voltar(){
    window.location.href = 'pageP.html';
}