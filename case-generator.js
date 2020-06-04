const nimSOft = (eventSource, hostname, description, instanceType, serviceName, healthCheck) => {
  return {
    "application": "autobahn",
    "cluster": "eu-west-1",
    "event_source": eventSource,
    "priority": "high",
    "description": description,
    "environment": "prod",
    "hostname": hostname,
    "service_type": instanceType,
    "service_name": serviceName,
    "data_center": "fft",
    "organisation": "Trading",
    "status": "open",
    "health_check": healthCheck,
  };
};

const cases = [
  nimSOft("nimsoft", "fft-prod-31", "storage limit reached 90%", "database", "MSSQL", "DB_health"),
  nimSOft("nimsoft", "fft-prod-31", "storage limit reached 90%", "database", "MSSQL", "DB_health"),
  nimSOft("nimsoft", "fft-prod-31", "storage limit reached 90%", "database", "MSSQL", "DB_health"),

  nimSOft("nimsoft", "fft-prod-32", "storage limit reached 90%", "database", "MSSQL", "DB_health"),
  nimSOft("nimsoft", "fft-prod-32", "storage limit reached 90%", "database", "MSSQL", "DB_health"),
  nimSOft("nimsoft", "fft-prod-32", "storage limit reached 90%", "database", "MSSQL", "DB_health"),

  nimSOft("geneos", "fft-prod-55", "cannot store new record to MSSQL", "application", "autobahn_proc", "App_Health"),
  nimSOft("geneos", "fft-prod-55", "cannot store new record to MSSQL", "application", "autobahn_proc", "App_Health"),
  nimSOft("geneos", "fft-prod-55", "cannot store new record to MSSQL", "application", "autobahn_proc", "App_Health"),
  nimSOft("geneos", "fft-prod-55", "cannot store new record to MSSQL", "application", "autobahn_proc", "App_Health"),
  nimSOft("geneos", "fft-prod-55", "cannot store new record to MSSQL", "application", "autobahn_proc", "App_Health"),

  nimSOft("geneos", "fft-prod-31", "cannot cycle log", "server", "redhat", "Infra_Health"),
  nimSOft("geneos", "fft-prod-31", "cannot cycle log", "server", "redhat", "Infra_Health"),
  nimSOft("geneos", "fft-prod-31", "cannot cycle log", "server", "redhat", "Infra_Health"),
  nimSOft("geneos", "fft-prod-31", "cannot cycle log", "server", "redhat", "Infra_Health"),

  nimSOft("geneos", "fft-prod-32", "cannot cycle log", "server", "redhat", "Infra_Health"),
  nimSOft("geneos", "fft-prod-32", "cannot cycle log", "server", "redhat", "Infra_Health"),
  nimSOft("geneos", "fft-prod-32", "cannot cycle log", "server", "redhat", "Infra_Health"),
  nimSOft("geneos", "fft-prod-32", "cannot cycle log", "server", "redhat", "Infra_Health"),
];

module.exports = {
  generateCase: () => cases,
};