const {getRandomItem} = require('./constants');
const app = require('restana')({});
const hostNameGenerator = () => {
    const elements = [
        getRandomItem('dc'),
        getRandomItem('env'),
        getRandomItem('iterator'),
    ];
    return elements.join("-");
};
const LIMIT = 100000;
app.get('/api/:number', (req, res) => {
    const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
    res.send({names: Array.from({length: amount}, () => hostNameGenerator())})
});

const PORT = process.env.PORT || 8080
app.start(PORT).then(() => {
    console.log(`Running  on port ${PORT}`);
});
