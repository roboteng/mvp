const con = require('../db/db.js');

const deleteNote = (req, res, next) => {
  if (req.params?.id !== undefined) {
    con.query(
      `DELETE FROM note WHERE id=${req.params.id};`,
      (err, results) => {
        if (err) {
          res.status(500).send();
        } else {
          res.status(202).send(results);
        }
        next();
      });
  } else {
    res.status(400).send();
    next();
  }
};

module.exports = deleteNote;