import express from 'express';
import mongoose from 'mongoose';

import { createSnippet, getSnippetById } from './controllers/snippetController.mjs';

// Initialize express app.
const app = express();

// Establish conenction with MongoDB.
mongoose.connect("mongodb://localhost/bitbin", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Set EJS as the templating language and view engine.
app.set('view engine', 'ejs');
// Properly parse request body.
app.use(express.urlencoded({ extended: true }));
// Serve static files in /public directory.
app.use(express.static('public'));

// Set routes
app.get('/', (req, res) => {
    const code = `Welcome to BitBin!
    
Use the commands in the top right corner
to create a new file to share with others.`;

    res.render('snippet', { code });
});

app.get('/new', (req, res) => {
    res.render('new');
});

app.post('/save', createSnippet);
app.get('/:id', getSnippetById);

const PORT = process.env.PORT || 3000;
// Run the express app by listening to `PORT`.
app.listen(PORT, () => {
    console.log(`Listening on https://localhost:${PORT}`);
});