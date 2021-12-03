const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

const authorRoute = require('./routes/author');
const bookRoute = require('./routes/book');
const categoryRoute = require('./routes/category');

// middleware
app.use(cors());
app.use(express.json()); // this will let us add req.body and access it
app.use('/author', authorRoute);
app.use('/book', bookRoute);
app.use('/category', categoryRoute);

app.listen(5000, () => {
    console.log("Server has started on port 5000...")
});