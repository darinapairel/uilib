import styled, { css } from "styled-components"
import LogoImg from "../assets/img/new-logo.svg"
import * as vars from "../helpers/vars"

export const StyledLogo = styled(LogoImg)<{ type?: string }>`
	display: inline-block;
	vertical-align: top;
	max-width: 100%;
	width: 88px;
	height: 13px;
	margin-bottom: 17px;
	${({ type }) =>
		type === "white-logo" &&
		css`
			color: ${vars.color.white};
		`}

	${({ type }) =>
		type === "blue-logo" &&
		css`
			color: ${vars.color.brand};
		`};
	user-select: none;

	${vars.media.preWide} {
		margin-bottom: 0;
		order: 2;
	}
`
