import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NewNote from './routes/NewNote/NewNote';
import ViewAll from './routes/ViewAll/ViewAll';

const App = () => {
  return (
    <Router >
      <Route exact={true} path="/" component={ViewAll} />
      <Route exact={true} path="/new" component={NewNote} />
    </Router>
  );
}

export default App;
