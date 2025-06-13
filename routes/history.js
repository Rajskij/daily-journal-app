import express from 'express';
import { db } from '../data/db.js';
import { moodOptions as moods, weatherOptions as weathers } from '../data/form-data.js'

const routes = express.Router();
const moodHistory = db.moodEntries;
const users = db.users;

routes
    .route('/')
    .get((req, res) => {
        const query = req.query;
        let history = moodHistory;

        if (query && query.userId) {
            const userId = query.userId;
            history = moodHistory.filter(val => val.userId == userId);
        }

        res.render('history', {
            users,
            history,
            moods,
            weathers,
            tags: db.tags
        });
    });

routes
    .route('/update')
    .put((req, res) => {
        const body = req.body;
        const id = body.id;
        const entry = moodHistory.find(entry => entry.id == id)
        const index = moodHistory.indexOf(entry);
        // console.log(entry, " new: ", body);

        moodHistory[index] = {
            id: Number(body.id),
            userId: Number(body.userId),
            date: body.date,
            mood: body.mood,
            weather: body.weather,
            tags: body.tags,
            note: body.note
        };

        res.redirect('/history');
    });

routes
    .route('/:id')
    .delete((req, res) => {
        const id = req.params.id;
        const rmEntry = moodHistory.find(entry => entry.id == id);
        const index = moodHistory.indexOf(rmEntry);
        moodHistory.splice(index, 1);

        res.redirect('/history');
    })

export { routes };
