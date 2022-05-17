import React from "react"
import OrderItem from "../OrderItem"
import * as S from "./styles"

const OrderItems = ({ items }) => {
	// const [isLoaded, setLoading] = useState(false)

	// const fetchOrderFromApi = async () =>
	// {
	//   const fetched = await fetch('https://api.jsonserver.io/order/items', {
	//     method: 'GET',
	//     headers: {
	//       'X-Jsio-Token': '7f3529615707a4ef038347b22ac190cc'
	//     }
	//   })
	//   const items = await fetched.json()

	//   // setOrderItems(json)
	//   setLoading(true)
	//   // console.log('FETCHED', json)
	// }

	// useEffect( () => {
	//   fetchOrderFromApi()
	// }, [isLoaded] )

	return (
		<S.Block>
			<S.Content>
				<S.Head>
					<S.HeadCheck>&nbsp;</S.HeadCheck>
					<S.HeadTitle>Товар</S.HeadTitle>
					<S.HeadReserve>Детали</S.HeadReserve>
					<S.HeadShip>Отгрузка и резерв</S.HeadShip>
					<S.HeadQuantity>Количество</S.HeadQuantity>
					<S.HeadPrice>Стоимость</S.HeadPrice>
				</S.Head>

				<S.Body>
					{items.map((item) => {
						return (
							<S.Item
								key={`order-item-${item.productIndex}`}
								selected={item.selected}
							>
								<OrderItem
									// productIndex={item.productIndex}
									title={item.title}
									// href={item.href}
									// itemId={item.itemId}
									id={item.externalId}
									author={item.author}
									summ={item.summ}
									nums={item.nums}
									price={item.price}
									helper={item.helper}
									status={item.status}
									reserves={item.reserves}
									date={item.date}
									quantity={item.quantity}
									quantityError={item.quantityError}
									// links={item.links}
									conditionId={item.conditionId}
									dropExtraInfo={item.dropExtraInfo}
								/>
							</S.Item>
						)
					})}
				</S.Body>
			</S.Content>

			{/* <S.Summ>
        <S.SummNumber>
          {`Итого ${rootStore.orderStore.orderItemsCount} ${pluralize(
            rootStore.orderStore.orderItemsCount,
            'товар',
            'товара',
            'товаров'
          )}
          `}
        </S.SummNumber>
        <S.SummPrice>{rootStore.orderStore.formattedStat.summ}</S.SummPrice>
      </S.Summ> */}
		</S.Block>
	)
}

export default OrderItems
