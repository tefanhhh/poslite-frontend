import React from 'react';

import Container from '@material-ui/core/Container';
import Login from '../login/login';

export default class Home extends React.Component {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Login />
        </Container>
      </React.Fragment>
    );
  }
}
