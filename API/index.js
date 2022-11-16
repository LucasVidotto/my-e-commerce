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
      res.json(result);
    }
  });
});
app.delete("/delete/:id", (req, res) => {
  console.log('chamou delete')
  const { idprod} = 1;
  let mysql = "DELETE FROM testestoque WHERE idprod = ?";
  db.query(mysql, [idprod], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/stoque", (req, res) => {
  let mysql = "SELECT * FROM testestoque";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/estoque", (req, res) => {
  console.log('chamou');
  const { nome } = req.body;
  const { url } = req.body;
  let mysql = "INSERT INTO testestoque ( nome, url) VALUES (?, ?)";
  db.query(mysql, [ nome, url], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
/* app.post("/stoque", (req, res) => {
  const { nome } = req.body;
  let mysql = "INSERT INTO teste ( nome) VALUES (?)";
  db.query(mysql, [nome], (err, result) => {
    res.send(result);
  });
}); */
app.post("/stoque", (req, res) => {
  console.log('chamou');
  const { User } = req.body;
  const { Name } = req.body;
  console.log('User : '+User +' Name : '+Name);
  let mysql = "INSERT INTO testecart (User, Name) VALUES (?, ?)";
  db.query(mysql, [User, Name], (err, result) => {
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