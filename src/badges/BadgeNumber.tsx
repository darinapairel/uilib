import React from "react"
import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"

const StyledBlock = styled.span<{ variant? }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	text-transform: uppercase;
	font-size: ${vars.font.mini};
	font-weight: 700;
	line-height: 1;
	border-radius: 4px;
	padding: 1px 5px;
	text-align: center;
	min-width: 20px;
	background: ${vars.color.background};
	user-select: none;
	color: ${vars.color.price};

	${(props) =>
		props.variant == "accent" &&
		css`
			background: ${vars.color.accent};
			color: ${vars.color.white};
		`}

	${(props) =>
		props.variant == "danger" &&
		css`
			background: ${vars.color.danger};
			color: ${vars.color.white};
		`}
`

const BadgeNumber = ({
	variant,
	onClick,
	className,
	children
}: {
	variant?
	onClick?
	className?
	children?
}) => {
	return (
		<StyledBlock onClick={onClick} variant={variant} className={className}>
			{children}
		</StyledBlock>
	)
}

export default BadgeNumber
