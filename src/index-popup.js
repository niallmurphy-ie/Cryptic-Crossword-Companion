// Make async await work
import '@babel/polyfill/noConflict'
import React from 'react';
import { render } from 'react-dom';

import Popup from './components/Popup';

render(<Popup />, document.querySelector('#popup'));