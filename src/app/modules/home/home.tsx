import React from 'react';

import Container from '@material-ui/core/Container';
import Login from '../login/login';

export default function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Login />
      </Container>
    </React.Fragment>
  );
}
