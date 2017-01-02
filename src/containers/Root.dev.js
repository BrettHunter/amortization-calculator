import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';
import { Col, Container } from 'react-grid-system';

module.exports = class Root extends Component {
  render() {
    const { store } = this.props; // eslint-disable-line react/prop-types
    return (
      <Provider store={store}>
        <Container style={{ width: '100%' }}>
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={8}
            xl={6}
            offset={{ md: 1, lg: 2, xl: 3 }}
          >
            <App />
            <DevTools />
          </Col>
        </Container>
      </Provider>
    );
  }
};
