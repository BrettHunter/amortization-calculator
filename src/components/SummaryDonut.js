import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class SummaryDonut extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Doughnut data={this.props.data} />
    );
  }
}

export default SummaryDonut;
