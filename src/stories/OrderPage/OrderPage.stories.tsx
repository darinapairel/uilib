import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Order from '../../OrderPage'
import items from '../../../items.json'

export default {
	title: 'Order Page/Main Page',
	component: Order,
} as ComponentMeta<typeof Order>

const Template: ComponentStory<typeof Order> = args => {
	const [fetchedOrder, setOrder] = useState([])
	const [isLoaded, setLoading] = useState(false)

	const fetchOrderFromApi = async () => {
		const fetched = await fetch('https://api.jsonserver.io/order', {
			method: 'GET',
			headers: {
				'X-Jsio-Token': '7f3529615707a4ef038347b22ac190cc',
			},
		})
		const json = await fetched.json()
		setOrder(json)
		setLoading(true)
		console.log('FETCHED', json)
	}
	useEffect(() => {
		fetchOrderFromApi()
	}, [])

	return isLoaded ? (
		<Order order={fetchedOrder} items={items.OrderItems} {...args} />
	) : (
		<div></div>
	)
}

export const OrderPage = Template.bind({})
