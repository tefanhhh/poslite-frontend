import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './shared/layout/header/header';
import Home from './modules/home/home';
import Dashboard from './modules/dashboard/dashboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {}

  render(): JSX.Element {
    return (
      <React.Fragment>
        <Header title="Poslite" />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
