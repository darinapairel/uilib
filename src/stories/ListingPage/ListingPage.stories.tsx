import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import OrdersListPage from "../../OrdersTable/OrdersList"
import HeaderBar from "../../Header/HeaderBar"
import * as vars from "../../helpers/vars"
import { titleH1 } from "../../helpers/mixins"
import "../../assets/reset.css"

export default {
	title: "Listing Page/Main Page",
	component: OrdersListPage
} as ComponentMeta<typeof OrdersListPage>

const Title = styled.h1`
	${titleH1}
	margin: 35px 0;
	display: block;
	color: ${vars.color.brand};
	flex: 0 0 auto;
	cursor: default;
`

const Template: ComponentStory<typeof OrdersListPage> = (args) => {
	const [fetchedOrders, setOrders] = useState([])
	const [isLoaded, setLoading] = useState(false)

	const fetchOrdersFromApi = async () => {
		const fetched = await fetch("https://api.jsonserver.io/orders", {
			method: "GET",
			headers: {
				"X-Jsio-Token": "7f3529615707a4ef038347b22ac190cc"
			}
		})
		const json = await fetched.json()
		setOrders(json.orders)
		setLoading(true)
		console.log("FETCHED")
		return json.orders
	}
	useEffect(() => {
		fetchOrdersFromApi()
	}, [isLoaded])
	return (
		<>
			<HeaderBar />
			<Title>Заказы</Title>
			{isLoaded && (
				<OrdersListPage
					TbBody={fetchedOrders}
					TbHead={[
						"Заказ",
						"Дата оформления",
						"Статус",
						"Тип оплаты",
						"Дата оплаты",
						"Сумма"
					]}
					{...args}
				/>
			)}
		</>
	)
}

export const OrdersTablePage = Template.bind({})
