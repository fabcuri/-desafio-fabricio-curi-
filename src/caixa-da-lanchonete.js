
class CaixaDaLanchonete {
  constructor() {
    this.cardapio = {
      cafe: { descricao: "Café", valor: 3.00 },
      chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
      suco: { descricao: "Suco Natural", valor: 6.20 },
      sanduiche: { descricao: "Sanduíche", valor: 6.50 },
      queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
      salgado: { descricao: "Salgado", valor: 7.25 },
      combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
      combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 },
    };
  }

  calcularValorDaCompra(formaDePagamento, itens) {
    const descontoDinheiro = 0.05;
    const acrescimoCredito = 0.03;
    let totalCompra = 0;

    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    for (const item of itens) {
      const produto = item.produto;
      const quantidade = item.quantidade;
      const valorProduto = this.cardapio[produto]?.valor;

      if (!valorProduto) {
        return "Item inválido!";
      }
     

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }

      if (produto === "chantily" || produto === "queijo") {
        const itemPrincipal = produto === "chantily" ? "cafe" : "sanduiche";
        if (!itens.find((i) => i.produto === itemPrincipal)) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }

      totalCompra += valorProduto * quantidade;
    }

    if (formaDePagamento === "dinheiro") {
      totalCompra -= totalCompra * descontoDinheiro;
    } else if (formaDePagamento === "credito") {
      totalCompra += totalCompra * acrescimoCredito;
    } else if (formaDePagamento !== "debito") {
      return "Forma de pagamento inválida!";
    }

    return `${totalCompra.toFixed(2)}`;
  }
}
export { CaixaDaLanchonete };

