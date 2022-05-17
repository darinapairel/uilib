import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import OrderDocsList from '../../detailsOrderPage/OrderDocsList'

export default {
	title: 'Order Page/Side Order Docs',
	component: OrderDocsList,
} as ComponentMeta<typeof OrderDocsList>

const Template: ComponentStory<typeof OrderDocsList> = args => (
	<OrderDocsList hasInvoice={true} {...args} />
)

export const Primary = Template.bind({})
