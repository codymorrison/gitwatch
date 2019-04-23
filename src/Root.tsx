// Libraries
import React from "react";
import client from "./api/apolloClient";

// Styles
import "./assets/styles/index.css";

// Components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo-hooks";

import App from "./views/App";
import Authorize from "./views/Authorize";

export interface RootProps {}

export default function Root(props: RootProps) {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/authorize" component={Authorize} />
          <Route path="/" exact component={App} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  );
}
