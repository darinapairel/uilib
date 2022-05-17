import styled from "styled-components"
import * as vars from "../../helpers/vars"
import { inputSizeBase, fieldDisabled } from "../../helpers/mixins"
import "react-datepicker/dist/react-datepicker.css"

export const Wrapper = styled.div`
	position: relative;
	min-width: 380px;

	@media (max-width: 1170px) {
		margin-right: 15px;
	}

	@media (max-width: 900px) {
		margin-right: 0;
		margin-bottom: 18px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const Input = styled.input`
	border-radius: 4px;
	border: 1px solid ${vars.color.background};
	width: 100%;
	outline: none !important;
	transition: border ${vars.trans.base}, background-color ${vars.trans.base};
	-webkit-appearance: none;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&::placeholder {
		opacity: 1;
		color: ${vars.color.price};
		font-weight: 400;
	}

	&:hover {
		border-color: ${vars.color.backgroundDark};
	}

	&:focus {
		border-color: ${vars.color.links};
	}

	&:disabled {
		${fieldDisabled}
	}

	${inputSizeBase}
`

export const StyledInput = styled(Input)`
	font-weight: 400;
	position: relative;
	width: 380px;
	touch-action: none !important;
	${vars.media.notebook} {
		width: 100%;
	}
`
