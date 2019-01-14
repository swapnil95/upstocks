import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchHistoricals } from '../thunks'
import HistoricalChart from '../components/HistoricalChart'


class HomeContainer extends Component {
  componentDidMount() {
     const { fetchHistoricals } = this.props
     fetchHistoricals()
  }

  render() {
    const { historicals, isLoading, errorMessage } = this.props
    return (
      <HistoricalChart
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={historicals}
      />
    )
  }
}

function mapStateToProps(state) {
  const { home } = state
  return {
    historicals: home.historicals.asMutable({ deep: true }),
    isLoading: home.areHistoricalsLoading,
    errorMessage: home.historicalsErrorMessage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHistoricals }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
