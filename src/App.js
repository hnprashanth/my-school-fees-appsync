import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { withOAuth } from "aws-amplify-react";
import Login from "./components/Login";

Amplify.configure(awsmobile);

const oauth = {
  domain: "my-school-fees.auth.ap-south-1.amazoncognito.com",
  scope: ["email", "public_profile"],
  redirectSignIn: "http://localhost:3000",
  redirectSignOut: "http://localhost:3000",
  responseType: "code" // or token
};

Auth.configure({ oauth });

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login />
      </header>
    </div>
  );
}

export default withOAuth(App);
