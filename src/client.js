import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {teal100, teal500, teal700} from 'material-ui/styles/colors';

import { browserHistory, BrowserRouter } from 'react-router-dom';
import routes from './client/routes.js';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: teal100,
  },
}, {
  avatar: {
    borderColor: null,
  }//,
  //userAgent: req.headers['user-agent'],
});

ReactDom.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <BrowserRouter history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));
