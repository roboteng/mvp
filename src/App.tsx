import React, { ReactNode, useState } from 'react';
import './App.css';
import Route from './routes/Route';
import ViewAllRoute from './routes/ViewAll/ViewAllRoute';

function App() {
  const [route, setRoute] = useState<Route>(new ViewAllRoute());
  return (
    <>
    {route.build()}
    </>
  );
}

export default App;
