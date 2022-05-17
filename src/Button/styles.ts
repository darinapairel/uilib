import styled, { css } from "styled-components"
import { rgba, lighten } from "polished"
import * as vars from "../helpers/vars"
import { btn } from "../helpers/mixins"

export const Btn = styled.a<{ mod?: string; size?; disabled? }>`
	${(props) =>
		props.mod == "accent" &&
		css`
			border-radius: 4px;
			background: ${vars.color.accent};
			color: ${vars.color.white};
		`}

	${(props) =>
		props.mod == "accentLight" &&
		css`
			border-radius: 4px;
			background: ${vars.color.accentHover};
			color: ${vars.color.brand};
		`}

  ${(props) =>
		props.mod == "base" &&
		css`
			border-radius: 2px;
			background: ${vars.color.links};
			color: ${vars.color.white};
		`}

  ${(props) =>
		props.mod == "lighten" &&
		css`
			border-radius: 2px;
			background: ${vars.color.hover};
			color: ${vars.color.brand};
		`}

  ${(props) =>
		props.mod == "important" &&
		css`
			border-radius: 4px;
			background: ${vars.color.important};
			color: ${vars.color.white};
		`}

  ${(props) =>
		props.mod == "transparent" &&
		css`
			border-radius: 4px;
			background: ${rgba(vars.color.white, 0.2)};
			color: ${vars.color.white};
		`}

  ${btn}

  &:hover {
		${(props) =>
			props.mod == "accent" &&
			css`
				color: ${vars.color.white};
				background: ${lighten(0.2, vars.color.accent)};
			`}

		${(props) =>
			props.mod == "accentLight" &&
			css`
				color: ${vars.color.white};
				background: ${vars.color.accent};
			`}

    ${(props) =>
			props.mod == "base" &&
			css`
				color: ${vars.color.white};
				background: ${rgba(vars.color.links, 0.8)};
			`}

    ${(props) =>
			props.mod == "lighten" &&
			css`
				color: ${vars.color.brand};
				background: ${vars.color.hoverDarken};
			`}

    ${(props) =>
			props.mod == "important" &&
			css`
				color: ${vars.color.white};
				background: ${lighten(0.05, vars.color.important)};
			`}

    ${(props) =>
			props.mod == "transparent" &&
			css`
				color: ${vars.color.white};
				background: ${rgba(vars.color.white, 0.3)};
			`}
	}

	&:focus {
		${(props) =>
			props.mod == "accent" &&
			css`
				box-shadow: 0 0 0 2px ${rgba(vars.color.accent, 0.3)};
			`}

		${(props) =>
			props.mod == "accentLight" &&
			css`
				box-shadow: 0 0 0 2px ${rgba(vars.color.accent, 0.3)};
			`}

    ${(props) =>
			props.mod == "base" &&
			css`
				box-shadow: 0 0 0 2px ${rgba(vars.color.links, 0.3)};
			`}

    ${(props) =>
			props.mod == "lighten" &&
			css`
				box-shadow: 0 0 0 2px ${rgba(vars.color.hover, 0.9)};
			`}

    ${(props) =>
			props.mod == "important" &&
			css`
				box-shadow: 0 0 0 2px ${rgba(vars.color.important, 0.3)};
			`}

    ${(props) =>
			props.mod == "transparent" &&
			css`
				box-shadow: 0 0 0 2px ${rgba(vars.color.accent, 0.3)};
			`}
	}

	/* touch */
	@media (pointer: coarse) {
		&:hover {
			${(props) =>
				props.mod == "accent" &&
				css`
					background: ${vars.color.accent};
					color: ${vars.color.white};
				`}

			${(props) =>
				props.mod == "accentLight" &&
				css`
					background: ${vars.color.accentHover};
					color: ${vars.color.brand};
				`}

      ${(props) =>
				props.mod == "base" &&
				css`
					background: ${vars.color.links};
					color: ${vars.color.white};
				`}

      ${(props) =>
				props.mod == "lighten" &&
				css`
					background: ${vars.color.hover};
					color: ${vars.color.brand};
				`}

      ${(props) =>
				props.mod == "important" &&
				css`
					background: ${vars.color.accent};
					color: ${vars.color.white};
				`}

      ${(props) =>
				props.mod == "important" &&
				css`
					background: ${vars.color.accent};
					color: ${vars.color.white};
				`}
		}
	}
`
