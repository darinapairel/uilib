import React from "react"
import * as S from "./styles"

const OrderContent = ({ className, order }: { className?; order? }) => {
	return (
		<S.Block className={className}>
			<S.Header>
				<S.Pre>
					<S.Title>{order.title}</S.Title>
					<S.Date>Заказ от {order.createdDate}</S.Date>
				</S.Pre>

				<S.After>
					<S.Name>{order.author}</S.Name>
				</S.After>
			</S.Header>

			<S.Body>
				{order.shipments?.map((item) => (
					<S.TimeLine key={item.number + item.orderCount} shipment={item} />
				))}
			</S.Body>
		</S.Block>
	)
}

export default OrderContent
