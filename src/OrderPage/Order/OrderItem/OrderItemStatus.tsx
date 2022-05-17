import React from "react"
import styled, { css } from "styled-components"
import * as vars from "../../../helpers/vars"
import { rgba } from "polished"

const StyledBlock = styled.div<{ level? }>`
	position: relative;
	font-size: ${vars.font.small};
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 20px;
	position: relative;
	padding-left: 30px;
	padding-right: 25px;
	cursor: default;

	${(props) =>
		props.level == 4 &&
		css`
			color: ${vars.color.accent};
		`}
	${(props) =>
		props.level == 3 &&
		css`
			color: ${vars.color.attention};
		`}

  ${vars.media.phablet} {
		padding-right: 0;
	}
`
const StyledIndex = styled.span<{ level? }>`
	font-size: ${vars.font.mini};
	font-weight: 700;
	width: 21px;
	height: 20px;
	border-radius: 4px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: #ecf4e9;
	color: ${vars.color.price};
	position: absolute;
	left: 0;
	top: 0;

	${(props) =>
		props.level == 4 &&
		css`
			background: ${rgba(vars.color.accent, 0.15)};
			color: ${vars.color.accent};
		`}

	${(props) =>
		props.level == 3 &&
		css`
			background: #fff0d9;
			color: ${vars.color.attention};
		`}
`
const StyledTitle = styled.span``
const StyledNums = styled.span`
	white-space: nowrap;
`

const OrderItemStatus = (props) => {
	const { index, status, level, nums, className } = props

	return (
		<StyledBlock className={className} level={level}>
			<StyledIndex level={level}>{index}</StyledIndex>
			<StyledTitle>{status}:</StyledTitle>
			<StyledNums>{nums}</StyledNums>
		</StyledBlock>
	)
}

export default OrderItemStatus
