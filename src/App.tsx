import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import api from './api';
import './App.css';
import Note from './models/Note';
import NewNote from './routes/NewNote/NewNote';
import ViewAll from './routes/ViewAll/ViewAll';

const App = () => {
  const saveNote = (note: Note) => {
    api.saveNote(note);
  }
  return (
    <Router >
      <Route exact={true} path="/" component={ViewAll} />
      <Route exact={true} path="/new" component={() => <NewNote saveNote={saveNote}
      />} />
    </Router>
  );
}

export default App;
