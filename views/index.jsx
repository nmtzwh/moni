import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';



var React = require('react');
var DefaultLayout = require('./layouts/default');


class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
          <MuiThemeProvider>
            <AppBar 
            title={this.props.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </MuiThemeProvider>
        <div>Hello {this.props.name}</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
