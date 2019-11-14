const moment = require("moment");

moment.prototype.toMySQLDateTime = function() {
  return this.format("YYYY-MM-DD HH:mm:ss");
};

module.exports = moment;
