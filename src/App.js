import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import gql from "graphql-tag";
import awsmobile from "./aws-exports";
import { withOAuth } from "aws-amplify-react";
import Login from "./components/Login";
import { createFee } from "./graphql/mutations";

Amplify.configure(awsmobile);

const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  }
});

const createFees = async () => {
  const result = await client.mutate({
    mutation: gql(createFee),
    variables: {
      input: {
        feeSchoolId: "c11c02f2-6be9-487d-bf79-a21a881c410b",
        annual_fee: 300000,
        admission_fee: 200000
      }
    }
  });
  console.log(result.data.createTodo);
};

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
        <button onClick={createFees}>createFee</button>
      </header>
    </div>
  );
}

export default withOAuth(App);
