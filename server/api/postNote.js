const con = require('../db/db.js');

const postNote = (req, res, next) => {
  if (req.body?.title) {
    con.query(`
    INSERT INTO note (title, content)
    VALUES ('${req.body.title}', '${req.body.content}');`, (err, results) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(201).send();
      }
    })
  } else {
    res.status(400).send("title must be provided");
  }
};

module.exports = postNote;