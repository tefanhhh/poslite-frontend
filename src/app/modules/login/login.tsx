import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './login.scss';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const materialStyles = makeStyles({
  textField: {
    width: '100%',
    marginBottom: '15px',
  },
  checkBox: {
    marginBottom: '15px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  buttonSignIn: {
    float: 'right',
  },
});

export default function Login() {
  const classes = materialStyles();
  return (
    <form noValidate autoComplete="off">
      <Typography variant="h4" component="h4" className={classes.title}>
        Sign In
      </Typography>
      <TextField
        type="text"
        id="username"
        name="username"
        label="Username"
        variant="outlined"
        className={classes.textField}
      />
      <br />
      <TextField
        type="password"
        id="password"
        name="password"
        label="Password"
        variant="outlined"
        className={classes.textField}
      />
      <br />
      <FormControlLabel
        control={<Checkbox id="rememberMe" name="Remember Me" />}
        label="Remember Me"
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.buttonSignIn}
      >
        Sign In
      </Button>
    </form>
  );
}
