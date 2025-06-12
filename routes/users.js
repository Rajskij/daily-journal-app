import express from 'express';
import { db } from '../data/db.js';

const routes = express.Router();

routes
    .route('/')
    .get((req, res) => {
        res.render('users', {
            users: db.users
        });
    })

export { routes };
