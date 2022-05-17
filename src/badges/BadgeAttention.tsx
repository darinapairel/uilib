import React from "react"
import styled from "styled-components"
import * as vars from "../helpers/vars"

const StyledBlock = styled.span`
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	height: 20px;
	text-transform: uppercase;
	color: ${vars.color.attention};
	font-size: ${vars.font.mini};
	font-weight: 500;
	line-height: 1;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	border-radius: 4px;
	padding-left: 8px;
	padding-right: 8px;
	background: ${vars.color.attentionLighten};
	user-select: none;
`

const BadgeAttention = ({
	onClick,
	className,
	children
}: {
	onClick?: any
	className?: string
	children?: any
}) => {
	return (
		<StyledBlock onClick={onClick} className={className}>
			{children || "attention"}
		</StyledBlock>
	)
}

export default BadgeAttention
