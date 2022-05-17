import styled from "styled-components"
import * as vars from "../../../helpers/vars"
import { fontBase } from "../../../helpers/mixins"

export const LoadMore = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: ${vars.field.big};
	width: 100%;
	margin-top: 10px;

	font: inherit;
	font-size: ${vars.font.medium};
	text-align: center;
	border: none;
	border-radius: 4px;
	background-color: ${vars.color.hover};

	cursor: pointer;
	transition: background ${vars.trans.base}, color ${vars.trans.base},
		transform ${vars.trans.base};
	user-select: none;

	&:hover,
	&:focus {
		background: ${vars.color.hoverDarken};
	}

	&:active {
		transform: translateY(2px);
	}

	${vars.media.notebook} {
		height: 40px;
		min-height: 40px;
		${fontBase}
	}
`
