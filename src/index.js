import React from "react";
import ReactDOM from "react-dom";

import CSS from "./styles.module.css";

function App() {
  return (
    <div className={CSS.App}>
      <h1>Hello CodeSandbox</h1>
      <h2>Hello Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
