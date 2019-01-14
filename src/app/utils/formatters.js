import format from 'date-fns/format'

const formatterMap = {
  'historical': formatHistoricals,
  'liveData': formatLiveData,
  'tabularData': formatToTabular
}

export function formatData(type) {
  return formatterMap[type]
}

function formatHistoricals(data) {
  return data.reverse().map(d => d.split(',').slice(0, 5).map(c => parseFloat(c)))
}

function formatLiveData(data) {
  return data.split(',').slice(0, 5).map(dataItem => parseFloat(dataItem))
}

function formatToTabular(data) {
  const tabularData = []
  data.forEach(dataItem => {
    const item = {
      juncture: format(new Date(dataItem[0]), 'MM/DD/YYYY HH:MM:SSS'),
      open: dataItem[1],
      high: dataItem[2],
      low: dataItem[3],
      close: dataItem[4]
    }
    tabularData.push(item)
  })
  return tabularData
}