const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path'); 

const app = express();

dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');  
});

app.post('/submit-feedback', (req, res) => {
    const { rating, experience } = req.body;

    if (!rating || !experience) {
        return res.status(400).send('Rating and experience are required.');
    }

    const query = 'INSERT INTO feedback (rating, experience) VALUES (?, ?)';
    db.query(query, [rating, experience], (err, result) => {
        if (err) throw err;
        res.send('Feedback submitted successfully.');
    });
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
