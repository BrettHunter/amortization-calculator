import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as InputActions from '../actions/InputActions';
import InputForm from '../components/InputForm';
import Output from '../components/Output';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue400 } from 'material-ui/styles/colors';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue400,
    primary2Color: blue400,
  }
});

class App extends Component {
  render() {
    const { input, inputActions } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <Header />
          <div className="main-app-container">
            <div className="input-container">
              <InputForm input={input} actions={inputActions} />
            </div>
            <div className="output-container">
              <Output input={input} actions={inputActions} />
            </div>
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  inputActions: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    input: state.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputActions: bindActionCreators(InputActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
