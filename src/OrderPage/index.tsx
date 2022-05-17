import React, { useState, useEffect } from 'react'
import Container from '../Container'
import * as S from './styles'
import {
	formatDate,
	FormatType,
	formatUntilDate,
	dateFormatd,
} from '../helpers/date'

const Order = ({ order, items }) => {
	const [initialFormattedOrder, setInitialFormattedOrder] = useState({})
	const [formattedItems, setFormattedItems] = useState([])
	const [orderIsLoaded, setOrderLoaded] = useState(false)

	useEffect(() => {
		setInitialFormattedOrder({
			title: order.SalesId,
			isEditable: order.Editable,
			comment: order.Comment,
			author: order.CreatedBy || '',
			companyName: order.CompanyName,
			TIN: order.ClientInn,
			contractId: order.ContractId,
			deliveryType: order.DeliveryType,
			city: order.WarehouseName,
			summ: order.OrderItemSum,
			// 	Usd: order.OrderItemSum.Usd,
			// 	NationalCurrency: order.OrderItemSum.NationalCurrency,
			// },
			// отвечает за график процесса заказа
			shipments: order.Shipments?.map(shipment => ({
				number: shipment.ShipmentNo,
				orderCount: shipment.OrderItemCount,
				orderSum: shipment.OrderItemSum.NationalCurrency.Value, // доработать
				states: shipment.ShipmentStates.map(state => ({
					date: state.ModifiedDate,
					statePhase: state.State ? state.State : state.Phase,
					activityType: state.ActivityType,
				})),
				colorBadge: shipment.ShipmentStates.reduce(
					(acc, i) =>
						i.ActivityType && i.ActivityType > acc ? i.ActivityType : acc,
					0
				),
				currentState: shipment.CurrentShipmentState,
				pickingListId: shipment.PickingListId,
				statusDilevery: shipment.Delivery?.Status,
			})),
			hasInvoice: order.HasInvoice, // hasDocs: order.HasDocs,
			createdDate: formatDate(order.CreatedDate, FormatType.FULL),
			hasWarehousePass: order.HasWarehousePass,
		})

		setFormattedItems(
			items.map(item => {
				const notFree =
					(item?.Qty || 0) -
					((item?.Reserve?.TransitQty || 0) +
						(item?.Reserve?.WarehouseQty || 0))
				return {
					itemId: item.Item.ItemId,
					title: item.Item.WareName,
					author: item.CreatedBy,
					info: item.Comment,
					summ: item.Item?.Price?.NationalCurrency?.PriceValue,
					nums: item.Qty,
					price: item.Item?.Price?.Usd.PriceValue, // NationalCurrency
					status: [], // что здесь должно быть
					reserves: [
						{
							title: 'Со склада',
							nums: item.Reserve.WarehouseQty,
						},
						{
							title: 'Из транзита',
							nums: item.Reserve.TransitQty,
						},
						{
							title: 'Не хватает',
							nums: notFree,
							error: true,
						},
					],
					date:
						item.Reserve.ExpirationDate &&
						formatUntilDate(item.Reserve.ExpirationDate),
					quantity: item.Qty,
					quantityError: notFree > 0,
					links: false,
					conditionId:
						item.Item.Options?.ConditionId === 'OK'
							? ''
							: item.Item.Options?.ConditionId,
					selected: false,
					productIndex: 0,
					dropExtraInfo: item?.Item?.ProductAvailableQty && {
						reserveWarehouse: {
							qty: item.Reserve.WarehouseQty,
							date: dateFormatd(item.Reserve.ExpirationDate),
						},
						availableWarehouse: item.Item.ProductAvailableQty.InWarehouse.Qty,
						notFreeReserves: item.Item.ProductAvailableQty.InWarehouse.NotFree,
						reserveTransite: item.Reserve.TransitQty,
						availableTransite: item.Item.ProductAvailableQty.InTransit.Qty,
						availableNotFreeTransite:
							item.Item.ProductAvailableQty.InTransit.NotFree,
						lacks: notFree,
					},
				}
			})
		)
		setOrderLoaded(true)
	}, [order, orderIsLoaded])
	useEffect(() => console.log(initialFormattedOrder), [initialFormattedOrder])

	return (
		<S.Page>
			<Container>
				{orderIsLoaded && (
					<S.Core>
						<S.Main>
							<S.Content order={initialFormattedOrder} />
							<S.Items items={formattedItems} />
						</S.Main>
						<S.Side item={initialFormattedOrder} />
					</S.Core>
				)}
			</Container>
		</S.Page>
	)
}

export default Order
