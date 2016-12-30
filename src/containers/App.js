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

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    input: state.input
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    inputActions: bindActionCreators(InputActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
