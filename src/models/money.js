import mongoose, { Schema, Types } from "mongoose";

const moneySchema = new Schema({
  descricao: String,
  preco: Number,
  categoria: String,
  tipo: String,
  date: Date,
});

const money = mongoose.model("Money", moneySchema);
/*
money.create({
  descricao: "manutenção carro",
  preco: 1000,
  categoria: "carro",
  tipo: "saida",
});
*/
export default money;
