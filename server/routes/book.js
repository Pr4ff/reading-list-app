const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../db');

app.use(express.json());

// CREATE a book
router.post('/', async (req, res) => {
    try {        
        const {author_id} = req.body;
        const {title} = req.body;         
        const newBook = await pool.query('INSERT INTO book(author_id, title) VALUES($1, $2) RETURNING *', [author_id, title]);
        res.json(newBook.rows[0]);
    } catch (err) {
        console.error(err.message);
    };
});
 
// GET all books
router.get('/', async (req, res) => {
    try {
        const allBooks = await pool.query('SELECT * FROM book');
        res.json(allBooks.rows);
    } catch (err) {
        console.error(err.message);
    };
});

// GET a book
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await pool.query('SELECT * FROM book WHERE id = $1', [id]);
        res.json(book.rows[0]);
    } catch (err) {
        console.error(err.message);
    };
});

// UPDATE a book
router.put('/:id', async (req, res) => {
    try {
        const {title} = req.body;
        const {id} = req.params;
        const updatedBook = await pool.query('UPDATE book SET title = $1 WHERE id = $2', [title, id]);
        res.json("Book was updated.");
    } catch (err) {
        console.error(err.message);
    };
});

// DELETE a book
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;        
        const deleteBook = await pool.query(
            'DELETE FROM book WHERE id = $1', 
            [id]
        );
        
        res.json("Book was deleted.");
    } catch (err) {
        console.error(err.message);
    };
});

module.exports = router;