import styled, { css } from "styled-components"
import * as vars from "../../../helpers/vars"
import { fontMedium } from "../../../helpers/mixins"
import { rgba } from "polished"

export const Block = styled.div`
	background: ${vars.color.white};
	box-shadow: ${vars.shadow.block};
	border-radius: 4px;
	padding: 32px 32px 32px;

	${vars.media.notebook} {
		padding-left: 16px;
		padding-right: 16px;
	}

	${vars.media.phablet} {
		margin-left: -16px;
		margin-right: -16px;
		padding-top: 20px;
	}

	${vars.media.phabletSmall} {
		margin-left: -8px;
		margin-right: -8px;
	}
`

export const Summ = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	user-select: none;
	padding-top: 24px;
`
export const SummNumber = styled.span`
	color: ${vars.color.muted};
`
export const SummPrice = styled.span`
	${fontMedium}
	font-weight: 500;
`

export const Content = styled.div``
export const Head = styled.div`
	border-radius: 8px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: ${vars.color.table};
`
const styledCell = css`
	font-size: ${vars.font.semibase};
	color: ${vars.color.muted};
	cursor: default;
`
export const HeadCheck = styled.div`
	${styledCell}
	width: 16px;
	margin-right: 16px;
	flex: 0 0 16px;
`
export const HeadTitle = styled.div`
	${styledCell}
	flex: 0 1 auto;
	width: 100%;
	min-width: 1px;
	max-width: 100%;
	padding-right: 32px;
`
export const HeadReserve = styled.div`
	${styledCell}
	flex: 0 0 auto;
	width: 176px;
	margin-left: auto;
	padding-left: 20px;
`
export const HeadShip = styled.div`
	${styledCell}
	flex: 0 0 auto;
	margin-left: 24px;
	width: 144px;
`
export const HeadQuantity = styled.div`
	${styledCell}
	flex: 0 0 auto;
	width: 74px;
	margin-left: 14px;
`
export const HeadPrice = styled.div`
	${styledCell}
	flex: 0 0 auto;
	margin-left: 20px;
	width: 116px;
	text-align: right;
	padding-right: 18px;
`
export const Body = styled.div``
export const Item = styled.div<{ selected? }>`
	border-top: 1px solid ${vars.color.background};
	padding-top: 20px;
	padding-bottom: 20px;
	position: relative;

	&:first-child {
		border-top: 0;
	}

	&:last-child {
		border-bottom: 1px solid ${vars.color.background};
	}

	&::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -16px;
		right: -16px;
		background: ${rgba(vars.color.important, 0.05)};
		border-radius: 8px;
	}

	${(props) =>
		props.selected &&
		css`
			border-top-color: transparent;

			&::before {
				content: "";
			}

			&:last-child {
				border-bottom-color: transparent;
			}

			& + & {
				border-top-color: transparent;
			}
		`}

	${vars.media.notebook} {
		&::before {
			border-radius: 0;
		}
	}
`
