import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { FontStyle } from "./assets/static/iconfont/iconfont";

const app = (
  <Fragment>
    <App />
    <GlobalStyle />
    <FontStyle />
  </Fragment>
);

ReactDOM.render(app, document.getElementById("root"));
