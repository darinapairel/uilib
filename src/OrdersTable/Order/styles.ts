import styled, { css } from "styled-components"
import * as vars from "../../helpers/vars"
import { lineHeight, fontSmall, fontBase } from "../../helpers/mixins"

export const Block = styled.div``

export const Link = styled.a`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 55px;
	&:hover: {
		color: rgb(88, 149, 225);
	}
	text-decoration: none !important;
`

export const Subtitle = styled.b`
	${fontSmall}
	display: block;
	margin-bottom: 12px;
	font-weight: 500;
	cursor: default;
	color: ${vars.color.muted};
`
export const List = styled.ul`
	${fontSmall}
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin-bottom: -4px;
	color: ${vars.color.muted};
	cursor: default;

	${vars.media.desktop} {
		display: none;
	}
`
export const ListItem = styled.li`
	position: relative;
	margin-bottom: 4px;
	margin-left: 5px;
	padding-left: 10px;

	&::before {
		content: "";
		width: 3px;
		height: 3px;
		background: ${vars.color.price};
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&:first-child {
		margin-left: 0;
		margin-right: 5px;
		padding-left: 0;

		&::before {
			content: none;
		}
	}
`
export const Empty = styled.div`
	${fontSmall}
	color: ${vars.color.price};
`

export const Inner = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;

	${vars.media.desktop} {
		flex-wrap: wrap;
	}
`
export const Options = styled.div`
	width: 16px;
	flex: 0 0 auto;
	margin-right: 16px;

	${vars.media.desktop} {
		position: absolute;
		left: 0;
		top: 0;
	}
`
export const Order = styled.div`
	width: 100%;
	min-width: 1px;
	flex: 0 1 auto;
`
{
	/* первый элемент строки заказа (столбец Заказ) */
}
export const Main = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	max-width: 100%;
	margin-bottom: -8px;
`
export const Actions = styled.ul`
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	margin-right: 16px;
	margin-bottom: 8px;

	${vars.media.hd} {
		width: 100%;
		order: 5;
		margin-top: 16px;
	}

	${vars.media.desktop} {
		width: auto;
		order: 2;
		margin-top: 12px;
	}

	${vars.media.phabletSmall} {
		margin-right: 12px;
	}
`
export const Action = styled.li`
	margin-right: 8px;
	line-height: 0;

	&:last-child {
		margin-right: 0;
	}
`
// export const ActionEdit = styled(Action)``
// export const Edit = styled(GoodsEdit)`
//   ${vars.media.desktop} {
//     color: ${vars.color.links};
//   }
// `
// export const Subscribe = styled(GoodsSubscribe)`
//   ${vars.media.desktop} {
//     color: ${vars.color.links};
//   }
// `
export const Title = styled.a`
	font-size: ${vars.font.base};
	line-height: ${lineHeight(vars.font.base, "16px")};
	vertical-align: top;
	font-weight: 700;
	color: ${vars.color.text};
	transition: color ${vars.trans.base};
	text-decoration: none;
	margin-right: 12px;

	&:hover {
		text-decoration: none;
		color: ${vars.color.links};
	}

	${vars.media.desktop} {
		font-size: ${vars.font.medium};
		line-height: ${lineHeight(vars.font.medium, "16px")};
		margin-right: 0;
		padding-right: 80px;
		width: 100%;
	}
`

export const Nums = styled.span`
	${fontSmall}
	display: inline-block;
	vertical-align: middle;
	cursor: default;
	color: ${vars.color.muted};
	margin-top: 1px;

	${vars.media.hd} {
		display: block;
		width: 100%;
		margin-top: 4px;
	}

	${vars.media.desktop} {
		${fontBase}
		display: inline-block;
		vertical-align: middle;
		width: auto;
		color: ${vars.color.price};
		order: 5;
		margin-top: 12px;
	}
`
// export const Info = styled(GoodsMsg)`
//   width: calc(100% + 12px);
//   margin-left: -12px;
//   margin-top: 16px;

