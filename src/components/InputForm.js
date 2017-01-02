import React from 'react';
import { Control, Form } from 'react-redux-form';
import { Row, Col } from 'react-grid-system';
import { TextField, RaisedButton, DatePicker } from 'material-ui';
import { debounce } from 'lodash';

class InputForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Form model="input"
        onUpdate={debounce(() => this.props.actions.updateAmortization(), 800)}
      >
        <Col xs={12} sm={12} md={6} lg={6} xl={6} >
          <Row>
            <Control.input
              model="input.loanAmount"
              component={TextField}
              floatingLabelText="Loan Amount ($)"
              type="number"
            />
            <Control.input
              model="input.interestRate"
              component={TextField}
              floatingLabelText="Interest Rate (%)"
              type="number"
            />
          </Row>
        </Col>
        <Row>
          <Control.input
            model="input.term"
            component={TextField}
            floatingLabelText="Loan Term (Years)"
            type="number"
            max="50"
          />
          <DatePicker
            floatingLabelText="Loan Start Date"
            value={this.props.input.beginDate}
            autoOk
            onChange={(event, date) => this.props.actions.setBeginDate(event, date)} // eslint-disable-line react/jsx-no-bind, max-len
          />
        </Row>
        <Row>
          <RaisedButton
            label="Reset"
            primary
            onClick={() => this.props.actions.resetAmortization()} // eslint-disable-line react/jsx-no-bind, max-len
          />
        </Row>
      </Form>
    );
  }
}

InputForm.propTypes = {
  actions: React.PropTypes.object,
  input: React.PropTypes.object,
};

export default InputForm;
