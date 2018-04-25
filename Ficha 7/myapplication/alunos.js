const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/alunos', (req, res) => { 
    let studentsArray = [{
            numero:1,
            nome: 'Daniel Dias',
            genero: 'M'
        },{
            numero:2,
            nome: 'Inês Lameira',
            genero:'F'
        },{
            numero:3,
            nome:'Tiago Dias',
            genero:'M'
        }
    ];
    res.render('test', {
        title: 'Jade Example',
        students: studentsArray,
        })
        
});

app.listen(8000, () => { 
    console.log('Servidor ativo na porta: 8000!'); 
});