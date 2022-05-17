import React from "react"
import * as S from "./styles"

const ReservesDropInfo = ({ className, data }: { className?; data }) => {
	if (!data) return <div>Нет информации</div>
	return (
		<S.StyledBlock className={className}>
			<S.StyledSection>
				<S.StyledHead>
					<S.StyledTitle>Резерв со склада </S.StyledTitle>
					<S.StyledNum>{data.reserveWarehouse.qty} шт</S.StyledNum>
				</S.StyledHead>
				{data.reserveWarehouse.qty > 0 && (
					<S.StyledHelper>до {data.reserveWarehouse.date}</S.StyledHelper>
				)}

				<S.StyledList>
					<S.StyledItem>
						<S.StyledText>Доступно на складе:</S.StyledText>
						<S.StyledNum>
							{data.availableWarehouse === -1
								? "?"
								: `${data.availableWarehouse} шт`}
						</S.StyledNum>
					</S.StyledItem>
					<S.StyledItem>
						<S.StyledText>В чужих резервах:</S.StyledText>
						<S.StyledNum>
							{data.notFreeReserves === -1 ? "?" : `${data.notFreeReserves} шт`}
						</S.StyledNum>
					</S.StyledItem>
				</S.StyledList>

				{data.notFreeReserves > 0 && (
					<S.StyledLink>Уточнить доступность</S.StyledLink>
				)}
			</S.StyledSection>
			<S.StyledSection>
				<S.StyledHead>
					<S.StyledTitle>Резерв из транзита</S.StyledTitle>
					<S.StyledNum>{data.reserveTransite} шт</S.StyledNum>
				</S.StyledHead>
				{data.reserveTransite > 0 && (
					<S.StyledHelper> до прихода на склад</S.StyledHelper>
				)}

				<S.StyledList>
					<S.StyledItem>
						<S.StyledText>Доступно в транзите:</S.StyledText>
						<S.StyledNum>
							{data.availableTransite === -1
								? "?"
								: `${data.availableTransite} шт`}
						</S.StyledNum>
					</S.StyledItem>
					<S.StyledItem>
						<S.StyledText>В чужих резервах:</S.StyledText>
						<S.StyledNum>
							{data.availableNotFreeTransite === -1
								? "?"
								: `${data.availableNotFreeTransite} шт`}
						</S.StyledNum>
					</S.StyledItem>
				</S.StyledList>

				{data?.notFreeReserves > 0 && (
					<S.StyledLink>Уточнить доступность</S.StyledLink>
				)}
			</S.StyledSection>

			<S.StyledSection>
				<S.StyledHead>
					<S.StyledTitle>Не хватает резерва</S.StyledTitle>
					<S.StyledNum>{data.lacks} шт</S.StyledNum>
				</S.StyledHead>

				<S.StyledLink>Запросить резерв</S.StyledLink>
			</S.StyledSection>
		</S.StyledBlock>
	)
}

export default ReservesDropInfo
