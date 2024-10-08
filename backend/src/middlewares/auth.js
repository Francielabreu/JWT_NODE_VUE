/**
 * description: arquivo responsável por confirmar se um determinado(a) 'User' tem autorização
 * acessar um determinado recurso.
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    // ==> um console para termos uma saída do 'token'
    console.log(token);
    const decoded = jwt.verify(token, 'secret');
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Falha na Autenticação!' });
  }
};
