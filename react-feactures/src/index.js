import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 1. Service worker
import * as serviceWorker from "./serviceWorker";

// 2. Store
import { Provider } from "react-redux";
import store from "./store/index";

// 3. Translations
import translations from "./translations/index";
import { IntlProvider } from "react-redux-multilingual";

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
