const Promise = require("bluebird");
const exampleFindings = require("./example-findings");

module.exports = {
  getAll() {
    return Promise.resolve([
      {
        findings: exampleFindings.findings
      }
    ]);
  },
  getOne(id) {
    console.log(id);
    return Promise.resolve({
      findings: exampleFindings.findings
    });
  },
  create(input) {
    return Promise.resolve("id");
  }
};
