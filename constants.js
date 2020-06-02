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

const metric = [
    "cpu_utilisation",
    "mem_percent_free",
    "disk_space_free",
    "net_bytes_dropped",
    "throughput",
    "response_time",
];

const status = [
    "up",
    "down",
];

const items = {
    dc,
    env,
    application,
    service,
    eventSource,
    metric,
    status
};

const getRandomItem = (itemName) => {
    if (itemName === 'iterator') {
        return Math.floor(Math.random() * 100) + 1
    }
    const item = items[itemName];

    return item[Math.floor(Math.random() * item.length)];
};

const hostNameGenerator = () => {
    const elements = [
        getRandomItem('dc'),
        getRandomItem('env'),
        getRandomItem('iterator'),
    ];
    return elements.join("-");
};

const getMix = () => {
    const iterator = getRandomItem('iterator');
    const dc = getRandomItem('dc');
    const env = getRandomItem('env');
    return {
        dc: dc,
        env: env,
        hostname: `${dc}-${env}-${iterator}`,
        application: getRandomItem('application'),
        service: getRandomItem('service'),
        eventSource: getRandomItem('eventSource'),
        metric: getRandomItem('metric'),
        status: getRandomItem('status'),
    };
};

module.exports = {
    hostNameGenerator,
    getRandomItem,
    getMix
};
