import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './login.scss';

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

  handleUsernameChange(event) {}

  handlePasswordChange(event) {}

  handleRememberMeChange(event) {}

  handleSubmit(event) {}

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
          onChange={this.handleUsernameChange}
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
          onChange={this.handlePasswordChange}
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              id="rememberMe"
              name="Remember Me"
              value={this.state.rememberMe}
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
