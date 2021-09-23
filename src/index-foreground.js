import React from 'react';
import { render } from 'react-dom';

import Foreground from './components/Foreground.js';
import theGuardian from './utils/theGuardian';

// Create element for React
theGuardian();

render(<Foreground />, document.querySelector('#cryptic_crossword_help'));