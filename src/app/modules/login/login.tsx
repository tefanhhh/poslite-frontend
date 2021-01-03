import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './login.scss';
import * as H from 'history';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles: any = {
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
};

type ILoginState = {
  username: string;
  password: string;
  rememberMe: boolean;
};

type ILoginProps = {
  classes: any;
  history: H.History<H.LocationState>;
};

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    event.preventDefault();
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }

  handleRememberMeChange(event) {
    event.preventDefault();
    this.setState({ rememberMe: event.target.checked });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    history.push('/dashboard');
  }

  render() {
    const { classes } = this.props;
    return (
      <form
        noValidate
        role="form"
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
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
          value={this.state.username}
          required={true}
          onChange={this.handleUsernameChange}
          error={this.state.username.length < 1}
          helperText="Username is required to not be empty"
        />
        <br />
        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          className={classes.textField}
          value={this.state.password}
          required={true}
          onChange={this.handlePasswordChange}
          error={this.state.password.length < 1}
          helperText="Password is required to not be empty"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              id="rememberMe"
              name="Remember Me"
              checked={this.state.rememberMe}
              onChange={this.handleRememberMeChange}
            />
          }
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
}

export default withStyles(styles)(Login);
