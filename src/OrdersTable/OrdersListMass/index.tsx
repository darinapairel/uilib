import React, { useState, useEffect, useRef, useCallback } from "react"
import * as S from "./styles"
import * as vars from "../../helpers/vars"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import useWindowDimensions from "../../helpers/useWindowDimensions"
import OrdersSearch from "../OrdersSearch"
import OrdersDateSearch from "../OrdersDateSearch"

import _debounce from "lodash/debounce"

const payment = [
	{
		label: "Оплаченные",
		value: "1"
	},
	{
		label: "Неоплаченные",
		value: "0"
	}
]

const OrdersListMass = (props) => {
	const { className, onSearch, onDateSearch, onPaymentFilter } = props
	const [searchString, setSearchString] = useState("")
	const [skipFirstRender, setSkipFirstRender] = useState(true)
	const [checked, setChecked] = useState(false)
	const [actions, setActions] = useState(false)
	const { width } = useWindowDimensions()
	const block = useRef(null)

	useEffect(() => {
		if (width <= vars.breakpoint.phablet) {
			actions
				? disableBodyScroll(block.current)
				: enableBodyScroll(block.current)
		} else {
			enableBodyScroll(block.current)
		}
	}, [actions, width])

	const onSearchStringChange = (e) => {
		const value = e.currentTarget.value
		setSearchString(value)
		onSearch(value)
	}

	const debouncedHandler = useCallback(
		_debounce(async (searchString) => {
			setSearchString(searchString)
		}, 1000),
		[]
	)

	useEffect(() => {
		if (skipFirstRender) {
			setSkipFirstRender(false)
		} else {
			debouncedHandler(searchString)
		}
	}, [searchString])

	return (
		<>
			<S.Block className={className}>
				<S.Wrapper>
					<OrdersSearch onChange={onSearchStringChange} />
					<OrdersDateSearch onDateSearch={onDateSearch} />

					<S.Drops>
						<S.Drop
							mod={false}
							options={payment}
							position="right"
							placeholder="Статус оплаты"
							onChange={onPaymentFilter}
						/>
					</S.Drops>

					<S.Actions
						ref={block}
						ischecked={checked}
						onChange={() => setChecked(!checked)}
						isvisible={actions}
					>
						<S.ActionsBlock />
					</S.Actions>
				</S.Wrapper>
			</S.Block>

			<S.Overlay onClick={() => setActions(false)} isopened={actions} />
		</>
	)
}

export default OrdersListMass
