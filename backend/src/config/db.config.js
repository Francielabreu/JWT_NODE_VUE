/**
 * Arquivo responsável por fazer a conexão com o banco de dados: MongoDB
 */

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
   local: {
       localDatabaseUrl: process.env.LOCAL_DATABASE_URL,
       secret: "password"
   }
}


