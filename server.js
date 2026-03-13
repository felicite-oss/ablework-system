const express = require('express');
const db = require('./db/db');

const app = express();
app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});