const express = require("express");
const http = require("http");
const { ppid } = require("process");
const WebSocket = require("ws");

const app = express();

//Inicializa um servidor HTTP orquestrado pelo Express
const server = http.createServer(app);

//Inicializa uma instancia de servidor websocker a partir do servidor http
const wss = new WebSocket.Server({ server });

//Funcao responsável por manusear a conexao websocket
wss.on("connection", (ws) => {
    //Funcao que trata as mensagens recebidas pelo servidor
    ws.on("message", (message) => {
        console.log("Mensagem recebida: ", message);
        ws.send(message);
    });
});

//Inicializa o servidor
server.listen(process.env.PORT || 9898, () => {
    console.log("Servidor conectado na porta:", server.address().port);
})