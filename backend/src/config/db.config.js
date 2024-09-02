/**
 * description: arquivo responsável por fazer a conexão com a base de dados: MongoDB'
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  local: {
    localUrlDatabse: process.env.DB_URI,
    secret: 'password',
  },
};
