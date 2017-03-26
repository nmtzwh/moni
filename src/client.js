/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/app';
import injectTapEventPlugin from 'react-tap-event-plugin';

const AppClient = () => (
  <Router>
    <App  name='John' title='hello'/>
  </Router>
);

window.onload = () => {
  injectTapEventPlugin();
  render(<AppClient/>, document.getElementById('main'));
};
