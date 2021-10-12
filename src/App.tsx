import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NewNote from './routes/NewNote/NewNote';
import ViewAll from './routes/ViewAll/ViewAll';

const App = () => {
  const [newNoteTitle, setTitle] = useState<string>('');
  const [newNoteContents, setContents] = useState<string>('');
  return (
    <Router >
      <Route exact={true} path="/" component={ViewAll} />
      <Route exact={true} path="/new" component={() => <NewNote
        title={newNoteTitle}
        contents={newNoteContents}
        setTitle={setTitle}
        setContents={setContents}
        submit={() => console.log("they are", newNoteTitle, newNoteContents)}
      />} />
    </Router>
  );
}

export default App;
