/**Arquivo responsável por iniciar a aplicação
 * Descrição: Arquivo responsável por toda a configuração e inicialização da aplicação
 */

//Bibliotecas
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

//Rotas da API
const index = require("./routes/index"); 

//TODO: Declarar rota user.routes.js
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan("dev"));

app.use('/',index);
// TODO: incluir depois a chamada da rota da rota 'user.routes.js'

module.exports = app; 