import React from 'react';
import './App.css';
import NewNoteRoute from './routes/NewNote/NewNoteRoute';
import Route from './routes/Route';
import ViewAllRoute from './routes/ViewAll/ViewAllRoute';

interface AppProps {}

interface AppState {
  route: Route
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    route: new ViewAllRoute(
      () => {
        this.setState({
          route: new NewNoteRoute()
        })
      }),
  }
  render() {
    return (
      <>
        {this.state.route.build()}
      </>
    );
  }
}

export default App;
