import express, {Router} from 'express'
import serverless from 'serverless-http'
import { routes as home } from '../../routes/home.js';
import { routes as user } from '../../routes/users.js';
import { routes as tags } from '../../routes/tags.js';
import { routes as history } from '../../routes/history.js';

const app = express()

app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', home);
app.use('/users', user);
app.use('/tags', tags);
app.use('/history', history);

app.use((err, req, res, next) => {
    res.status(err.status | 500);
    res.json({ error: err.message });
});

export const handler = serverless(app)
