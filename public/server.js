const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const newlocation = require('./chart.json');

app.get('/budget', (req, res) => {
    res.json(newlocation);
});

app.listen(port, () => {
    console.log('API served at http://localhost:${port}');
});
