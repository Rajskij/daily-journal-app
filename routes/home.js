import express from 'express';
import { db } from '../data/db.js';
import { moodOptions, weatherOptions } from '../data/form-data.js'

const routes = express.Router();
const moodEntries = db.moodEntries;
const tags = db.tags;
const users = db.users;

routes
    .route("/")
    .get((req, res) => {
        res.render('home', {
            moodOptions,
            weatherOptions,
            users,
            tags
        });
    })
    .post((req, res) => {
        const body = req.body;
        const userTags = body.tags;
        let newTags = [];

        if (userTags) {
            newTags = tags
                .filter(tag => {
                    if (Array.isArray(userTags)) {
                        return userTags.find(userTag => userTag == tag.id);
                    }
                    return tag.id == userTags;
                })
                .map(tag => tag.name);
        }

        moodEntries.push({
            id: moodEntries.length + 1,
            userId: Number(body.userId),
            date: body.date,
            mood: body.mood,
            weather: body.weather,
            tags: newTags,
            note: body.note
        });

        res.status(204).redirect('/home');
    });

export { routes };
