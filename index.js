import express from 'express';
import { routes as home } from './routes/home.js';
import { routes as user } from './routes/users.js';
import { routes as tags } from './routes/tags.js';
import { routes as history } from './routes/history.js';
import { requestLogger, randomPageHandler, handlesDevToolsRequests } from './middleware/middleware.js';

const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen('3000');

// middleware for get access to styles 
// and event handlers for DELETE and PUT
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/home');
});

// custom middlewares
app.use('/.well-known', handlesDevToolsRequests);
app.use(requestLogger);

app.use('/home', home);
app.use('/users', user);
app.use('/tags', tags);
app.use('/history', history);

// Catch any other requests and forward to error handler
app.use(randomPageHandler);

// error-handling middleware
app.use((err, req, res, next) => {
    console.error('Error:     ', err.message);
    res.status(err.status || 500).render('error', {
        message: err.message,
        status: err.status || 500
    });
});
