const appInsights = require("applicationinsights");

function setupTelemetry() {
  const cs = process.env.APPLICATIONINSIGHTS_CONNECTION_STRING;
  if (!cs) {
    console.log("AppInsights: no connection string, telemetry disabled");
    return;
  }

  appInsights
    .setup(cs)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .start();

  console.log("AppInsights: telemetry enabled");
}

module.exports = { setupTelemetry };
