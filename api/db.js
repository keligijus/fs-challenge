const Promise = require("bluebird");
const mysql = require("mysql");
const config = require("config");

// setup mysql connection pool
const dbConfig = config.get("dbConfig");
const pool = mysql.createPool(dbConfig);
exports.pool = Promise.promisifyAll(pool);

// logs all queries to console
module.exports.pool.on("connection", function(connection) {
  connection.on("enqueue", function(sequence) {
    if ("Query" === sequence.constructor.name) {
      console.log(sequence.sql);
    }
  });
});
