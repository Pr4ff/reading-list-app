const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../db')

app.use(express.json);

// CREATE a category
router.post('/', async (req, res) => {
    try {
        const {description} = req.body;
        const newCategory = await pool.query(
            'INSERT INTO category(description) VALUES($1) RETURNING *', 
            [description]
        );

        res.json(newCategory.rows[0]);
    } catch (err) {
        console.error(err.message);
    };
});

// GET all categories
router.get('/', async (req, res) => {
    try {
        const allCategories = await pool.query('SELECT * FROM category');
        
        res.json(allCategories.rows);
    } catch (err) {
        console.error(err.message);
    };
});

// GET a category
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const category = await pool.query(
            'SELECT * FROM category WHERE id = $1', 
            [id]
        );
        
        res.json(category.rows[0]);
    } catch (err) {
        console.error(err.message);
    };
});

// UPDATE a category
router.put('/:id', async (req, res) => {
    try{
        const {description} = req.body;
        const {id} = req.params;
        const updatedCategory = await pool.query(
            'UPDATE category SET description = $1 WHERE id = $2', 
            [description, id]
        );
        
        res.json("Category was updated.")
    } catch (err) {
        console.error(err.message);
    };
});

// DELETE an category
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleteCategory = await pool.query(
            'DELETE FROM category WHERE id = $1', 
            [id]
        );

        res.json("Category was deleted.");
    } catch (err) {
        console.error(err.message);
    };
});

module.exports = router;