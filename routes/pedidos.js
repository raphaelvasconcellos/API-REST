const express = require("express");
const router = express.Router();

//retorna todos pedido
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna todos os pedidos",
  });
});
//insere um pedido
router.post("/", (req, res, next) => {
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade
  }
  res.status(201).send({
    mensagem: "O pedido foi criado",
    pedidoCriado: pedido
  });
});
// retorna os dados de um pedido
router.get("/:id_pedido", (req, res, next) => {
  const id = req.params.id_pedido;
  res.status(200).send({
    mensagem: "Detalhes dos pedidos ",
  });
});
// altera um pedido
router.patch("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Alterando um pedido",
  });
});
// exclui um pedido
router.delete("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Pedido excluido",
  });
});

module.exports = router;
