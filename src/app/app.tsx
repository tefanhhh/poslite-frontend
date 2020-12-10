import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './modules/home/home';
import Header from './shared/layout/header/header';
import LoginService from './services/login/login.service';

type IAppState = {};

type IAppProps = {};

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
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

  render(): JSX.Element {
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
