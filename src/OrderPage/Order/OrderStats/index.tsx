import React, { useState } from 'react'
import * as S from './styles'

const OrderStats = ({ className, summ }: { className?: string; summ }) => {
	const [sum, setSum] = useState(summ?.NationalCurrency.Value + ' ₽')

	const onChange = value => {
		if (value === 1) setSum(summ.Usd.Value + ' $')
		else if (value === 2) setSum(summ.NationalCurrency.Value + ' ₽')
	}

	return (
		<S.Block className={className}>
			<S.Stat summ={sum}>
				<S.Type
					onChange={onChange}
					options={[
						{
							label: 'В долларах ($)',
							value: 1,
						},
						{
							label: 'В рублях (₽)',
							value: 2,
						},
					]}
				/>
			</S.Stat>
		</S.Block>
	)
}

export default OrderStats
