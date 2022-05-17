import styled from "styled-components"
import * as vars from "../helpers/vars"
import CrossIcn from "../assets/img/cross.svg"

export const BtnClose = styled.span`
	display: inline-block;
	vertical-align: middle;
	color: ${vars.color.price};
	cursor: pointer;
	transition: color ${vars.trans.base}, transform ${vars.trans.base};
	user-select: none;
	flex: 0 0 auto;
	line-height: 0;

	&:hover {
		color: ${vars.color.important};
	}

	&:active {
		transform: translateY(2px);
	}
`
export const StyledCloseIcn = styled(CrossIcn)`
	display: inline-block;
	vertical-align: top;
	width: 16px;
	height: 16px;
	flex: 0 0 auto;
`
