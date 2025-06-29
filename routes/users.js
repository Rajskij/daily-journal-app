import express from 'express';
import { db } from '../data/db.js';

const routes = express.Router();
const users = db.users;
const moodEntries = db.moodEntries;

routes        
    .route('/:id')
    .delete((req, res) => {
        const id = req.params.id;
        const rmUser = users.find(user => user.id == id);
        const index = users.indexOf(rmUser);
        users.splice(index, 1);

        for (let i = moodEntries.length - 1; i >= 0; i--) {
            if (moodEntries[i].userId == id) {
                moodEntries.splice(i, 1);
            }
        }
        res.status(204).end();
    });

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
        res.status(204).redirect('/users');
    });



export { routes };
