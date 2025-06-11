import express from 'express';
import { moodOptions, weatherOptions, activityTags } from './data/form-data.js'

const app = express();

// register view engine
// by default it looks for views in views folder
app.set('view engine', 'ejs');

app.listen('3000');

// middleware for get access to styles
app.use(express.static('styles'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('data'));

app.get('/', (req, res) => {
    res.render('home', {
        moodOptions,
        weatherOptions,
        activityTags,
        pageName : 'Home',
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

app.get('/history', (req, res) => {
    res.render('history');
});

app.post('/sendData', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);

    res.redirect('/');
});
