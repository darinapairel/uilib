import styled, { css } from "styled-components"
import * as vars from "../../helpers/vars"
import { lineHeight, fontBase } from "../../helpers/mixins"
import { rgba } from "polished"
import IcnDown from "../../assets/img/arrow-down.svg"

export const StyledBlock = styled.div<{ isHidden? }>`
	position: relative;

	${vars.media.notebook} {
		${({ isHidden }) =>
			isHidden &&
			css`
				display: none;
			`}
	}
`
export const StyledMain = styled.div`
	position: relative;
	cursor: pointer;
	user-select: none;
	font-size: ${vars.font.small};
	line-height: ${lineHeight(vars.font.small, "20px")};
`
export const StyledPlaceholder = styled.span<{ variant? }>`
	display: none;
	padding-right: 25px;

	${vars.media.notebook} {
		${(props) =>
			props.variant == "short" &&
			css`
				${fontBase}
				display: block;
			`}
	}
`
export const StyledList = styled.ul<{ variant? }>`
	padding-right: 25px;

	${vars.media.notebook} {
		${(props) =>
			props.variant == "short" &&
			css`
				display: none;
			`}
	}

	${vars.media.phablet} {
		${(props) =>
			props.variant == "full" &&
			css`
				padding-right: 0;
			`}
	}
`
export const StyledItem = styled.li<{ iserror? }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3px;

	&:last-child {
		margin-bottom: 0;
	}

	${(props) =>
		props.iserror &&
		css`
			color: ${vars.color.important};
		`}
`
export const StyledTitle = styled.span``
export const StyledNums = styled.span`
	white-space: nowrap;
	margin-left: 2px;
`
export const StyledDown = styled.span<{ variant?; isopen?; iserror? }>`
	position: absolute;
	display: inline-block;
	vertical-align: middle;
	right: 6px;
	top: 50%;
	line-height: 0;
	transition: color ${vars.trans.base}, transform ${vars.trans.base};
	margin-top: -3px;

	${StyledMain}:hover & {
		color: ${vars.color.links};
	}

	${(props) =>
		props.iserror &&
		css`
			color: ${vars.color.important};

			${StyledMain}:hover & {
				color: ${vars.color.importantLight};
			}
		`}

	${(props) =>
		props.isopen &&
		css`
			transform: rotate(180deg);
		`}

  ${vars.media.notebook} {
		${(props) =>
			props.iserror &&
			css`
				color: inherit;

				${StyledMain}:hover & {
					color: ${vars.color.links};
				}
			`}
	}

	${vars.media.phablet} {
		${(props) =>
			props.variant == "full" &&
			css`
				display: none;
			`}
	}
`
export const StyledDownIcn = styled(IcnDown)`
	display: inline-block;
	vertical-align: top;
	width: 7px;
	height: 7px;
`
export const StyledDrop = styled.div<{ position?; isopen? }>`
	position: absolute;
	width: 278px;
	top: ${(props) => (props.position ? `auto` : `calc(100% + 4px)`)};
	left: 50%;
	transform: ${(props) =>
		props.position ? `translate(-50%, -10px)` : `translate(-50%, 10px)`};
	padding: 20px;
	box-shadow: ${vars.shadow.drop};
	border-radius: 4px;
	background: ${vars.color.white};
	z-index: ${vars.zindex.items};
	opacity: 0;
	visibility: hidden;
	transition: opacity ${vars.trans.base}, visibility ${vars.trans.base},
		transform ${vars.trans.base};

	${(props) =>
		props.position &&
		css`
			bottom: calc(100% + 4px);
		`}

	${(props) =>
		props.isopen &&
		css`
			visibility: visible;
			opacity: 1;
			transform: translate(-50%, 0);
		`}

  ${vars.media.phablet} {
		position: fixed;
		left: 50%;
		bottom: 40px;
		top: auto;
		transform: translate(-50%, 100%);
		z-index: ${vars.zindex.overlay + 1};
		max-height: calc(100% - 80px);
		overflow: auto;

		${(props) =>
			props.isopen &&
			css`
				transform: translate(-50%, 0);
			`}
	}
`
export const StyledOverlay = styled.div<{ isopened? }>`
	position: fixed;
	z-index: ${vars.zindex.overlay};
	left: 0;
	width: 100%;
	height: 100%;
	top: 0;
	user-select: none;
	opacity: 0;
	visibility: hidden;
	background: ${rgba(vars.color.brand, 0.9)};
	transition: opacity ${vars.trans.base};

	${vars.media.phablet} {
		${(props) =>
			props.isopened &&
			css`
				visibility: visible;
				opacity: 1;
			`}
	}
`
