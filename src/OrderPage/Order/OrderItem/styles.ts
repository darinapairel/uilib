import styled, { css } from "styled-components"
import * as vars from "../../../helpers/vars"
import { lineHeight, fontMedium, link, fontBase } from "../../../helpers/mixins"
import Checkbox from "../../../Checkbox"
import GoodsSubscribe from "../../../goods/GoodsSubscribe"
import GoodsEdit from "../../../goods/GoodsEdit"
import GoodsMsg from "../../../goods/GoodsMsg"
// import ErrorsAlert from 'elements/ErrorsAlert'
import InputNumber from "../../../InputNumber"
import OrderItemHelper from "./OrderItemHelper"
import OrderItemStatus from "./OrderItemStatus"
import OrderItemInfo from "./OrderItemInfo"
// import OrderItemReserves from 'ui/order/OrderItemReserves'
import GoodsReserves from "../../../goods/GoodsReserves"
import BadgeAttention from "../../../badges/BadgeAttention"
import InputUpdate from "../../../InputUpdate"

export const Block = styled.div<{ selected? }>``
export const MobBadges = styled.div`
	display: none;
	margin-bottom: 12px;

	&:empty {
		display: none;
	}

	${vars.media.phablet} {
		display: block;
	}
`
export const Inner = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
	padding-left: 32px;

	${vars.media.fullhd} {
		flex-wrap: wrap;
	}

	${vars.media.phabletSmall} {
		padding-left: 28px;
	}
`
export const Options = styled.div`
	width: 16px;
	flex: 0 0 auto;
	margin-right: 16px;

	${vars.media.fullhd} {
		position: absolute;
		left: 0;
		right: 0;
	}
`
export const StyledCheckbox = styled(Checkbox)`
	vertical-align: top;
`

export const Order = styled.div`
	width: 100%;
	min-width: 1px;
	flex: 0 1 auto;

	${vars.media.fullhd} {
		flex: 0 0 auto;
		width: 100%;
		margin-bottom: 20px;
	}

	${vars.media.phablet} {
		margin-bottom: 12px;
	}
`
export const Main = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 100%;
	min-width: 1px;
`
export const Cover = styled.div<{ isempty }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	overflow: hidden;
	border-radius: 8px;
	user-select: none;
	flex: 0 0 auto;
	margin-right: 16px;

	${(props) =>
		props.isempty &&
		css`
			background: ${vars.color.page};
		`}
`
export const Content = styled.div`
	width: 100%;
	flex: 0 1 auto;
	min-width: 1px;
