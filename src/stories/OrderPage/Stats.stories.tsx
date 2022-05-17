import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import OrderStats from "../../OrderPage/Order/OrderStats"

export default {
	title: "Order Page/Side Order Sum",
	component: OrderStats
} as ComponentMeta<typeof OrderStats>

const totalSum = {
	OrderItemSum: {
		Usd: {
			Value: 326.67,
			Currency: "USD"
		},
		NationalCurrency: {
			Value: 37566,
			Currency: "RUR"
		}
	}
}

const Template: ComponentStory<typeof OrderStats> = (args) => {
	return <OrderStats summ={totalSum.OrderItemSum} {...args} />
}

export const Primary = Template.bind({})
