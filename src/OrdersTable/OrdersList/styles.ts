import styled, { css } from "styled-components"
import * as vars from "../../helpers/vars"
import { lineHeight } from "../../helpers/mixins"
import { rgba } from "polished"

export const Block = styled.div``

export const EmptyTitle = styled.p`
	margin: 50px;

	font-size: ${vars.font.middle};
	line-height: ${lineHeight(15, 26)};
	font-weight: 500;
	text-align: center;
	user-select: none;
`

export const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	border-radius: 4px;
	padding-top: 4px;
	padding-bottom: 4px;
	font-size: ${vars.font.semibase};
	line-height: ${lineHeight(vars.font.semibase, "16px")};
	font-weight: 300;
	user-select: none;
	min-height: 32px;
	background: ${vars.color.table};
	color: ${vars.color.muted};
	padding-right: 24px;

	&::before {
		content: "";
		display: inline-block;
		min-height: 24px;
		visibility: hidden;
	}

	${vars.media.desktop} {
		display: none;
	}
`

const stylesCell = css`
	color: ${vars.color.muted};
	cursor: default;
`
// первый
export const Order = styled.div`
	${stylesCell}
	padding-left: 24px;
	width: 100%;
	min-width: 1px;
	flex: 0 1 auto;
`
// второй и пятый
export const Date = styled.div<{ type?: string }>`
	${stylesCell}
	padding-left: 40px;
	margin-left: auto;
	min-width: 250px;
	flex: 0 0 auto;
	${vars.media.preWide} {
		width: 205px;
		padding-left: 20px;
	}
`
// третий
export const Status = styled.div`
	${stylesCell}
	width: 260px;
	margin-left: 40px;
	flex: 0 0 auto;
	min-width: 1px;

	${vars.media.preWide} {
		width: 160px;
		margin-left: 20px;
	}
`
// четвертый
export const PaymentType = styled.div`
	${stylesCell}
	width: 180px;
	flex: 0 0 auto;
	margin-right: 45px;

	${vars.media.preWide} {
		width: 160px;
		margin-left: 20px;
	}
`
export const Summ = styled.div`
	${stylesCell}
	width: 110px;
	margin-left: 40px;
	flex: 0 0 auto;
	text-align: right;
	white-space: nowrap;

	${vars.media.preWide} {
		margin-left: 20px;
	}
`

export const Body = styled.ul`
	padding-bottom: 30px;
`
export const Item = styled.li`
	border-top: 1px solid ${vars.color.background};
	padding-top: 24px;
	padding-right: 24px;
	padding-bottom: 24px;
	padding-left: 24px;
	position: relative;

	&::before {
		content: none;
		position: absolute;
		left: -16px;
		right: -24px;
		top: 0;
		bottom: 0;
		background: ${rgba(vars.color.background, 0.3)};
		border-radius: 4px;
	}

	&:first-child {
		border-top: none;
	}

	&:last-child {
		border-bottom: none;
		margin-bottom: 0;
	}

	${vars.media.desktop} {
		padding-left: 0;
		padding-right: 0;
		background-color: transparent;
		border-top: 1px solid ${vars.color.background};
		border-radius: 0;

		&::before {
			right: -16px;
		}

		&:first-child {
			border-top: 1px solid ${vars.color.background};
		}

		+ li {
			border-top-color: ${vars.color.background};
		}
	}
`
