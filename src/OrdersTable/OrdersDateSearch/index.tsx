import React, { useEffect, useState } from "react"
import ruLocale from "date-fns/locale/ru"
import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"
import * as S from "./styles"

const OrdersDateSearch = ({ onDateSearch }: { onDateSearch? }) => {
	const [dateRange, setDateRange] = useState([null, null])
	const [startDate, endDate] = dateRange

	useEffect(() => onDateSearch(dateRange), [dateRange])
	return (
		<S.Wrapper>
			<DatePicker
				closeOnScroll={true}
				customInput={<S.StyledInput />}
				locale={ruLocale}
				dateFormat="dd MMMM"
				monthsShown={2}
				selectsRange={true}
				selected={startDate}
				startDate={startDate}
				endDate={endDate}
				onChange={(update) => {
					setDateRange(update)
					// console.log("UPDATE", !update[0], !!update[1])
				}}
				isClearable={true}
				placeholderText="Введите промежуток времени"
			/>
		</S.Wrapper>
	)
}

export default OrdersDateSearch
