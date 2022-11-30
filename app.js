// Requiring module
const express  = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

//Creating express object
const app = express();

//Handling GET request
app.get('/', (req, res) => {
    res.send('Esta mensagem foi criada por Julio Gomes Fernandez Kohlhauf')
    res.end() 
})

app.get('/clientes', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        
    return connect.execSQLQuery('select * from cliente', res);
})

app.get('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    
    return connect.execSQLQuery('select * from cliente where id='+ req.params.id, res);
})

// Port Number
const PORT = process.env.PORT || 5000;

//Server Setup 
app.listen(PORT, console.log(`Server started on port ${PORT} `))