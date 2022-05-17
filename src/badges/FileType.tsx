import React from "react"
import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"
import { rgba } from "polished"

const StyledBlock = styled.div<{ type? }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	width: 33px;
	height: 20px;
	border-radius: 4px;
	background: ${vars.color.background};
	white-space: nowrap;
	overflow: hidden;
	flex: 0 0 auto;
	position: relative;
	user-select: none;
	text-transform: uppercase;
	text-align: center;
	line-height: 1;
	font-size: ${vars.font.mini};
	font-weight: 700;
	color: ${vars.color.muted};

	${(props) =>
		props.type == "pdf" &&
		css`
			background: ${rgba("#F97777", 0.2)};
			color: ${vars.color.important};
		`}

	${(props) =>
		props.type == "xls" &&
		css`
			background: ${rgba(vars.color.accent, 0.2)};
			color: ${vars.color.accent};
		`}
`

const FileType = ({
	extention,
	className
}: {
	extention?: string
	className?: string
}) => {
	return (
		<StyledBlock className={className} type={extention}>
			{extention}
		</StyledBlock>
	)
}

export default FileType
