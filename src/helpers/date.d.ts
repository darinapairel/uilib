import "dayjs/locale/ru"
export declare const FormatType: {
  DAY_MONTH_LONG: string
  FULL: string
  DAY_MONTH_YEAR_LONG: string
}
export declare const formatUntilDate: (
  date: string | Date,
  prefix?: string
) => string
export declare const formatDate: (
  date: string | Date,
  format?: string
) => string
declare enum Unit {
  day = "day",
  millisecond = "millisecond",
  second = "second",
  minute = "minute",
  hour = "hour",
  month = "month",
  year = "year",
  date = "date",
  milliseconds = "milliseconds",
  seconds = "seconds",
  minutes = "minutes",
  hours = "hours",
  days = "days",
  months = "months",
  years = "years",
  dates = "dates"
}
export declare const dateDifference: (
  dateOne: Date,
  diff?: Unit,
  dateTwo?: Date
) => number
export declare const dateFormatd: (date: any) => string
export {}
