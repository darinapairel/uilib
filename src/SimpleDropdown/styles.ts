import { rgba } from "polished"
import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"
import IcnDown from "../assets/img/arrow-down.svg"
// import { ImportFile } from '../Import'

export const Block = styled.div`
	display: inline-block;
	vertical-align: middle;
	position: relative;
	color: ${vars.color.brand};
	user-select: none;
`
export const Select = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	cursor: pointer;
	color: ${vars.color.links};
	transition: color ${vars.trans.base};

	&:hover {
		color: ${rgba(vars.color.links, 0.5)};
	}
`
export const Placeholder = styled.div`
	font-weight: inherit;
`
export const Arrow = styled.span<{ isopened: boolean }>`
	display: inline-block;
	vertical-align: middle;
	margin-left: 4px;
	line-height: 0;
	margin-bottom: -1px;
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
	width: 7px;
	height: 7px;
`
export const Drop = styled.div<{ isopened: boolean }>`
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
		props.isopened &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		`}
`
export const Wrapper = styled.div`
	border-radius: 8px;
	padding: 6px;
	box-shadow: ${vars.shadow.drop};
	background: ${vars.color.white};
`
export const List = styled.ul``
export const Option = styled.li`
	border-radius: 4px;
	padding: 8px 12px;
	font-weight: 500;
	cursor: pointer;
	transition: background ${vars.trans.base};

	&:hover {
		background: ${rgba(vars.color.background, 0.5)};
	}
`
