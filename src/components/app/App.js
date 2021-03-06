import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import DataTable from '../DataTable/DataTable';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const state = {
  data: [
    {
      key: 'test key key',
      temperatura: 'test key temperatura',
      umidade: 'test key umidade',
      cliente: 'test key cliente',
      data: 'test key data',
    }
  ]
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                My Awesome React App
                        </Typography>
            </Toolbar>
          </AppBar>
          <DataTable data={this.state.data} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;