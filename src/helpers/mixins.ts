import * as vars from "./vars"
import { keyframes, css } from "styled-components"
import { rgba } from "polished"

export const lineHeight = (
	fontSize = 14 as string | number,
	lineHeight = 20 as string | number
) => {
	if (typeof fontSize === "string") {
		fontSize = parseInt(fontSize, 10)
	}
	if (typeof lineHeight === "string") {
		lineHeight = parseInt(lineHeight, 10)
	}
	return lineHeight / fontSize
}

export const displayAnimate = keyframes`
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block !important;
  }

  100% {
    opacity: 1;
  }
`

export const flexWidth = (width = "100px" as string) => {
	return {
		width: width,
		"max-width": width,
		flex: `0 0 ${width}`
	}
}

export const textOverflow = () => {
	return {
		overflow: "hidden",
		"max-width": "100%",
		"white-space": "nowrap",
		"text-overflow": "ellipsis"
	}
}

export const lineClamp = (num) => {
	return {
		overflow: "hidden",
		display: "-webkit-box",
		"-webkit-line-clamp": `${num}`,
		"-webkit-box-orient": "vertical"
	}
}
export const betterFonts = () => {
	return {
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale"
	}
}

export const fontSmall = css`
	font-size: ${vars.font.small};
	line-height: ${lineHeight(vars.font.small, vars.font.smallHeight)};
`
export const fontBase = css`
	font-size: ${vars.font.base};
	line-height: ${lineHeight(vars.font.base, vars.font.baseHeight)};
`
export const fontSemibase = css`
	font-size: ${vars.font.semibase};
	line-height: ${lineHeight(vars.font.base, "20px")};
`
export const fontMedium = css`
	font-size: ${vars.font.medium};
	line-height: ${lineHeight(vars.font.medium, vars.font.mediumHeight)};
`
export const fontMiddle = css`
	font-size: ${vars.font.middle};
	line-height: ${lineHeight(vars.font.middle, vars.font.middleHeight)};
`
export const fontLarge = css`
	font-size: ${vars.font.large};
	line-height: ${lineHeight(vars.font.large, vars.font.largeHeight)};
`

export const titleH1 = css`
	font-size: ${vars.title.h1};
	line-height: ${lineHeight(vars.title.h1, vars.title.h1Height)};
	font-weight: 700;
`
export const titleH2 = css`
	font-size: ${vars.title.h2};
	line-height: ${lineHeight(vars.title.h2, vars.title.h1Height)};
	font-weight: 700;
`

export const btnSizeBig = css`
	${fontMedium}
	height: ${vars.field.big};
	font-weight: 500;
	padding-left: 15px;
	padding-right: 15px;
`
export const btnSizeMedium = css`
	${fontMedium}
	height: ${vars.field.medium};
	font-weight: 500;
	padding-left: 15px;
	padding-right: 15px;
`
export const btnSizeBase = css`
	${fontBase}
	height: ${vars.field.base};
	font-weight: 500;
	padding-left: 15px;
	padding-right: 15px;
`
export const btnSizeSmall = css`
	${fontBase}
	height: ${vars.field.small};
	font-weight: 500;
	padding-left: 15px;
	padding-right: 15px;
`
export const btnSizeSmaller = css`
	${fontBase}
	height: ${vars.field.smaller};
	font-weight: 500;
	padding-left: 15px;
	padding-right: 15px;
`
export const btnReset = css`
	padding: 0;
	margin: 0;
	background: transparent;
	border: 0;
`
export const btn = css<{ disabled?; size? }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	border: 0;
	text-decoration: none;
	outline: none !important;
	transition: transform ${vars.trans.base}, background ${vars.trans.base},
		color ${vars.trans.base};
	cursor: pointer;
	user-select: none;

	&:hover {
		text-decoration: none;
	}

	&:active {
		transform: translateY(2px);
	}

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}

	${(props) =>
		props.disabled &&
		css`
			background: ${rgba(vars.color.price, 0.15)};
			color: ${vars.color.price};
			cursor: default;
			pointer-events: none;
		`}

	${(props) => props.size == "big" && btnSizeBig}

  ${(props) => props.size == "medium" && btnSizeMedium}

  ${(props) => props.size == "base" && btnSizeBase}

  ${(props) => props.size == "small" && btnSizeSmall}

  ${(props) => props.size == "smaller" && btnSizeSmaller}
`

export const inputSizeBase = css`
	${fontBase}
	height: ${vars.field.base};
	font-weight: 500;
	padding-left: 16px;
	padding-right: 16px;
`

export const fieldDisabled = css`
	background: #f7f7fb;
	border-color: ${vars.color.background};
	color: ${vars.color.price};
	cursor: not-allowed;
	font-weight: 400;
`
export const fieldError = css`
	color: ${vars.color.important};
	border-color: ${vars.color.important};
`

export const link = css`
	color: ${vars.color.links};
	transition: opacity ${vars.trans.base};

	&:hover {
		opacity: 0.5;
	}
`

export const hidden = css`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`

export const scrollbar = (
	bg = "transparent",
	thumbColor = "#909090",
	size = 12
) => {
	return css`
		scrollbar-width: ${size + "px"};
		scrollbar-color: ${thumbColor} transparent;

		&::-webkit-scrollbar {
			width: ${size + "px"};
			height: auto;
		}

		&::-webkit-scrollbar-thumb {
			background: ${rgba(thumbColor, 0.8)};
			border-radius: 10px;
			border: 3px solid ${bg};

			&:hover {
				background: ${thumbColor};
			}
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}
	`
}
