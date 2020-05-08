interface ParamBody {
  a: string,
  b: string,
  c: number,
  d: number
}

interface ChartData {
  xData: Array<string>,
  seriesData: Array<Array<string>>
}

interface Response {
  chartData: ChartData,
  answer: Array<Array<string>>,
  rate: number
}

export function fetchData(key: string, params: ParamBody): Response
