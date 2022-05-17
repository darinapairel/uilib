import React from "react"
import * as S from "./styles"

export const StyledSearchIcn = () => (
	<S.Link>
		{" "}
		<S.StyledIcn />{" "}
	</S.Link>
)

const OrdersSearch = ({ onChange }: { onChange? }) => {
	return (
		<S.SearchWrapper>
			<S.Search onChange={onChange} placeholder="Введите номер заказа" />
			<StyledSearchIcn />
		</S.SearchWrapper>
	)
}

export default OrdersSearch
