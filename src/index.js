import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//!!new version code
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//!!legacy code - DOM 버전 때문에 아래 코드를 실행시키지 못한다
// ReactDOM.render(<App />, document.getElementById("root"));
