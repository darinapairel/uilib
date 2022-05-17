import { rgba } from "polished"
import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"
import IcnDown from "../assets/img/arrow-down.svg"

export const Block = styled.div<{ mod?: any }>`
	position: relative;
	color: ${vars.color.brand};
	user-select: none;
`
export const Select = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`
export const Placeholder = styled.div`
	font-weight: 500;
`
export const Arrow = styled.span<{ isopened?: boolean }>`
	display: inline-block;
	vertical-align: middle;
	margin-left: 12px;
	line-height: 0;
	transition: transform ${vars.trans.base};

	${(props) =>
		props.isopened &&
		css`
			transform: rotate(180deg);
		`}
`
export const ArrowIcn = styled(IcnDown)`
	display: inline-block;
	vertical-align: top;
	width: 8px;
	height: 8px;
`
export const Drop = styled.div<{ position?: string; isopened?: boolean }>`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	opacity: 0;
	padding-top: 12px;
	min-width: 200px;
	z-index: ${vars.zindex.items};
	transform: translateY(10px);
	visibility: hidden;
	transition: opacity ${vars.trans.base}, transform ${vars.trans.base},
		visibility ${vars.trans.base};

	${(props) =>
		props.position == "right" &&
		css`
			right: 0;
			left: auto;
		`}

	${(props) =>
		props.isopened &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		`}
`
export const Wrapper = styled.div`
	border-radius: 4px;
	padding: 6px;
	box-shadow: ${vars.shadow.drop};
	background: ${vars.color.white};
`
export const List = styled.ul``
export const Option = styled.li`
	padding: 8px 12px 6px;
	font-size: 13px;
	font-weight: 500;
	color: ${vars.color.text};
	cursor: pointer;
	border-radius: 4px;
	transition: background ${vars.trans.base};

	&:hover {
		background: ${rgba(vars.color.background, 0.5)};
	}
`
