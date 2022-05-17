import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import OrdersDateSearch from "../../OrdersTable/OrdersDateSearch"

export default {
	title: "Listing Page/Calendar dropdown input",
	component: OrdersDateSearch
} as ComponentMeta<typeof OrdersDateSearch>

const Template: ComponentStory<typeof OrdersDateSearch> = (args) => (
	<OrdersDateSearch {...args} />
)

export const Primary = Template.bind({})
