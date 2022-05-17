import React from "react"
import * as S from "./styles"

const OrderOptions = ({
	className,
	isDisabled
}: {
	className?
	isDisabled?
}) => {
	return (
		<S.Block className={className}>
			<S.List>
				<S.Item>
					<S.StyledButton disabled={isDisabled}>
						<S.IcnExport />
						<S.Text>Экспорт</S.Text>
					</S.StyledButton>
				</S.Item>
				<S.Item>
					<S.StyledButton disabled={isDisabled}>
						<S.IcnDuplicate />
						<S.Text>Дублировать</S.Text>
					</S.StyledButton>
				</S.Item>
				<S.Item>
					<S.StyledButton disabled={isDisabled}>
						<S.IcnDel />
						<S.Text>Удалить</S.Text>
					</S.StyledButton>
				</S.Item>
			</S.List>
		</S.Block>
	)
}

export default OrderOptions
