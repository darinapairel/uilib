import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import OrdersListPage from "../../OrdersTable/OrdersList"

import "../../assets/reset.css"
import orders from "../../../db.json"

export default {
	title: "Listing Page/Table",
	component: OrdersListPage
} as ComponentMeta<typeof OrdersListPage>
const Template: ComponentStory<typeof OrdersListPage> = (args) => (
	<OrdersListPage
		TbBody={orders.orders}
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
)

export const OrdersTable = Template.bind({})
