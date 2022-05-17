import dayjs from "dayjs"
import "dayjs/locale/ru"

dayjs.locale("ru")

export const FormatType = {
	DAY_MONTH_LONG: "D MMMM",
	FULL: "DD.MM.YYYY",
	DAY_MONTH_YEAR_LONG: "D MMMM YYYY"
}

export const formatUntilDate = (date: string | Date, prefix = "до") => {
	const dateObject = dayjs(date)

	let formattedDate = dateObject.format("DD MMMM")

	const currentDate = dayjs()

	if (dateObject.year() - currentDate.year() > 0) {
		formattedDate = dateObject.format("DD.MM.YYYY")
	}

	return `${prefix} ${formattedDate}`
}

export const formatDate = (
	date: string | Date,
	format = FormatType.DAY_MONTH_LONG
) => {
	const dateObject = dayjs(date)
	return dateObject.format(format)
}

enum Unit {
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
export const dateDifference = (
	dateOne: Date,
	diff: Unit = Unit.day,
	dateTwo: Date = new Date()
) => {
	return dayjs(dateOne).diff(dayjs(dateTwo), diff)
}
export const dateFormatd = (date) => dayjs(date).format("DD.MM.YYYY")
