require('newrelic');
const {getRandomItem} = require('./constants');
const express = require('express');
const app = express();
const hostNameGenerator = () => {
    const elements = [
        getRandomItem('dc'),
        getRandomItem('env'),
        getRandomItem('iterator'),
    ];
    return elements.join("-");
};
const LIMIT = 100000;
app.get('/api/hostname/:number', (req, res) => {
    const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
    res.send({names: Array.from({length: amount}, () => hostNameGenerator())})
});

app.get('/api/application/:number', (req, res) => {
    const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
    res.send({names: Array.from({length: amount}, () => getRandomItem("application"))})
});

app.get('/api/service/:number', (req, res) => {
    const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
    res.send({names: Array.from({length: amount}, () => getRandomItem("service"))})
});

app.get('/api/event-source/:number', (req, res) => {
    const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
    res.send({names: Array.from({length: amount}, () => getRandomItem("eventSource"))})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log(`Running  on port ${PORT}`);
});
