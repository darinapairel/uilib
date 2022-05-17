import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import LoadMore from "../../OrdersTable/LoadMore"

export default {
	title: "Listing Page/Load More button",
	component: LoadMore
} as ComponentMeta<typeof LoadMore>

const Template: ComponentStory<typeof LoadMore> = (args) => {
	return <LoadMore {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
	notShownItemsCount: 40,
	step: 10
}
