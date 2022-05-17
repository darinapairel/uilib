import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { formatUntilDate, dateFormatd } from "../../helpers/date"
import Order from "../../OrderPage/Order/OrderItem"
import items from "../../../items.json"

const item = items.OrderItems[0]
export default {
	title: "Order Page/Order Item Example",
	component: Order
} as ComponentMeta<typeof Order>

const Template: ComponentStory<typeof Order> = (args) => {
	const notFree =
		(item?.Qty || 0) -
		((item?.Reserve?.TransitQty || 0) + (item?.Reserve?.WarehouseQty || 0))
	return (
		<Order
			itemId={item.Item.ItemId}
			id={item.Id}
			title={item.Item.WareName}
			author={item.CreatedBy}
			summ={item.Item?.Price?.NationalCurrency?.PriceValue}
			nums={item.Qty}
			price={item.Item?.Price?.Usd.PriceValue} // NationalCurrency
			status={[]} // что здесь должно быть
			reserves={[
				{
					title: "Со склада",
					nums: item.Reserve.WarehouseQty
				},
				{
					title: "Из транзита",
					nums: item.Reserve.TransitQty
				},
				{
					title: "Не хватает",
					nums: notFree,
					error: true
				}
			]}
			date={
				item.Reserve.ExpirationDate &&
				formatUntilDate(item.Reserve.ExpirationDate)
			}
			quantity={item.Qty}
			quantityError={notFree > 0}
			links={false}
			conditionId={
				item.Item.Options?.ConditionId === "OK"
					? ""
					: item.Item.Options?.ConditionId
			}
			selected={false}
			productIndex={0}
			dropExtraInfo={
				item?.Item?.ProductAvailableQty && {
					reserveWarehouse: {
						qty: item.Reserve.WarehouseQty,
						date: dateFormatd(item.Reserve.ExpirationDate)
					},
					availableWarehouse: item.Item.ProductAvailableQty.InWarehouse.Qty,
					notFreeReserves: item.Item.ProductAvailableQty.InWarehouse.NotFree,
					reserveTransite: item.Reserve.TransitQty,
					availableTransite: item.Item.ProductAvailableQty.InTransit.Qty,
					availableNotFreeTransite:
						item.Item.ProductAvailableQty.InTransit.NotFree,
					lacks: notFree
				}
			}
			{...args}
		/>
	)
}

export const Primary = Template.bind({})

// {
//   itemId: item.Item.ItemId,
//   title: item.Item.WareName,
//   author: item.CreatedBy,
//   info: item.Comment,
//   summ: item.Item?.Price?.NationalCurrency?.PriceValue,
//   nums: item.Qty,
//   price:  item.Item?.Price?.Usd.PriceValue, // NationalCurrency
//   status: [], // что здесь должно быть
//   reserves: [
//     {
//       title: 'Со склада',
//       nums: item.Reserve.WarehouseQty
//     },
//     {
//       title: 'Из транзита',
//       nums: item.Reserve.TransitQty
//     },
//     {
//       title: 'Не хватает',
//       nums: notFree,
//       error: true
//     }
//   ],
//   date: item.Reserve.ExpirationDate && formatUntilDate(item.Reserve.ExpirationDate),
//   quantity: item.Qty,
//   quantityError: notFree > 0,
//   links: false,
//   conditionId:
//     item.Item.Options?.ConditionId === 'OK'
//             ? ''
//             : item.Item.Options?.ConditionId,
//   selected: false,
//   productIndex:0,
//   dropExtraInfo: item?.Item?.ProductAvailableQty && {
//     reserveWarehouse: {
//       qty: item.Reserve.WarehouseQty,
//       date: dateFormatd(item.Reserve.ExpirationDate)
//     },
//     availableWarehouse: item.Item.ProductAvailableQty.InWarehouse.Qty,
//     notFreeReserves: item.Item.ProductAvailableQty.InWarehouse.NotFree,
//     reserveTransite: item.Reserve.TransitQty,
//     availableTransite: item.Item.ProductAvailableQty.InTransit.Qty,
//     availableNotFreeTransite:
//       item.Item.ProductAvailableQty.InTransit.NotFree,
//     lacks: notFree
//   }
// }
