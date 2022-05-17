import React from "react"
import * as S from "./styles"

const OrderCheckbox = (props) => {
	const { checked, setChecked, className } = props

	return (
		<S.Block className={className}>
			<S.StyledCheckbox nolabel={true} onChange={() => setChecked(!checked)} />
			<S.Nums isselected={checked}>
				{checked ? `1 резерв выбран` : `Выбрать все`}
			</S.Nums>
		</S.Block>
	)
}

export default OrderCheckbox
