const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../db');

app.use(express.json()); 

// CREATE an author
router.post('/', async (req, res) => {
    try {
        const {name} = req.body;
        const newAuthor = await pool.query(
            'INSERT INTO author(name) VALUES($1) RETURNING *', 
            [name]
        );
        
        res.json(newAuthor.rows[0]);
    } catch (err) {
        console.error(err.message);
    };
});

// GET all authors
router.get('/', async (req, res) => {
    try {
        const allAuthors = await pool.query('SELECT * FROM author');
        res.json(allAuthors.rows);
    } catch (err) {
        console.error(err.message);
    };
});

// GET an author
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const author = await pool.query(
            'SELECT * FROM author WHERE id = $1', 
            [id]
        );

        res.json(author.rows[0]);
    } catch (err) {
        console.error(err.message);
    };
});

// UPDATE an author
router.put('/:id', async (req, res) => {
    try {
        const {name} = req.body;
        const {id} = req.params;        
        const updateAuthor = await pool.query(
            'UPDATE author SET name = $1 WHERE id = $2', 
            [name, id]
        );
        
        res.json("Author name updated.");
    } catch (err) {
        console.error(err.message);
    };
});

// DELETE an author
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleteAuthor = await pool.query(
            'DELETE FROM author WHERE id = $1', 
            [id]
        );

        res.json("Author was deleted.");
    } catch (err) {
        console.error(err.message);
    };
});

module.exports = router;