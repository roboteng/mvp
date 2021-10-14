const con = require('../db/db.js');
const q = `
SELECT id, i.title AS item_title, t.tag_array
FROM   items      i
JOIN  (  -- or LEFT JOIN ?
   SELECT it.item_id AS id, array_agg(t.title) AS tag_array
   FROM   items_tags it
   JOIN   tags       t  ON t.id = it.tag_id
   GROUP  BY it.item_id
   ) t USING (id);`;

const getNote = (req, res, next) => {
  if (req.params?.id !== undefined) {
    const id = parseInt(req.params.id);
    if (!Number.isNaN(id)) {
      con.query(
        `SELECT note.id, note.title, note.content, tag.name
        FROM note
        JOIN link ON note.id=link.note_id
        JOIN tag ON tag.id=link.tag_id
        WHERE note.id='${id}';`,
        (err, results) => {
          if (err) {
            res.status(500).send();
          } else {
            console.log(results);
            res.status(200).send(results[0]);
          }
          next();
        });
    } else {
    res.status(400).send();
    next();
    }
  } else {
    res.status(400).send();
    next();
  }
};

module.exports = getNote;