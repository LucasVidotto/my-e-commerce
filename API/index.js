import http from'http';
import express from'express';
import bodyParser from'body-parser';
import cors from 'cors';
import mysql from "mysql2" ;
const app = express();
const port = process.eventNames.PORT || 4040;
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "store",
  });
  

app.get('/', function(req, res){
    res.json({ user: 'geek' });
});

app.get("/users", (req, res) => {
  let mysql = "SELECT * FROM teste";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/product", (req, res) => {
  let mysql = "SELECT * FROM TesteStoque";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
const server = http.createServer(app);
server.listen(port);
console.log('Servidor rodando na porta 4040');