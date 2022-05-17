import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
import * as S from './styles'
// import rootStore from 'stores/RootStore'
// import { observer } from 'mobx-react-lite'

const Order = ({
	title,
	author,
	id,
	summ,
	nums,
	price,
	helper = false,
	status = [],
	reserves = [],
	date,
	quantity,
	quantityError,
	conditionId,
	dropExtraInfo,
	className,
}: {
	title
	author
	id?
	summ
	nums
	price
	helper
	status
	reserves
	date
	quantity
	quantityError
	conditionId
	dropExtraInfo
	className?
}) => {
	const [qty, setQty] = useState(quantity || 1)
	useEffect(() => {
		if (quantity) setQty(quantity)
	}, [quantity])

	return (
		<S.Block className={className}>
			<S.MobBadges>
				{conditionId && <S.Defect>{conditionId}</S.Defect>}
			</S.MobBadges>

			<S.Inner>
				{/* <S.Options>
          <S.StyledCheckbox
            variant="base"
            ariaLabel="Выбрать товар"
            id={productIndex}
            name={productIndex}
            checked={checked}
            onChange={handleSelectItem}
          />
        </S.Options> */}

				<S.Order>
					<S.Main>
						<S.Content>
							<S.Title>{title}</S.Title>
						</S.Content>
					</S.Main>
				</S.Order>

				<S.Author>
					{helper && (
						<S.Spoiler title="2 строки">
							<p>Строка один</p>
							<p>Строка два</p>
						</S.Spoiler>
					)}
					<S.AuthorName>{author}</S.AuthorName>
					{id && <S.AuthorId>ID {id}</S.AuthorId>}
				</S.Author>

				<S.Shipment>
					{status.map((item, index) => {
						return (
							<S.Status
								key={`status-${index}`}
								index={item.index}
								status={item.status}
								level={item.level}
								nums={item.nums}
							/>
						)
					})}
					{reserves.length > 0 &&
						reserves.some(reserve => reserve.nums > 0) && (
							<S.Reserves
								variant="short"
								placeholder={date ? `Резерв ${date}` : null}
								data={reserves}
								dropExtraInfo={dropExtraInfo}
							/>
						)}
					{reserves.length < 2 && reserves[0].error && (
						<S.ReservesError>
							{reserves[0].title} {reserves[0].nums}шт
						</S.ReservesError>
					)}
					{date && <S.ShipmentDate>{date}</S.ShipmentDate>}
				</S.Shipment>

				<S.Quantity>
					<S.Update
						error={quantityError}
						num={qty}
						text="Обновить резерв?"
						onClick={() => console.log('заглушка')}
						disabled={false}
					>
						<S.Number
							value={qty}
							variant="goods"
							error={quantityError}
							onChange={value => setQty(value)}
							disabled={false}
						/>
					</S.Update>
				</S.Quantity>

				<S.Summ>
					<S.SummAll>{summ} ₽</S.SummAll>
					<S.SummCalc>
						{nums} × {price} ₽
					</S.SummCalc>
				</S.Summ>

				<S.MobInfo title={author}>
					<S.AuthorId>ID {id}</S.AuthorId>
				</S.MobInfo>
			</S.Inner>
		</S.Block>
	)
}

export default Order
