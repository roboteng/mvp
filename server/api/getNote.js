const con = require('../db/db.js');

const getNote = (req, res, next) => {
  if (req.params?.id !== undefined) {
    const id = parseInt(req.params.id);
    if (!Number.isNaN(id)) {
      con.query(
        `SELECT * FROM note
      WHERE id='${id}';`,
        (err, results) => {
          if (err) {
            res.status(500).send();
          } else {
            console.log(results);
            res.status(200).send(results[0]);
          }
        });
    } else {
    res.status(400).send();
    }
  } else {
    res.status(400).send();
  }
};

module.exports = getNote;