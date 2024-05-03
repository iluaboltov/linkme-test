//TODO CHANGE TYPE OF dayOfWeek TO ENUM
type ChartDate = {
  date: string,
  dayOfWeek: string
}

export type ChartRecord = {
  data: number[],
  dates: ChartDate[]
}