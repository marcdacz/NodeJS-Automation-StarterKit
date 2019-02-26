const backstop = require('backstopjs');
const args = require('yargs').argv;
const fileHelpers = require('./scripts/fileHelpers');
const settings = require('./settings');

const scenarioFiles = fileHelpers.getJsFiles('./scenarios')
let scenarios = [];
scenarioFiles.map(file => {
  scenarios = scenarios.concat(require(file)(settings).scenarios);
});

let backstopConfig = require('./backstop.config')({scenarios: scenarios});

let commandToRun = '';

if (args.reference) {
	commandToRun = "reference";
}

if (args.test) {
	commandToRun = "test";
}

if (args.approve) {
	commandToRun = "approve";
}

backstop(commandToRun, {
  config: backstopConfig
});
