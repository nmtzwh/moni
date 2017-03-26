// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import AppBar from 'material-ui/AppBar';



var React = require('react');

import Main from './layouts/material-main';


export class App extends React.Component {
  // componentDidMount() {
  //   injectTapEventPlugin();
  // }
  render() {
    return (
      <div>
      <Main title={this.props.title} iconClassNameRight="muidocs-icon-navigation-expand-more"></Main>
      <div>Hello {this.props.name}</div>
      </div>
    );
  }

}

export default App;



