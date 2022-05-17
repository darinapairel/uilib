import React, { useEffect, useState } from 'react'
import Order from '../Order'
import * as S from './styles'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { pluralize } from 'numeralize-ru'

import LoadMore from '../LoadMore'
import OrdersListMass from '../OrdersListMass'

dayjs.locale('ru')

const OrdersListPage = ({
	TbHead,
	TbBody = [],
}: {
	TbHead?: Array<string>
	TbBody?
}) => {
	// ({ className, ordersStore }: { className?, ordersStore: {loadMore, ordersLoading, ordersCount, formattedOrders, moreOrdersLoading, notShownItemsCount, ORDERS_PER_PAGE} }) => {
	const ordersPerPage = 1
	const orders = TbBody
	const [ordersIsLoaded, setOrdersLoaded] = useState(false)
	const [isMoreItemsLoading, setMoreItemsLoading] = useState(false)
	const [initialFormattedOrders, setInitialFormattedOrders] = useState([])
	const [notShownItemsCount, setNotShownItemsCount] = useState(0)
	const [ordersCount, setOrdersCount] = useState(0)
	const [shownOrdersCount, setShownOrdersCount] = useState(ordersPerPage)
	const [filteredOrders, setFilteredOrders] = useState([])
	const [shownOrders, setShownOrders] = useState([])

	useEffect(() => {
		setInitialFormattedOrders(
			orders.map(order => {
				return {
					title: order.orderID,
					href: `/order/${order.orderNum}`,
					num: `${order.orderItemsCount} ${pluralize(
						Number(order.orderItemsCount),
						'товар',
						'товара',
						'товаров'
					)}`,
					id: order.orderNum,
					source: order.sourceId,
					// wayBillStatus: order.wayBills?.wayBillStatus,
					// wayBillStatusName: order.wayBills?.wayBillStatusName,
					// wayBillIdMi: order.wayBills?.wayBillIdMi,
					created: dayjs(order.createdDate).format('D MMMM'),
					createdDate: order.createdDate,
					paymentDate: dayjs(order.paymentDate).format('D MMMM'),
					summ: order.orderSum,
					orderStatus: order.orderStatus,
					orderStatusCode: order.orderStatusCode,
					paymentType: order.paymentType,
					paymentStatus: order.paymentStatus,
				}
			})
		)
		setOrdersCount(initialFormattedOrders.length)
		setOrdersLoaded(true)
		setShownOrders(initialFormattedOrders.slice(0, ordersPerPage))
		setFilteredOrders(initialFormattedOrders)
		setNotShownItemsCount(initialFormattedOrders.length - shownOrdersCount)
	}, [ordersIsLoaded])

	// if (ordersLoading) {
	//   return (
	//     <S.Block>
	//       <Loader product />
	//     </S.Block>
	//   )
	// }

	// if (
	//   !ordersLoading &&
	//   ordersCount === 0
	// ) {
	//   return (
	//     <S.Block >
	//       <S.EmptyTitle>Нет товаров</S.EmptyTitle>
	//     </S.Block>
	//   )
	// }

	const onSearch = value => {
		const filteredData = initialFormattedOrders.filter(
			order => String(order.id).indexOf(value) > -1
		)
		const shownData = filteredData.slice(0, shownOrdersCount)
		setFilteredOrders(filteredData)
		setShownOrders(shownData)
		setNotShownItemsCount(filteredData.length - shownData.length)
	}
	const onDateSearch = value => {
		const start = new Date(value[0])
		const end = new Date(value[1])
		const isemptyDate = !value[0] && !value[1]

		const filteredData = initialFormattedOrders.filter(
			order =>
				new Date(order.createdDate) >= start &&
				new Date(order.createdDate) <= end
		)
		const shownData = filteredData.slice(0, shownOrdersCount)
		setFilteredOrders(filteredData)
		if (isemptyDate) setShownOrders(initialFormattedOrders)
		else setShownOrders(shownData)
		//добавить, чтоб если пустой инпут с датой сбрасывался фильтр и показывались все initialFormattedOrders
	}
	const onPaymentFilter = value => {
		//
		setFilteredOrders(
			initialFormattedOrders.filter(order => {
				console.log('order', order.paymentStatus, value)
				return (
					(value == 1 && order.paymentStatus === 'Оплачен') ||
					(value == 0 && order.paymentStatus === 'Не оплачен')
				)
			})
		)
	}
	const loadMoreOrders = () => {
		setMoreItemsLoading(true)
		const shownCount = shownOrdersCount + ordersPerPage
		setShownOrdersCount(shownCount)
		setShownOrders(filteredOrders.slice(0, shownCount))
		setNotShownItemsCount(ordersCount - shownCount)
		console.log('load', filteredOrders)
		setMoreItemsLoading(false)
	}

	return (
		<S.Block>
			<OrdersListMass
				onSearch={onSearch}
				onDateSearch={onDateSearch}
				onPaymentFilter={onPaymentFilter}
			/>
			<S.Head>
				{TbHead.map((str, index) => {
					switch (index) {
						case 0:
							return <S.Order>{str}</S.Order>
						case 1:
							return <S.Date type="created">{str}</S.Date>
						case 2:
							return <S.Status>{str}</S.Status>
						case 3:
							return <S.PaymentType>{str}</S.PaymentType>
						case 4:
							return <S.Date>{str}</S.Date>
						case 5:
							return <S.Summ>{str}</S.Summ>
						default:
							return null
					}
				})}
				{/*  вместо статического отображения заголовков табилцы по умолчанию, используем пропсы - массив строк заголовков 
                     сделать так, чтоб можно было добавлять не только 5 заголовков таблицы,
                     а больше/меньше и написать стили, чтоб отображалось читаемо
          <S.Order>Заказ</S.Order>
          <S.Date>Дата оформления</S.Date>
          <S.Status>Статус отгрузки</S.Status>
          <S.PaymentType>Тип оплаты</S.PaymentType>      
          <S.Date>Дата оплаты</S.Date> 
          <S.Summ>Сумма</S.Summ>
        */}
			</S.Head>

			{ordersIsLoaded && (
				<S.Body>
					{shownOrders.map((item, index) => {
						return (
							<S.Item
								key={`order-list-${index}`}
								// isHighlighted={item.isHighlighted}
							>
								<Order
									title={item.title}
									href={item.href}
									num={item.num}
									id={item.id}
									created={item.created}
									paymentType={item.paymentType}
									paymentDate={item.paymentDate}
									paymentStatus={item.paymentStatus}
									status={item.orderStatus}
									statusCode={item.orderStatusCode}
									source={item.source}
									summ={item.summ}
									className={''}
								/>
							</S.Item>
						)
					})}
				</S.Body>
			)}

			<LoadMore
				isMoreItemsLoading={isMoreItemsLoading}
				notShownItemsCount={notShownItemsCount} // orderCount - shownOrderCount
				onLoadMoreClick={loadMoreOrders}
				step={ordersPerPage}
			/>
		</S.Block>
	)
}

export default OrdersListPage
