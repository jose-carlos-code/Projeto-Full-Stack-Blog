const express = require('express');
const app = express();
const routes = require('./src/routes');

app.use(express.urlencoded( {extended: true} ));
app.use(express.json())
app.use(routes);


app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO NA PORTA 3001');
});