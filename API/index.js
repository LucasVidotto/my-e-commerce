import http from'http';
import express from'express';
import bodyParser from'body-parser';
import cors from 'cors';
const app = express();
const port = process.eventNames.PORT || 4040;
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.json({ user: 'geek' });
});
const server = http.createServer(app);
server.listen(port);
console.log('Servidor rodando na porta 4040');