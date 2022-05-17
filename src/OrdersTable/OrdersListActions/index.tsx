import React from "react"
import * as S from "./styles"

const OrdersActions = (props) => {
	const { className } = props

	return (
		<S.Block className={className}>
			<S.Actions>
				<S.ActionsItem>
					<S.Action onClick={() => console.log(true)}>
						<S.ShipIcn />
						<S.ActionText>Отгрузить</S.ActionText>
					</S.Action>
				</S.ActionsItem>
				<S.ActionsItem>
					<S.Action onClick={() => console.log(true)}>
						<S.ReloadIcn />
						<S.ActionText>Продлить</S.ActionText>
					</S.Action>
				</S.ActionsItem>
				<S.ActionsItem>
					<S.Action onClick={() => console.log(true)}>
						<S.DelIcn />
						<S.ActionText>Удалить</S.ActionText>
					</S.Action>
				</S.ActionsItem>
			</S.Actions>
		</S.Block>
	)
}

export default OrdersActions
