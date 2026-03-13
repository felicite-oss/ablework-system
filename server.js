const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('API is running');
});

// example route
app.get('/users', (req, res) => {

    db.query("SELECT * FROM users", (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

