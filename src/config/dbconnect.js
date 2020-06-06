const config = require('./keys');
const DB = config.mongoDBConnStr.replace('<PASSWORD>', config.mongoDBPassword);

module.exports = {DB};
