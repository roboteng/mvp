const con = require('../db/db.js');

const postNote = (req, res, next) => {
  con.query(`
  INSERT INTO note (title, content)
  VALUES ('${req.body.title}', '${req.body.content}');`)
  res.status(201).send();
  next();
};

module.exports = postNote;