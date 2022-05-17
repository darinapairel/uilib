import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import OrderDescription from "../../OrderPage/Order/OrderDescription"

export default {
	title: "Order Page/Side Order Description",
	component: OrderDescription
} as ComponentMeta<typeof OrderDescription>

const Template: ComponentStory<typeof OrderDescription> = (args) => (
	<OrderDescription
		data={{
			companyName: 'ООО "Фирма 2К"',
			TIN: "2725002665",
			contractId: "27/05-17",
			deliveryType: "Самовывоз",
			author: "Герловина Е.",
			createdDate: "2022-03-11T00:00:00",
			city: "СПб - Шушары"
		}}
		{...args}
	/>
)

export const Primary = Template.bind({})
