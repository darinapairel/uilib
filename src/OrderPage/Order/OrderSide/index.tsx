import React from 'react'
import * as S from './styles'

const OrderSide = ({ className, item }: { className?: string; item }) => {
	return (
		<S.Block className={className}>
			<S.Stats summ={item.summ} />
			<S.Docs hasInvoice={item.hasInvoice} />
			<S.Desc data={item} />
		</S.Block>
	)
}

export default OrderSide
