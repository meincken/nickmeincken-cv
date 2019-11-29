import React from "react";
import ReactDOM from "react-dom";
import App from "./00-Route/Index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
