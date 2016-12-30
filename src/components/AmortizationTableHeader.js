import React from 'react';
import { Col, Row, Container } from 'react-grid-system';

const cellStyle = {
  padding: '5px 0',
  margin: '0',
};

const spanStyle = {
  fontWeight: '700',
  textDecoration: 'underline'
};

const displayDataCell = (label) => (
  <Col xs={2} style={cellStyle}>
      <span style={spanStyle}>{label}</span>
  </Col>
);

const AmortizationTableHeader = () => (
  <Container>
   <Row>
    {displayDataCell('Date')}
    {displayDataCell('Total')}
    {displayDataCell('Principal')}
    {displayDataCell('Interest')}
    {displayDataCell('Acc. Interest')}
    {displayDataCell('Balance')}
   </Row>
  </Container>
);

export default AmortizationTableHeader;
