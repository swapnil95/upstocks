import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import ReactHighstock from 'react-highcharts/ReactHighstock'

import SectionWrapper from 'app/common/section-wrapper'


class LiveChart extends Component {
  getConfig = () => {
    const { data } = this.props
    return {
      chart: {
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        events: {
          load: () => {}
        }
      },
      rangeSelector: {
        enabled: false
      },
      title: {
        text: 'Historical data'
      },
      series: [{
        type: 'ohlc',
        name: 'Live Data',
        data: data,
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

export default LiveChart
