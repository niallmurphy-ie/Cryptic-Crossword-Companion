import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

// Check if it's rendered. Changing clues can cause whole app to rerender
if (!document.querySelector(".appRendered")) {
  ReactDOM.render(<App />, document.querySelector("#cryptic_crossword_help"));
}