//   ${vars.media.desktop} {
//     display: none !important;
//   }
// `
// export const InfoMob = styled(GoodsMsg)`
//   width: calc(100% + 30px);
//   margin-left: -12px;
//   margin-top: 12px;
//   display: none;

//   ${vars.media.desktop} {
//     display: block;
//   }

//   ${vars.media.phablet} {
//     margin-left: 0;
//   }
// `

{
	/* четвертый элемент строки заказа (столбец Тип оплаты) */
}
export const Payment = styled.div`
	width: 180px;
	flex: 0 0 auto;
	margin-left: 40px;

	${vars.media.preWide} {
		width: 160px;
		margin-left: 20px;
	}
`
export const CreateDate = styled.div`
	padding-left: 90px;
	flex: 0 0 auto;
	margin-left: auto;
	min-width: 250px;
`

{
	/* оберточный элемент строки заказа (оборачивает столбец Дата ) */
}
export const Shipment = styled.div`
	padding-left: 40px;
	flex: 0 0 auto;
	margin-left: auto;
	min-width: 250px;

	${vars.media.preWide} {
		width: 160px;
		margin-left: 20px;
	}
`
{
	/* второй и пятый элемент строки заказа (столбец Дата оформления и Дата оплаты) */
}
export const Date = styled(Subtitle)`
	${vars.media.desktop} {
		position: absolute;
		right: 0;
		top: 0;
		color: ${vars.color.price};
		font-weight: 400;
		font-size: ${vars.font.base};
	}
`
{
	/* третий элемент строки заказа (столбец Статус посылки (заказа)) */
}
export const Status = styled.div`
	width: 260px;
	margin-left: 40px;
	flex: 0 0 auto;
	min-width: 1px;

	${vars.media.preWide} {
		width: 160px;
		margin-left: 20px;
	}

	${vars.media.desktop} {
		width: 100%;
		margin: 0;
		margin-top: 20px;
	}
`
export const StatusEl = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 100%;
	min-width: 1px;

	& + & {
		margin-top: 20px;
	}
`
export const StatusShort = styled.div`
	max-width: 100%;
	min-width: 1px;

	${vars.media.desktop} {
		padding-right: 10px;
		width: 50%;
	}
`
export const StatusFull = styled.div`
	display: none;
	width: 50%;
	padding-left: 10px;

	${vars.media.desktop} {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		text-align: right;
	}
`

export const StatusText = styled.p<{ level: number; type: string }>`
	margin-left: 8px;
	display: inline-block;
	vertical-align: middle;
	font-weight: 700;
	cursor: default;
	color: ${vars.color.text};
	margin-top: 6px;
	padding-left: 26px;
	font-size: ${vars.font.small};
	${(props) =>
		props.type === "paymentType" &&
		css`
			font-weight: 300;
		`}
`
{
	/* Шестой элемент строки заказа (столбец Сумма) */
}
export const Summ = styled.div`
	width: 110px;
	margin-left: 40px;
	flex: 0 0 auto;
	text-align: right;

	${vars.media.preWide} {
		margin-left: 20px;
	}

	${vars.media.desktop} {
		display: none;
	}
`
export const SummEl = styled.div`
	& + & {
		margin-top: 20px;
	}
`
export const SummPrice = styled.div`
	font-weight: 700;

	${vars.media.phabletSmall} {
		font-size: ${vars.font.medium};
	}
`
export const SummStatus = styled.span<{ paymentStatusCode: number }>`
	${fontSmall}
	margin-top: 12px;
	display: block;

	${(props) =>
		props.paymentStatusCode == 2 &&
		css`
			color: ${vars.color.accent};
		`}

	${(props) =>
		props.paymentStatusCode == 1 &&
		css`
			color: #f4b550;
		`}

  ${(props) =>
		props.paymentStatusCode == 0 &&
		css`
			color: ${vars.color.important};
		`}

  ${vars.media.phabletSmall} {
		font-size: ${vars.font.base};
		margin-top: 4px;
		max-width: 100px;
	}
`
// export const MobAuthor = styled(GoodsAuthor)`
//   display: none;
//   margin-top: 16px;

//   ${vars.media.desktop} {
//     display: block;
//   }
// `
