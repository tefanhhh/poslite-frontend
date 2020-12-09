import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

type IHeaderProps = {
  title: string;
};

export default function Header(props: IHeaderProps): JSX.Element {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">{props.title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
