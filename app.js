const express = require('express');
const fs = require('fs');

const app = express();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.get('/api/member', (req, res) => {
    res.status(200).json(tours)
});

app.post('/', (req, res) => {
    res.status(200).json({msg: 'post received'})
})

const port = 3000;

app.listen(port, () => {
    console.log(`app running on : http://localhost:${port}`)
});

