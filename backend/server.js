/**
 * Arquivo responsável por iniciar a aplicação
 * descrição: Arquivo responsável por toda a configuração e inicialização da aplicação
 */

const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Aplicação executando na porta ${port}`);
});