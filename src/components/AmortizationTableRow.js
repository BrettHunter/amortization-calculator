import React from 'react';
import moment from 'moment';
import currencyFormatter from 'currency-formatter';
import { at, sumBy, times } from 'lodash';
import { Col, Row, Container, ScreenClassRender } from 'react-grid-system';

const cf = currencyFormatter.format;

const cellStyle = {
  padding: '5px 0',
  margin: '0',
};

const summaryCellStyle = {
  padding: '5px 0',
  margin: '0',
  fontWeight: '700',
};

const summaryRowStyle = {
  backgroundColor: '#8bc8f9',
  marginBottom: '15px',
};

const displayDateForPayment = (props, format = 'MMM YYYY') => (
  moment(props.input.beginDate)
    .add(props.row.paymentNumber, 'months')
    .format(format)
);

const getMonthForPayment = (props) => (
  moment(props.input.beginDate)
    .add(props.row.paymentNumber, 'months')
    .month() + 1
);

const isLastPayment = (props) => {
  const { amortization } = props.input;
  return props.row.paymentNumber === amortization[amortization.length - 1].paymentNumber;
};

const shouldShowAnnualSummaryRow = (props) => (
  displayDateForPayment(props).includes('Dec') || isLastPayment(props)
);

const displayAnnualTotal = (props, attribute) => {
  const { row, input } = props;
  const indexRange = [];
  const monthNumber = getMonthForPayment(props);
  let rowIndex = row.paymentNumber - 1;

  times(monthNumber, () => {
    if (rowIndex >= 0) {
      indexRange.push(rowIndex);
      rowIndex--;
    }
  });
  const amortizationSubArray = at(input.amortization, indexRange);
  return cf(sumBy(amortizationSubArray, attribute), { code: 'USD' });
};

const displayDataCell = (content) => (
  <Col xs={2} style={cellStyle}>
    <span>{content}</span>
  </Col>
);

const displaySummaryCell = (content) => (
  <Col xs={2} style={summaryCellStyle}>
    <span>{content}:</span>
  </Col>
);

const AmortizationTableRow = (props) => {
  return (
    <Container>
      <Row>
        {displayDataCell(displayDateForPayment(props))}
        {displayDataCell(cf(props.row.payment, { code: 'USD' }))}
        {displayDataCell(cf(props.row.principalPaymentRounded, { code: 'USD' }))}
        {displayDataCell(cf(props.row.interestPaymentRounded, { code: 'USD' }))}
        {displayDataCell(cf(props.row.accInterestRounded, { code: 'USD' }))}
        {displayDataCell(cf(props.row.principalBalanceRounded, { code: 'USD' }))}
      </Row>
      {shouldShowAnnualSummaryRow(props) &&
        <Row style={summaryRowStyle}>
          {displaySummaryCell(displayDateForPayment(props, 'YYYY'))}
          {displaySummaryCell(displayAnnualTotal(props, 'payment'))}
          {displaySummaryCell(displayAnnualTotal(props, 'principalPaymentRounded'))}
          {displaySummaryCell(displayAnnualTotal(props, 'interestPaymentRounded'))}
          {displaySummaryCell(cf(props.row.accInterestRounded, { code: 'USD' }))}
          {displaySummaryCell(cf(props.row.principalBalanceRounded, { code: 'USD' }))}
        </Row>
      }
    </Container>
  );
};

export default AmortizationTableRow;
