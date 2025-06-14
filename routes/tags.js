import express from 'express';
import { db } from '../data/db.js';
import { emojis } from '../data/form-data.js';

const routes = express.Router();
const tags = db.tags;

routes
    .route('/:id')
    .delete((req, res) => {
        const id = req.params.id;
        const rmTag = tags.find(tag => tag.id == id);
        const index = tags.indexOf(rmTag);
        tags.splice(index, 1);

        res.status(204).end();
    });

routes
    .route('/')
    .get((req, res) => {
        res.render('tags', { tags: db.tags, emojis });
    })
    .post((req, res) => {
        tags.push({
            id: tags.length + 1,
            name: req.body.mood,
            emoji: req.body.emoji
        });
        res.redirect('/tags');
    });

export { routes };
