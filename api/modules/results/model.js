const Promise = require("bluebird");
// const exampleFindings = require("./example-findings");
const db = require("../../db");

module.exports = {
  getAll() {
    const query = `SELECT * FROM results`;

    return db.pool.queryAsync(query);
  },
  getOne(id) {
    const query = `SELECT * FROM results WHERE id = ?`;
    const values = [id];

    return db.pool.queryAsync(query, values);
  },
  create(input) {
    const query = `INSERT INTO results SET ?`;
    const value = input;

    return db.pool
      .queryAsync(query, value)
      .then(result => this.getOne(result.insertId));
  }
};
