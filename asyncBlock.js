

var core = require('./core')

var config = core.config
var db = core.db

var exporterService = require('./services/exporter.js');
exporterService.exporter(config, db);

