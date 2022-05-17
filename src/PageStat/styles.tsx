import styled from "styled-components"
import * as vars from "../helpers/vars"
import { titleH1, lineHeight } from "../helpers/mixins"
// import NewPrice from '../NewPrice'

export const StyledTitle = styled.b`
	display: block;
	margin-bottom: 14px;
	font-weight: 700;
	font-size: ${vars.font.medium};
	line-height: ${lineHeight(vars.font.medium, "24px")};
	cursor: default;
`
export const StyledStats = styled.ul`
	margin-bottom: 32px;

	&:first-child {
		margin-top: 38px;
	}
`
export const StyledItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 7px;

	&:last-child {
		margin-bottom: 0;
	}
`
export const StyledVal = styled.span`
	flex: 0 0 auto;
	padding-left: 6px;
`
// export const StyledPrice = styled(NewPrice)`
//   font-weight: 500;
// `
// export const StyledPriceGood = styled(StyledPrice)`
//   color: ${vars.color.accent};
// `

export const StyledSumm = styled.div`
	${titleH1}
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: default;
`
export const StyledSummLabel = styled.span`
	display: inline-block;
	vertical-align: middle;
`
export const StyledSummPrice = styled.span`
	display: inline-block;
	vertical-align: middle;
	white-space: nowrap;
`
