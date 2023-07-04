import express from 'express';
import mongoose from 'mongoose';

import { newSnippet, createSnippet, getSnippetById, getRawSnippetById } from './controllers/snippetController.mjs';

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

    res.render('snippet', { code, id: 'abc' });
});

app.get('/new', newSnippet);
app.post('/save', createSnippet);
app.get('/:id', getSnippetById);
app.get('/raw/:id', getRawSnippetById);

const PORT = process.env.PORT || 3000;
// Run the express app by listening to `PORT`.
app.listen(PORT, () => {
    console.log(`Listening on https://localhost:${PORT}`);
});