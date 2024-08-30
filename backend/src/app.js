/**Arquivo responsável por iniciar a aplicação
 * Descrição: Arquivo responsável por toda a configuração e inicialização da aplicação
 */

//Bibliotecas
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

//==> importar o arquivo: 'DB.CONFIG.JS'
const db = require("./config/db.config");

mongoose.Promise = global.Promise;

// ==> Conexão com o MongoDB
mongoose.connect(db.local.localDatabaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("Conectado ao MongoDB com Sucesso!")
}).catch((err) => {
    console.log(err)
})






//Rotas da API
const index = require("./routes/index");

//TODO: Declarar rota user.routes.js
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan("dev"));

app.use('/', index);
// TODO: incluir depois a chamada da rota 'user.routes.js'

module.exports = app; 