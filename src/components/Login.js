import React, { Component } from "react";
import { withOAuth } from "aws-amplify-react";

class Login extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.OAuthSignIn}>Sign in with AWS</button>
      </div>
    );
  }
}

export default withOAuth(Login);
