import styled from "styled-components"
import * as vars from "../../helpers/vars"
import Checkbox from "../../Checkbox"

export const Block = styled.label`
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	vertical-align: middle;
	user-select: none;
`
export const StyledCheckbox = styled(Checkbox)``
export const Nums = styled.span<{ isselected? }>`
	vertical-align: middle;
	font-weight: 500;
	padding-left: 16px;
	transition: opacity ${vars.trans.base};
`
