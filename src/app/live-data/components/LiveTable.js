import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Paper from '@material-ui/core/Paper'

import SectionWrapper from '../../common/section-wrapper'


const columns = [{
    Header: 'Juncture',
    accessor: 'juncture' // String-based value accessors!
  }, {
    Header: 'Open',
    accessor: 'open',
  }, {
    Header: 'High',
    accessor: 'high',
  }, {
    Header: 'Low',
    accessor: 'low',
  }, {
    Header: 'Close',
    accessor: 'close',
  }]

function LiveTable(props) {
  const { data } = props
  return (
    <SectionWrapper>
      <Paper square={true}>
        <ReactTable
          columns={columns}
          data={data}
          defaultPageSize={10}
        />
      </Paper>
    </SectionWrapper>
  )
}

export default LiveTable
