import React from "react";
import { useState } from 'react';
import { render } from "react-dom";

import App from "./App.js";
import { theGuardianDiv } from "./utils/theGuardian";

// Create element for React
theGuardianDiv();

render(<App />, document.querySelector("#cryptic_crossword_help"));
