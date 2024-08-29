/**
 * descrição: Arquivo responsável pela configuração das rotas da 'API'
 */

const express = require("express");
const router = express.Router();

//TODO: Declarar rotas

router.get("/api/v1", (req, res) => {
    res.status(200).json({ 
        success: true,
        message: "seja bem vindo(a) a API NodeJS + MongoDB!" ,
        version: "1.0.0"
    })
    
})

module.exports = router;