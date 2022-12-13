// Requiring module
const express  = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

//Creating express object
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.delete('/produtos/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');

    return connect.execSQLQuery("delete from produtos where codigo="+ req.params.id, res);
})

app.delete('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');

    return connect.execSQLQuery("delete from clientes where id="+ req.params.id, res);
})

app.post('/produtos/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    
    return connect.execSQLQuery("insert into produtos (produto, armazenamento, valor) values('" +req.body.produto + "','" + req.body.armazenamento + "','" + req.body.valor + "')", res);
})

app.post('/clientes/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    
    return connect.execSQLQuery("insert into produtos (nome, email, senha) values('" +req.body.nome + "','" + req.body.email + "','" + req.body.senha + "')", res);
})

app.put('/produtos/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    
    return connect.execSQLQuery("update produtos set produto='"+req.body.produto+"',armazenamento='"+req.body.armazenamento+"', valor='"+req.body.valor+"' where codigo="+req.params.id, res);
})

app.put('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    
    return connect.execSQLQuery("update clientes set nome='"+req.body.nome+"',email='"+req.body.email+"', senha='"+req.body.senha+"' where id="+req.params.id, res);
})


app.get('/produtos', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        
    return connect.execSQLQuery('select * from produtos', res);
})

app.get('/clientes', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        
    return connect.execSQLQuery('select * from clientes', res);
})

app.get('/produtos/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    
    return connect.execSQLQuery('select * from produtos where codigo='+ req.params.id, res);
})

app.get('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    
    return connect.execSQLQuery('select * from clientes where id='+ req.params.id, res);
})



// Port Number
const PORT = process.env.PORT || 5000;

//Server Setup 
app.listen(PORT, console.log(`Server started on port ${PORT} `))