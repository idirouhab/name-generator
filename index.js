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


app.start(8080).then(() => {
    console.log('Running  onport 8080')
});