`
export const Info = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 8px;
`
export const InfoList = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
`
export const InfoItem = styled.li`
	padding-left: 8px;
	margin-left: 8px;
	color: ${vars.color.muted};
	position: relative;

	&::before {
		content: "";
		border-radius: 50%;
		width: 3px;
		height: 3px;
		background: ${vars.color.price};
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&:first-child {
		padding-left: 0;
		margin-left: 0;
	}

	&:first-child::before {
		content: none;
	}
`
export const InfoLink = styled.a`
	color: ${vars.color.muted};

	&:hover {
		color: ${vars.color.links};
	}
`

export const Title = styled.a`
	font-size: ${vars.font.middle};
	line-height: ${lineHeight(vars.font.middle, "22px")};
	vertical-align: top;
	font-weight: 700;
	color: ${vars.color.text};
	transition: color ${vars.trans.base};
	text-decoration: none;

	&:hover {
		text-decoration: none;
		color: ${vars.color.links};
	}
`
export const Footer = styled.div`
	margin-top: 16px;

	${vars.media.phablet} {
		display: none;
	}
`
export const Actions = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`
export const Action = styled.li`
	margin-right: 8px;
	line-height: 0;

	&:last-child {
		margin-right: 0;
	}
`
export const Other = styled.li`
	margin-right: 20px;

	${Action} + & {
		margin-left: 12px;
	}

	&:last-child {
		margin-right: 0;
	}
`

export const Edit = styled(GoodsEdit)``
export const Subscribe = styled(GoodsSubscribe)`
	${vars.media.phablet} {
		color: ${vars.color.links};
	}
`
export const Defect = styled(BadgeAttention)``
export const Link = styled.a`
	${link}
	font-weight: 500;
`

export const Comment = styled(GoodsMsg)`
	width: calc(100% + 12px);
	margin-left: -12px;
	margin-top: 16px;
`

export const Author = styled.div`
	flex: 0 0 auto;
	width: 176px;
	margin-left: auto;
	padding-left: 20px;
	font-size: ${vars.font.small};
	line-height: ${lineHeight(vars.font.small, "20px")};
	color: ${vars.color.muted};

	${vars.media.fullhd} {
		margin-left: 80px;
		padding-left: 0;
		width: 150px;
	}

	${vars.media.desktop} {
		display: none;
	}
`
export const AuthorName = styled.span`
	display: block;
	font-weight: 500;
	color: ${vars.color.text};
`
export const AuthorId = styled.span`
	display: block;
`
export const Spoiler = styled(OrderItemHelper)``

export const Shipment = styled.div`
	flex: 0 0 auto;
	margin-left: 24px;
	width: 144px;

	${vars.media.desktop} {
		margin-left: 80px;
	}

	${vars.media.phablet} {
		width: 100%;
		padding-left: 110px; // 80px + 30
		margin-left: 0;
		margin-bottom: 16px;
		position: relative;
	}
`

export const MobSubscribe = styled.div`
	position: absolute;
	left: 80px;
	top: -1px;
	display: none;

	${vars.media.phablet} {
		display: block;
	}
`
export const Status = styled(OrderItemStatus)`
	margin-bottom: 3px;

	&:last-child {
		margin-bottom: 0;
	}
`
export const Reserves = styled(GoodsReserves)`
	margin-bottom: 3px;
	padding-left: 30px;

	&:last-child {
		margin-bottom: 0;
	}
`

export const ReservesError = styled.p`
	${fontBase}
	color: ${vars.color.important};
	margin-top: 4px;
	display: none;

	${vars.media.hd} {
		display: block;
	}
`

export const ShipmentDate = styled.span`
	display: block;
	padding-left: 30px;
	color: ${vars.color.muted};
	font-size: ${vars.font.small};
	cursor: default;
	margin-top: 7px;

	${vars.media.phablet} {
		display: none;
	}
`

export const Quantity = styled.div`
	flex: 0 0 auto;
	width: 74px;
	margin-left: 14px;

	${vars.media.fullhd} {
		margin-left: auto;
		width: 68px;
	}

	${vars.media.phablet} {
		margin-left: 80px;
		width: 60px;
	}
`

export const Update = styled(InputUpdate)`
	position: relative;
	display: inline-block;
	vertical-align: top;

	${vars.media.notebook} {
		display: block;
	}
`

export const Number = styled(InputNumber)`
	width: 68px;

	${vars.media.phablet} {
		width: 100%;
	}
`

export const Summ = styled.div`
	flex: 0 0 auto;
	margin-left: 20px;
	width: 116px;
	text-align: right;
	padding-right: 18px;

	${vars.media.fullhd} {
		padding-right: 0;
		width: 100px;
	}

	${vars.media.phablet} {
		width: auto;
		text-align: left;
		margin-left: 16px;
	}
`
export const SummAll = styled.span`
	display: block;
	font-weight: 700;
	font-size: ${vars.font.semibase};
	line-height: ${lineHeight(vars.font.semibase, "20px")};
	white-space: nowrap;
	cursor: default;

	${vars.media.phablet} {
		${fontMedium}
	}
`
export const SummCalc = styled.span`
	display: block;
	margin-top: 7px;
	color: ${vars.color.price};
	font-size: ${vars.font.semibase};
	line-height: ${lineHeight(vars.font.semibase, "15px")};
	cursor: default;

	${vars.media.phablet} {
		font-size: ${vars.font.base};
		margin-top: 5px;
	}
`
export const TooMuch = styled.a`
	${link}
	font-size: ${vars.font.semibase};
	cursor: pointer;
	opacity: 0;
	transition: transform ${vars.trans.base}, opacity ${vars.trans.base};
	margin-top: 3px;

	&:active {
		transform: translateY(2px);
	}

	${Summ}:hover & {
		opacity: 1;
	}

	${Summ}:hover &:hover {
		opacity: 0.5;
	}

	${vars.media.phablet} {
		display: none;
	}
`

export const MobInfo = styled(OrderItemInfo)`
	width: 100%;
	max-width: calc(100% - 80px);
	display: none;
	margin-left: 80px;
	margin-top: 16px;

	${vars.media.desktop} {
		display: block;
	}
`
