const fs                = require('fs');
const path              = require('path');
const express           = require('express');
const handlebars        = require('express-handlebars');
const app               = express();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//Prijungiamas adreso url encodinimas
app.use( 
    express.urlencoded({
        extended: false
    })
);

//Nurodoma sablonu direktorija is kurios automatiskai bus paimami failai
app.set('views', __dirname + '/templates');

//Sukuriamas sablonu variklis su nustatymais: 
//extName - failo gale nurodytas tipas, pvz: .hbs
//layoutsDir - direktorija kurioje sukurtas pagrindinis sablono failas
//defaultLayout - Standartinis pagrindinis sablonas
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    layoutsDir: __dirname + '/templates/layouts',
    defaultLayout: 'layout'
}));

//Priskiriamas auksciau nurodytas sablonu variklis
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/apie-mus', (req, res) => {
    let masyvas = ['Giedre', 'Laugaliene'];
    let objektas = {
        vardas: '<strong>Giedre</strong>',
        pavarde: 'Laugaliene'
    }

    res.render('apie-mus', {masyvas, objektas});
});

app.get('/kontaktai', (req, res) => {
    res.render('kontaktai');
});

app.get('/atsiliepimai', (req, res) => {
    let reviewNumber = getRandomInt(0, 100);
    res.render('atsiliepimai', {reviewNumber});
})

app.get('/forma', (req, res) => {
    res.render('forma')
})

app.post('/forma', (req, res) => {
    
    let message = ''

    if(req.body.email == 'info@bit.lt' 
    && req.body.password == '1234')
       message = 'Sekmingai prisijungete';
    else
       message = 'Prisijungimas nepavyko';

    res.render('forma', {message})
})

app.listen(3000);