const express = require('express');
const bodyParser = require('body-parser');
const produtos = require('./routes/produtos')

const app = express()
app.use(bodyParser.urlencoded())
app.use('/produtos', produtos)

const port = process.env.PORT || 5000; // Variável de ambiente que identifica a porta onde o server está rodando ou por default 5000


app.listen(port, (err) =>{  
    if(err)
        console.log('Error: Server is not running')
    else    
        console.log(`Success: Server is running in port: ${port}`)
});

