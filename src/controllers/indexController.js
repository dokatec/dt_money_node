import db from "../models/money.js";

//Read All

export async function index(req, res) {
  const entradas = await db.find({ tipo: "entrada" }).exec();

  const entrada = entradas.map((item) => item.preco).reduce((a, b) => a + b, 0);

  const saidas = await db.find({ tipo: "saida" }).exec();

  const saida = saidas.map((item) => item.preco).reduce((a, b) => a - b, 0);

  const total = entrada + saida;

  const { name } = req.query;
  if (name) {
    await db.find({ categoria: name }).then((result) => {
      return res.render("index", { result, entrada, saida, total });
    });
  } else {
    await db.find({}).then((result) => {
      return res.render("index", { result, entrada, saida, total });
    });
  }
}

//Create

export async function create(req, res) {
  const { descricao, preco, categoria, tipo, date } = req.body;
  await db.create({ descricao, preco, categoria, tipo, date });
  return res.redirect("/");
}

//Delete

export async function destroy(req, res) {
  const { id } = req.query;
  await db.deleteOne({ _id: id }).exec();
  return res.redirect("/");
}
