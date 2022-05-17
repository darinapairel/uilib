import styled from "styled-components"
import * as vars from "../helpers/vars"
import { lineHeight, link } from "../helpers/mixins"

export const StyledBlock = styled.div``

export const StyledSection = styled.div`
	font-size: ${vars.font.semibase};
	line-height: ${lineHeight(vars.font.semibase, "20px")};
	border-bottom: 1px solid ${vars.color.background};
	padding-bottom: 24px;
	margin-bottom: 24px;

	&:last-child {
		border-bottom: none;
		padding-bottom: 0;
		margin-bottom: 0;
	}
`
export const StyledHead = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 4px;
`
export const StyledHelper = styled.span`
	display: block;
	width: 100%;
	color: ${vars.color.price};
	font-size: ${vars.font.semibase};
`
export const StyledSub = styled.div`
	padding-left: 12px;

	${StyledHelper} {
		margin-top: 4px;
	}
`
export const StyledList = styled.ul`
	margin-top: 16px;
`
export const StyledItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;

	&:last-child {
		margin-bottom: 0;
	}
`
export const StyledTitle = styled.span`
	font-size: ${vars.font.base};
	font-weight: 500;
`
export const StyledText = styled.div``
export const StyledNum = styled.span`
	font-weight: 500;
	white-space: nowrap;
	margin-left: 8px;
`
export const StyledLink = styled.a`
	${link}
	display: inline-block;
	vertical-align: middle;

	${StyledList} + & {
		margin-top: 8px;
	}
`
