const barbearia = {
  cortes: [
    { id: 1, tipo: "Militar", valor: 20 },
    { id: 2, tipo: "Samurai", valor: 35 },
    { id: 3, tipo: "Pompadour", valor: 20 },
    { id: 4, tipo: "Moicano", valor: 10 },
    { id: 5, tipo: "Razor part", valor: 5 },
  ],

  barbas: [
    { id: 1, tipo: "Capitão Jack", valor: 20 },
    { id: 2, tipo: "Van Dyke", valor: 20 },
    { id: 3, tipo: "Barba Média", valor: 20 },
    { id: 4, tipo: "Barba Baixa", valor: 20 },
    { id: 5, tipo: "Barba Zero", valor: 15 },
  ],
  estaAberto: true,
};

function buscaCortePorId(id) {
  for (let i = 0; i < barbearia.cortes.length; i++) {
    let corteAtual = barbearia.cortes[i];
    if (corteAtual.id == id) {
      return corteAtual;
    }
  }
  return "Corte não encontrado.";
}

function buscaBarbaPorId(id) {
  for (let i = 0; i < barbearia.barbas.length; i++) {
    let barbaAtual = barbearia.barbas[i];
    if (barbaAtual.id == id) {
      return barbaAtual;
    }
  }
  return "Barba não encontrado.";
}

function verificaStatusBarbearia() {
  if (barbearia.estaAberto) {
    return "Estamos abertos";
  }
  return "Estamos fechados";
}

function retornaTodosCortes() {
  let listaTodosCortes = [];

  for (let i = 0; i < barbearia.cortes.length; i++) {
    let corteAtual = barbearia.cortes[i];
    listaTodosCortes.push(corteAtual);
  }
  return listaTodosCortes;
}

function retornaTodasBarbas() {
  let listaTodasBarbas = [];

  for (let i = 0; i < barbearia.barbas.length; i++) {
    let barbaAtual = barbearia.barbas[i];
    listaTodasBarbas.push(barbaAtual);
  }
  return listaTodasBarbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
  let cortePedido = buscaCortePorId(corteId);
  let barbaPedido = buscaBarbaPorId(barbaId);
  let pedido = {
    nome: nomeCliente,
    pedidoCorte: cortePedido.tipo,
    pedidoCortePreco: cortePedido.valor,
    pedidoBarba: barbaPedido.tipo,
    pedidoBarbaPreco: barbaPedido.valor,
  };
  return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
  for (let i = 0; i < lista.length; i++) {
    let elementoAtual = lista[i];
    if (elementoAtual.id == id) {
      elementoAtual.tipo = tipo;
      elementoAtual.valor = valor;
    }
  }
  return lista;
}

function calculaTotal(pedido) {
  return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
