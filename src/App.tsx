import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import api from './api';
import './App.css';
import Note from './models/Note';
import EditNote from './routes/NewNote/EditNote';
import NewNote from './routes/NewNote/NewNote';
import ViewAll from './routes/ViewAll/ViewAll';

const App = () => {
  const saveNote = async (note: Note) => {
    await api.saveNote(note);
  }
  const editNote = async (id: number, note: Note) => {
    await api.editNote(id, note)
  }
  return (
    <Router >
      <Route exact={true} path="/" component={ViewAll} />
      <Route exact={true} path="/new" component={() => <NewNote saveNote={saveNote}
      />} />
      <Route exact={false} path="/edit/:id" component={() => <EditNote
        editNote={editNote}
      />} />
    </Router>
  );
}

export default App;
