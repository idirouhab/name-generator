const _ = require("underscore");

const dataCenter = [
  "fft",
  "lon",
  "ny",
  "chi",
];

const cluster = [
  "eu-east-1",
  "eu-west-1",
  "eu-central-1",
];

const environment = [
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

const serviceName = [
  "AD",
  "MSSQL",
  "Sybase",
  "Oracle",
  "Storage",
  "WebSSO",
];

const serviceType = [
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

const priority = [
  "critical",
  "high",
  "medium",
  "low",
];

const automation = [
  "Ansible",
  "Control-M",
  "Bladelogic",
];

const policy = [
  "infra_cpu,",
  "infra_mem",
  "infra_space",
  "app_throughput",
  "app_latency",
];

const cloudRegion = [
  "db-dc,",
  "azure-us",
  "azure-emea",
];

const description = [
  "%s reached 90%",
  "cannot store new record to %s",

];

const items = {
  cluster,
  dataCenter,
  environment,
  application,
  serviceName,
  serviceType,
  eventSource,
  metric,
  status,
  priority,
  automation,
  policy,
  cloudRegion,
  description,
};

const getRandomItem = (itemName) => {
  if (itemName === "iterator") {
    return Math.floor(Math.random() * 5);
  }
  const item = items[itemName];

  return _.shuffle(item)[0];
  ;
};

const hostNameGenerator = () => {
  const elements = [
    getRandomItem("dataCenter"),
    getRandomItem("environment"),
    getRandomItem("iterator"),
  ];
  return elements.join("-");
};

const getMix = () => {
  const iterator = getRandomItem("iterator");
  const dataCenter = getRandomItem("dataCenter");
  const environment = getRandomItem("environment");
  return {
    dataCenter: dataCenter,
    cluster: cluster,
    environment: environment,
    hostname: `${dataCenter}-${environment}-${iterator}`,
    application: getRandomItem("application"),
    serviceName: getRandomItem("serviceName"),
    serviceType: getRandomItem("serviceType"),
    eventSource: getRandomItem("eventSource"),
    metric: getRandomItem("metric"),
    status: getRandomItem("status"),
    priority: getRandomItem("priority"),
    automation: getRandomItem("automation"),
    policyName: getRandomItem("policy"),
    cloudRegion: getRandomItem("cloudRegion"),
    description: getRandomItem("description"),
  };
};

module.exports = {
  hostNameGenerator,
  getRandomItem,
  getMix,
};
