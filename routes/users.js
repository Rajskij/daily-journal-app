import express from 'express';
import { db } from '../data/db.js';

const routes = express.Router();
const users = db.users;

routes
    .route('/')
    .get((req, res) => {
        res.render('users', { users });
    })
    .post((req, res) => {
        users.push({
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email
        })
        res.redirect('/users');
    });

routes        
    .route('/:id')
    .delete((req, res) => {
        const id = req.params.id;
        const rmUser = users.find(user => user.id == id);
        const index = users.indexOf(rmUser);
        users.splice(index, 1);

        console.log(users);
        res.redirect('/users');
    });

export { routes };
