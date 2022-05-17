import React from "react"
import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"

const StyledBlock = styled.span<{ variant? }>`
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	height: 20px;
	text-transform: uppercase;
	color: ${vars.color.white};
	font-size: ${vars.font.mini};
	font-weight: 500;
	line-height: 1;
	border-radius: 4px;
	padding-left: 3px;
	padding-right: 3px;
	background: ${vars.color.accent};
	user-select: none;

	${(props) =>
		props.variant &&
		css`
			background: ${vars.color.accentHover};
			color: ${vars.color.accent};
		`}
`
const StyledIn = styled.span`
	position: relative;
	z-index: 2;
`

const BadgeNew = ({
	onClick,
	variant,
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
			<StyledIn>{children || "new"}</StyledIn>
		</StyledBlock>
	)
}

export default BadgeNew
