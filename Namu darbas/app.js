const handlebars = require('express-handlebars')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

// Prijungiamas url encodinimas
app.use(
	express.urlencoded({
		extended: false,
	})
)

// nurodoma sablonu direktorija is kurios automatiskai bus paimami failai
app.set('views', __dirname + '/templates')
//Sukuriamas sablonu variklis su nustatymais:
// extname - failo extensinas
//layoutDir - direktorija kurioje sukurtas pagrindinis sablono failas
//defaultLayout - standartinis pagrindinis sablonas
app.engine(
	'hbs',
	handlebars.engine({
		extname: 'hbs',
		layoutsDir: __dirname + '/templates/layouts',
		defaultLayout: 'layout',
	})
)
//Priskirimas auksciau nurodytas sablonu variklis
app.set('view engine', 'hbs')

// Routeriai
app.get('/', (req, res) => {
	res.render('index')
})
app.get('/istorija', (req, res) => {
	res.render('istorija')
})
app.get('/atsiliepimai', (req, res) => {
	res.render('atsiliepimai')
})
app.get('/spauda', (req, res) => {
	res.render('spauda')
})
app.get('/valdymas', (req, res) => {
	res.render('valdymas')
})
app.get('/skaidrumas', (req, res) => {
	res.render('skaidrumas')
})

app.listen(3000)