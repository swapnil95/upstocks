import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  subscribe,
  unsubscribe,
  setInitialData
} from '../thunks'
import LiveChart from '../components/LiveChart'
import LiveTable from '../components/LiveTable'
import { formatData } from '../../utils'


const COMPONENT_MAP = {
  '/live-chart': LiveChart,
  '/live-table': LiveTable
}


class LiveChartContainer extends Component {
  componentDidMount() {
    const { subscribe, setInitialData } = this.props
    setInitialData().then(() => subscribe())
  }

  componentWillUnmount() {
    const { unsubscribe } = this.props
    unsubscribe()
  }

  getData = () => {
    const { data, location } = this.props
    return location.pathname === '/live-table' ? formatData('tabularData')(data) : data
  }

  render() {
    const { location } = this.props
    const ComponentToRender = COMPONENT_MAP[location.pathname]
    return (
      <ComponentToRender data={this.getData()} />
    )
  }
}

function mapStateToProps(state) {
  const { live } = state
  return {
    data: live.data,
    errorMessage: live.dataErrorMessage 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    subscribe,
    unsubscribe,
    setInitialData
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LiveChartContainer)
