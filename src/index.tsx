import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import configureStore from "./service/redux/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
