const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    req.token = 10 + '10'
    res.text = 'secret'
    res.send("hola")
})

app.listen(3000)
console.log('app');