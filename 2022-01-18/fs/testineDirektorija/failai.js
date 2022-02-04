const fs = require('fs');
const path = require('path');

const dirArray = ['new1', 'new2', 'new3', 'new4'];
const filesArray = ['file.js', 'file2.html', 'file3.txt', 'file4.css'];

let index = 0
dirArray.forEach((dir) => {
    let dirName = path.join(__dirname, dir)
    fs.mkdirSync(dirName, {}, (err) => {
        if (err) throw err
        console.log('Directory created')
    })
    let Directory = path.join(dirName, filesArray[index])
    fs.writeFile (Directory, 'Test2', (err2) => {
        if (err2) throw err2
        console.log('File created')
    })
    index++
})

// fs.stat(path.join(__dirname, '/testineDirektorija'), {}, (err, stats) => {
//     if(stats == undefined) {
//         fs.mkdir(path.join(__dirname, '/testineDirektorija'), {}, err => {
//             if(err) throw err;
//             console.log('Direktorija sėkmingai sukurta');
//         });
//     }
// });

// fs.mkdir(path.join(__dirname, '/testineDirektorija'), {}, err => {
//     if(err) throw err;
//     console.log('Direktorija sėkmingai sukurta');
// });

// fs.writeFile(path.join(__dirname, '/testineDirektorija', 'test.html'), '<h1>Test html failas</h1>', err => {
//     if(err) throw err;
//     console.log('Failas sekmingai sukurtas');
// });

// fs.readFile( path.join(__dirname, '/testineDirektorija', 'test.html'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// fs.rename( 
//     path.join(__dirname, '/testineDirektorija', 'test.html'), 
//     path.join(__dirname, '/testineDirektorija', 'pervadintasFailas.html'),
//     err => {
//         if(err) throw err;
//         console.log('Failas sekmingai pervadintas');
//     })