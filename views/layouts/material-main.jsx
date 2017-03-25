import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {teal100, teal500, teal700} from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

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


class DrawerUndocked extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){
    console.log('toggle');
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}



class Main extends React.Component {
  // constructor(props) {
  //   injectTapEventPlugin();
  //   super(props);
  // }
  // componentDidMount() {
  //   injectTapEventPlugin();
  // }
  render() {
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <DrawerUndocked title={this.props.title}/>
      </MuiThemeProvider>
    );
  }
}

module.exports =  Main;
