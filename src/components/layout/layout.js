import React,{Component} from "react";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {Topmenu} from '../../components'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#2c6f47',
      light: '#529168',
      dark: '#003816',
      contrastText: '#ffffff',
    },
    primary: {
      main: '#162a50',
      light: '#44527c',
      dark: '#000028',
      contrastText: '#ffffff',
    },
  },
    typography: {
    fontFamily: [

      'Roboto',

    ].join(','),
  },
  overrides: {
    MuiDivider: { 
      root: { 
        height: '0',
        margin: '10px', 
      },
    },
  },
});

class Layout extends Component {

    render() {
      return (
          <div>
           
              <ThemeProvider theme={theme}>
              <Topmenu/>
              {this.props.children}
              </ThemeProvider>
              
          </div>
      );
    }
  }
  
  export default Layout

