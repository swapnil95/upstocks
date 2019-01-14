import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import ReactHighstock from 'react-highcharts/ReactHighstock'

import withNetworkStatus from 'app/common/hoc/withNetworkStatus'
import SectionWrapper from 'app/common/section-wrapper'


class HistoricalChart extends Component {
  getConfig = () => {
    const { data } = this.props
    return {
      rangeSelector: {
        enabled: false
      },
      title: {
        text: 'Historical data'
      },
      series: [{
        type: 'ohlc',
        name: 'Historical Chart',
        data,
      }]
    }
  }

  render() {
    return (
      <SectionWrapper>
        <Paper square={true}>
          <ReactHighstock config={this.getConfig()} />
        </Paper>
      </SectionWrapper>
    )
  }
}

export default withNetworkStatus(HistoricalChart)
