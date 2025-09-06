let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {
    const lista = document.getElementById("carrinho-list");
    const totalEl = document.getElementById("cart-total");
    const countEl = document.getElementById("cart-count");

    lista.innerHTML = "";
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    totalEl.textContent = total.toFixed(2);
    countEl.textContent = carrinho.length;
}

function toggleCarrinho() {
    const dropdown = document.getElementById("cart-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function finalizarCompra() {
    alert("Compra finalizada! Obrigado!");
    carrinho = [];
    total = 0;
    atualizarCarrinhoUI();
    toggleCarrinho();
}
