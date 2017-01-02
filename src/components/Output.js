import React from 'react';
import { Row, Col } from 'react-grid-system';
import SummaryDonut from './SummaryDonut';
import AmortizationTable from './AmortizationTable';
import currencyFormatter from 'currency-formatter';
import moment from 'moment';

class Output extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getSummaryDonutData() {
    const { loanAmount } = this.props.input;
    const totalInterest = this.calculateTotalCost() - loanAmount;
    const data = {
      labels: [
        'principal',
        'interest'
      ],
      datasets: [
        {
          data: [Number(loanAmount), Number(totalInterest)],
          backgroundColor: [
            '#42a5f5',
            '#dd6464'
          ],
          hoverBackgroundColor: [
            '#ec6b2d',
            '#ec6b2d'
          ]
        }
      ]
    };
    return data;
  }

  calculatePayoffDate() {
    const { beginDate, term } = this.props.input;
    return moment(beginDate).add(Number(term), 'years').format('MMMM YYYY');
  }

  calculateTotalCost() {
    let { loanAmount } = this.props.input;
    const { amortization } = this.props.input;
    loanAmount = Number(loanAmount);
    if (amortization.length === 0) {
      return 0;
    }
    return amortization[amortization.length - 1].accInterestRounded + loanAmount;
  }

  calculateMonthlyPayment() {
    const { amortization } = this.props.input;
    if (amortization.length === 0) {
      return 0;
    }
    return amortization[0].payment;
  }

  shouldDisplayOutput() {
    const { loanAmount, interestRate, term } = this.props.input;
    return Number(loanAmount) > 0 &&
      Number(interestRate) > 0 &&
      Number(term) > 0;
  }

  render() {
    return (
      <Col style={{ padding: '0' }}>
        {this.shouldDisplayOutput() &&
          <Col style={{ padding: '0' }}>
            <Row className="summary-row">
              <span className="summary-label">
                Total Loan Cost:
              </span>
              <span className="summary-value">
                {currencyFormatter.format(this.calculateTotalCost(), { code: 'USD' })}
              </span>
            </Row>
            <Row className="summary-row">
              <span className="summary-label">
                Monthly Payment:
              </span>
              <span className="summary-value">
                {currencyFormatter.format(this.calculateMonthlyPayment(), { code: 'USD' })}
              </span>
            </Row>
            <Row className="summary-row">
              <span className="summary-label">
                Payoff Date:
              </span>
              <span className="summary-value">
                {this.calculatePayoffDate()}
              </span>
            </Row>
            <Row className="summary-row">
              <SummaryDonut
                data={this.getSummaryDonutData()}
              />
            </Row>
            <Row className="summary-row">
              <AmortizationTable
                input={this.props.input}
              />
            </Row>
          </Col>
        }
        {!this.shouldDisplayOutput() &&
          <Col style={{ padding: '0' }}>
            <Row>
              <span className="invalid-row">
                Please fill out all of the input fields above.
              </span>
            </Row>
          </Col>
        }
      </Col>
    );
  }
}

Output.propTypes = {
  input: React.PropTypes.object
};

export default Output;
