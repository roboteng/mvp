const con = require('../db/db.js');

const putNote = (req, res, next) => {
  if (req.params?.id !== undefined) {
    con.query(
      `UPDATE note
      SET title='${req.body.title}', content='${req.body.content}'
      WHERE id=${req.params.id};`,
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.status(204).send(results);
        }
        next();
      });
  } else {
    res.status(400).send();
    next();
  }
};

module.exports = putNote;