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

const application = [
    "autobahn",
    "rfx",
    "fidessa",
    "caplin",
];

const service = [
    "database",
    "network",
    "applications",
    "browser",
];

const eventSource = [
    "geneos",
    "nimsoft",
    "netscout",
    "as400",
    "nagios",
    "sensu",
];

const items = {
    dc,
    env,
    application,
    service,
    eventSource
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
