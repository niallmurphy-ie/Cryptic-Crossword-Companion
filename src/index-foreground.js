import React from "react";
import { useState } from 'react';
import { render } from "react-dom";

import App from "./App.js";
import theGuardian from "./utils/theGuardian";

// Create element for React
theGuardian();

render(<App />, document.querySelector("#cryptic_crossword_help"));
