import express from 'express';
import { db } from '../data/db.js';
import { moodOptions, weatherOptions, activityTags } from '../data/form-data.js'

const routes = express.Router();

routes
    .route("/")
    .get((req, res) => {
        res.render('home', {
            moodOptions,
            weatherOptions,
            users: db.users,
            tags : db.tags
        });
    })
    .post((req, res) => {

    });

export { routes };
