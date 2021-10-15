const con = require('../db/db.js');

const getNotes = (req, res, next) => {
  con.query(
    `SELECT * FROM note;`,
    (err, results) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).send(results);
      }
    })
};

module.exports = getNotes;