const { response } = require('express')
const express = require('express')
const app     = express()


app.get('/', function (req, res) {
    
    //PVZ pajungti index.html faila is views direktorija
    // res.sendFile(__dirname + '/views/index.html')

    res.json({message: "test", data: "tes2"})
})

app.get('/:vardas', (req, res) => {

    let names = req.params.id
    let objektas = {rezultatas: names}
    if(names == 'amelija') {
        objektas.rezultatas = 'Moteriskas vardas'
    }

    res.json(objektas)
})

fetch(`http://localhost:3000/amelija`)
.then(response => responce.json())
.then(data => {
    console.log(data)
})

  
app.listen(3000)