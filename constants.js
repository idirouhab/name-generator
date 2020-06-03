const dc = [
  "fft",
  "lon",
/*  "ny",
  "chi"*/,
];

const env = [
  "prod",
  //"dev",
  "uat",
];

const application = [
  "autobahn",
  "rfx",
/*  "fidessa",
  "caplin",*/
];

const serviceName = [
  "AD",
  "MSSQL",
/*  "Sybase",
  "Oracle",
  "Storage",
  "WebSSO",*/
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
/*  "netscout",
  "as400",
  "nagios",
  "sensu",*/
];

const metric = [
  "cpu_utilisation",
  "mem_percent_free",
/*  "disk_space_free",
  "net_bytes_dropped",
  "throughput",
  "response_time",*/
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
/*  "infra_space",
  "app_throughput",
  "app_latency",*/
];

const cloudRegion = [
  "db-dc,",
  "azure-us",
  "azure-emea",
];

const description = [
  "Similique aut dolorem ullam sint at eaque quaerat nihil ut.",
  "Sed animi maxime harum vero.",
];

const items = {
  dc,
  env,
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
    return Math.floor(Math.random() * 100) + 1;
  }
  const item = items[itemName];

  return item[Math.floor(Math.random() * item.length)];
};

const hostNameGenerator = () => {
  const elements = [
    getRandomItem("dc"),
    getRandomItem("env"),
    getRandomItem("iterator"),
  ];
  return elements.join("-");
};

const getMix = () => {
  const iterator = getRandomItem("iterator");
  const dc = getRandomItem("dc");
  const env = getRandomItem("env");
  return {
    dc: dc,
    env: env,
    hostname: `${dc}-${env}-${iterator}`,
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
