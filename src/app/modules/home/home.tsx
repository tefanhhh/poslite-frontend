import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Login from '../login/login';

export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Login history={useHistory()} />
      </Container>
    </React.Fragment>
  );
}
