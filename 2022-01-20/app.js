const express = require('express');
const app = express();

//GET REQUESTAI
app.get('/test/', (req, res) => {
    res.send('Labas Pasauli');
});

app.get('/labas/', (req, res) => {
    res.send('Labas Pasauli');
});

app.get('/apie-mus/', (req, res) => {
    res.send('Labas Pasauli');
});

app.get('/test/:id', (req, res) => {
    let id = req.params.id;
    const diff = 2.54;
    let html = '';

    //console.log('cm.\tcol.\t|\tcol.\tcm.');
    
    html = '<table>' +
                '<thead>' + 
                    '<th>cm.</th>' +
                    '<th>col.</th>' +
                    '<th>|</th>' + 
                    '<th>col.</th>' +
                    '<th>cm.</th>' +
                '</thead>' +
                '<tbody>';

    for(let x = 1; x <= id; x++) {
        //console.log(x + '\t' + (x*diff).toFixed(2) + '\t|\t' + x + '\t' + (x/diff).toFixed(2));
        html += '<tr>' +
                    '<td>' + x + '</td>' +
                    '<td>' + (x*diff).toFixed(2) + '</td>' +
                    '<td>|</td>' +
                    '<td>' + x + '</td>' +
                    '<td>' + (x/diff).toFixed(2) + '</td>' +
                '</tr>';
    }

    html += '</tbody></table>';

    //let html = '<table><tr><td>'+req.params.id+'</td></tr></table>';
    res.send(html);
})

app.listen(3000);

//POST REQUESTAI

//Production Env - Produkcine aplinka
//Developmental Evn - Gamybine aplinka

