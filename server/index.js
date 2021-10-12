const express = require('express');
const path = require('path');
const postNote = require('./api/postNote.js');

const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Got ${req.method} on ${req.url}`);
  next();
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/note', postNote);

app.listen(port, ()=> {
  console.log(`Listening on http://localhost:${port}`)
});
