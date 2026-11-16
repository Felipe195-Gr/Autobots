
const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.json());

// Disponibiliza os arquivos do front-end
app.use(express.static(path.join(__dirname, "../frontend")));

// Rota de teste
app.get("/api/status", (req, res) => {
    res.json({
        mensagem: "API da Autobots funcionando!"
    });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Autobots rodando em http://localhost:${PORT}`);
});
