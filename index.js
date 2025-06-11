import express from 'express';

const app = express();

// register view engine
// by default it looks for views in views folder
app.set('view engine', 'ejs');

app.listen('3000');

// middleware for get access to styles
app.use(express.static('styles'));

app.get('/', (req, res) => {
    res.render('index', {
        names: [
            { name: 'Bob' },
            { name: 'Bobby' }
        ]
    });
    // res.send('Hello');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/form', (req, res) => {
    res.render('form');
})
