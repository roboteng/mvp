const con = require('../db/db.js');

const postNote = (req, res, next) => {
  console.log('Got', req.body.title, req.body.content);
  res.status(201).send();
  next();
};

module.exports = postNote;