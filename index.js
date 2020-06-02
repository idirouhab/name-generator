const {getRandomItem} = require('./constants');
const app = require('restana')({});

const Insights = require('../solace/insights');
const hostNameGenerator = () => {
    const elements = [
        getRandomItem('dc'),
        getRandomItem('env'),
        getRandomItem('iterator'),
    ];
    return elements.join("-");
};

app.get('/api/:number', (req, res) => {
    const amount = req.params.number;

    res.send({names: Array.from({length: amount}, () => hostNameGenerator())})
});


app.start(3000).then(()=>{
    console.log('Running  onport 3000')
});
