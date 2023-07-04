/* 
    At the speed of 1000 IDs/second, 
    ~7 thousand years or 63B IDs needed, in order to have a 1% probability of at least one collision.
    According to: https://zelark.github.io/nano-id-cc/
*/
import { customAlphabet } from 'nanoid';
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 13);

import Snippet from '../models/Snippet.mjs';

// Create a new snippet
const newSnippet = async (req, res) => {
    const id = req.query.dupe;
    if (id) {
        try {
            const snippet = await Snippet.findOne({ uniqueID: id });
            if (snippet) {
                res.render('new', { value: snippet.value });
            } else {
                res.redirect('/');
            }
        } catch (e) {
            console.error(e);
            res.redirect('/');
        }
    } else {
        res.render('new');
    }
};

// Create a new snippet
const createSnippet = async (req, res) => {
    const value = req.body.value;
    if (!value) {
        res.redirect('/');
        return;
    }

    const uniqueID = nanoid();

    try {
        const snippet = await Snippet.create({ value, uniqueID });
        res.redirect(`/${snippet.uniqueID}`);
    } catch (e) {
        console.error(e);
        res.render('new', { value });
    }
};

// Retrieve a snippet by its ID.
const getSnippetById = async (req, res) => {
    const id = req.params.id;
    try {
        const snippet = await Snippet.findOne({ uniqueID: id });
        if (snippet) {
            res.render('snippet', { code: snippet.value, id: id });
        } else {
            res.redirect('/');
        }
    } catch (e) {
        console.error(e);
        res.redirect('/');
    }
};

// Retrieve a snippet by its ID raw.
const getRawSnippetById = async (req, res) => {
    const id = req.params.id;
    try {
        const snippet = await Snippet.findOne({ uniqueID: id });
        if (snippet) {
            res.end(snippet.value);
        } else {
            res.redirect('/');
        }
    } catch (e) {
        console.error(e);
        res.redirect('/');
    }
}

export { newSnippet, createSnippet, getSnippetById, getRawSnippetById }