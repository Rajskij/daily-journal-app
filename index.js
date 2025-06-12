import express from 'express';
import { routes as home } from './routes/home.js';
import { routes as user } from './routes/users.js';
import { routes as tags } from './routes/tags.js';

const app = express();

// register view engine
// by default it looks for views in views folder
app.set('view engine', 'ejs');

app.listen('3000');

// middleware for get access to styles
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', home);
app.use('/users', user);
app.use('/tags', tags);

app.get('/history', (req, res) => {
    res.render('history');
});

app.use((err, req, res, next) => {
    res.status(err.status | 500);
    res.json({ error: err.message });
});
