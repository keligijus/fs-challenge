const Results = require("./model");

module.exports.init = app => {
  app.get("/api/results", (req, res) =>
    Results.getAll().then(results => res.send(results))
  );

  app.get("/api/results/:id", (req, res) =>
    Results.getOne(req.params).then(result => res.send(result))
  );

  app.post("/api/result", (req, res) =>
    Results.create(req.body).then(result => res.send(result))
  );
};
