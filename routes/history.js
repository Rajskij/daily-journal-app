import express from 'express';
import { db } from '../data/db.js';
import { moodOptions as moods, weatherOptions as weathers } from '../data/form-data.js'

const routes = express.Router();
const moodHistory = db.moodEntries;
const users = db.users;

routes
    .route('/')
    .get((req, res) => {
        res.render('history', {
            users,
            history: moodHistory,
            moods,
            weathers,
            tags: db.tags
        });
    });

export { routes };
