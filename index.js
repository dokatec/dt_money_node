import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { index, create, destroy } from "./src/controllers/indexController.js";

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/money");
}

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", index);
app.get("/del", destroy);

app.post("/add", create);

app.listen(3000, () => {
  console.log("servidor onlne");
});
