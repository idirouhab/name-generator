const dc = [
    "fft",
    "lon",
    "ny",
    "chi",
];

const env = [
    "prod",
    "dev",
    "uat",
];

const items = {
    dc,
    env,
};

const getRandomItem = (itemName) => {
    if (itemName === 'iterator') {
        return Math.floor(Math.random() * 100) + 1
    }

    const item = items[itemName];
    return item[Math.floor(Math.random() * item.length)];
};

module.exports = {
    getRandomItem
};
