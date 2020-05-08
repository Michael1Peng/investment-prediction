import http from 'axios'

http.defaults.baseURL = 'http://api.scutquant.com/tactics/';

async function fetchData(key, params) {
  let res = await http({
    method: 'get',
    url: key,
    params
  })
  let {data} = res
  debugger
  let chartData = {
    xData: data.dates.map(d => d.split('T')[0]),
    seriesData: [data.value, data.hushen]
  }
  return {
    chartData,
    answer: data.answer,
    rate: data.rate
  }
}

export {fetchData}
