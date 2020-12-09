import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './modules/home/home';
import Header from './shared/layout/header/header';
import LoginService from './services/login/login.service';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    LoginService.login({
      username: 'admin',
      password: 'admin',
      rememberMe: true,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Poslite" />
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}