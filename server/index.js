const express = require('express');
const path = require('path');

const port = 3001;

const app = express();

app.use(express.static(path.join('..', 'public')));

app.listen(port, ()=> {
  console.log(`Listening on http://localhost:${port}`)
});
