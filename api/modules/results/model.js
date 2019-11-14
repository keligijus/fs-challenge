// const exampleFindings = require("./example-findings");
const db = require("../../db");
const moment = require("../../momentWrapper");

function resultInputMapper(input) {
  // input.findings = JSON.stringify(input.findings);
  const now = new Date();
  input.queuedAt = moment(now).toMySQLDateTime();
  input.scanningAt = moment(now).toMySQLDateTime();
  input.finishedAt = moment(now).toMySQLDateTime();

  return input;
}

module.exports = {
  getAll() {
    const query = `
      SELECT r.*, s.*
      FROM results r
      INNER JOIN status s
      ON r.statusId = s.statusId
      ORDER BY id
    `;

    return db.pool.queryAsync(query);
  },
  getOne(id) {
    const query = `
      SELECT r.*, s.*
      FROM results r
      INNER JOIN status s
      ON r.statusId = s.statusId WHERE id = ?
    `;
    const values = [id];

    return db.pool.queryAsync(query, values);
  },
  create(input) {
    const query = `INSERT INTO results SET ?`;
    const value = resultInputMapper(input);

    return db.pool
      .queryAsync(query, value)
      .then(result => this.getOne(result.insertId));
  }
};
