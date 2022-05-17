import styled, { css } from "styled-components"
import * as vars from "../../../helpers/vars"
import { link, lineHeight, fontBase } from "../../../helpers/mixins"
import Button from "../../../Button"
import BadgeNew from "../../../badges/BadgeNew"
import BadgeNumber from "../../../badges/BadgeNumber"
import LoadIcn from "../../../assets/img/export.svg"

export const Link = styled.a``
export const Block = styled.div`
	&:not(:last-of-type) {
		margin-bottom: 25px;
		padding-bottom: 25px;
		border-bottom: 1px solid ${vars.color.background};
	}
`
export const Item = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	border-bottom: 1px solid ${vars.color.background};
	padding-bottom: 20px;
	margin-bottom: 17px;
	position: relative;

	&:last-child {
		margin-bottom: 0;
		padding-bottom: 0;
		border-bottom: none;
	}

	${vars.media.fullhd} {
		flex-wrap: wrap;
	}

	${vars.media.phabletSmall} {
		padding-bottom: 24px;
		margin-bottom: 20px;
	}
`
export const Main = styled.div`
	margin-right: 40px;
	flex: 0 0 auto;

	${vars.media.fullhd} {
		width: 50%;
		padding-right: 20px;
		margin-right: 0;
	}

	${vars.media.phabletSmall} {
		width: 100%;
		padding-right: 0;
	}
`
export const Content = styled.div`
	width: 100%;
	flex: 0 1 auto;
	min-height: 90px;

	${vars.media.fullhd} {
		order: 5;
		margin-top: 14px;
	}
`
export const Date = styled.b`
	display: block;
	font-weight: 400;
	margin-bottom: 16px;
	color: ${vars.color.price};
	white-space: nowrap;

	${vars.media.phabletSmall} {
		position: absolute;
		right: 0;
		top: 0.3em;
	}
`

export const Head = styled.div`
	margin-bottom: 12px;

	${vars.media.phabletSmall} {
		padding-right: 100px;
	}
`
export const Title = styled.b`
	font-size: ${vars.font.medium};
`
export const Number = styled(BadgeNumber)`
	margin-left: 10px;
`
export const Body = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`
// export const Messages = styled(GoodsSubscribe)`
//   margin-right: 12px;

//   ${vars.media.phabletSmall} {
//     color: ${vars.color.links};
//   }
// `
export const Info = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	color: ${vars.color.muted};
	font-size: ${vars.font.semibase};
	line-height: ${lineHeight(vars.font.semibase, "24px")};
	cursor: default;
	margin-bottom: -1px;

	${vars.media.phabletSmall} {
		font-size: ${vars.font.base};
		line-height: ${lineHeight(vars.font.base, "24px")};
	}
`
export const InfoItem = styled.li`
	position: relative;
	padding-left: 8px;
	margin-left: 8px;

	&:first-child {
		padding-left: 0;
		margin-left: 0;
	}

	&::before {
		content: "";
		width: 2px;
		height: 2px;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-50%, -50%);
		background: ${vars.color.muted};
	}

	&:first-child::before {
		content: none;
	}
`
export const Timeline = styled.div`
	width: 100%;
`
export const Points = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;

	${vars.media.phabletSmall} {
		flex-direction: column;
	}
`
export const Dot = styled.span<{ status? }>`
	width: 12px;
	height: 12px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: ${vars.color.priceLighten};
	border-radius: 50%;
	flex: 0 0 auto;
	margin-left: 8px;
	margin-right: 8px;
	position: relative;
	color: ${vars.color.priceLighten};

	&::before {
		content: "";
		width: 8px;
		height: 8px;
		display: inline-block;
		vertical-align: middle;
		background: ${vars.color.white};
		border-radius: 50%;
	}

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}

	${(props) =>
		props.status == "done" &&
		css`
			background: ${vars.color.accent};
			color: ${vars.color.accent};

			&::before {
				background: ${vars.color.accentLighten};
			}
		`}

	${(props) =>
		props.status == "progress" &&
		css`
			background: ${vars.color.danger};
			color: ${vars.color.danger};

			&::before {
				background: ${vars.color.dangerLighten};
			}
		`}

  ${vars.media.phabletSmall} {
		margin: 0;
	}
`
export const Sep = styled.span<{ status? }>`
	flex: 0 1 auto;
	width: 100%;
	max-width: 100%;
	min-width: 1px;
	height: 2px;
	margin-top: 5px;
	background: ${vars.color.priceLighten};

	${(props) =>
		props.status == "done" &&
		css`
			background: ${vars.color.accent};

			&::before {
				background: ${vars.color.accentLighten};
			}
		`}

	${(props) =>
		props.status == "progress" &&
		css`
			background: ${vars.color.danger};

			&::before {
				background: ${vars.color.dangerLighten};
			}
		`}

  ${vars.media.phabletSmall} {
		height: 16px;
		width: 2px;
		left: 4px;
		transform: translate(5px, 0);
		margin-top: 4px;
		margin-bottom: 4px;
	}
`
export const DotLabel = styled.span<{ maxwidth? }>`
	min-width: 1px;
	display: block;
	letter-spacing: -0.01em;
	font-weight: 500;
	font-size: ${vars.font.semibase};
	line-height: ${lineHeight(vars.font.semibase, "16px")};
	text-align: center;
	cursor: default;
	color: currentColor;
	position: absolute;
	left: 50%;
	top: 32px;
	transform: translateX(-50%);
	white-space: nowrap;
	max-width: 200px;

	${Dot}:first-child & {
		left: 0;
		transform: none;
		text-align: left;
	}

	${Dot}:last-child & {
		left: auto;
		right: 0;
		text-align: right;
		transform: none;
	}

	${vars.media.ultraWide} {
		white-space: normal;

		${(props) =>
			props.maxwidth &&
			css`
				width: ${props.maxwidth / 4}px;
			`}
	}

	${vars.media.phabletSmall} {
		transform: none;
		left: 0;
		right: auto;
		top: -1px;
		width: 260px;
		max-width: 260px;
		padding-left: 21px;
		text-align: left;
		line-height: 1;

		${Dot}:last-child & {
			right: auto;
			left: 0;
			text-align: left;
			transform: none;
		}
	}
`
export const Final = styled.div`
	width: 175px;
	flex: 0 0 auto;
	margin-left: 40px;
	text-align: right;
	padding-top: 32px;

	${vars.media.fullhd} {
		width: 50%;
		padding-left: 20px;
		margin-left: 0;
	}

	${vars.media.phabletSmall} {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding-left: 0;
		margin-top: 20px;
		padding-top: 0;
		order: 5;
	}
`
export const Paragraph = styled.p``
export const Id = styled.a`
	${link}
	font-weight: 500;
`
export const Badge = styled(BadgeNew)`
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;

	${Paragraph} + & {
		margin-top: 12px;
	}

	${vars.media.phabletSmall} {
		${Paragraph} + & {
			margin-top: 0;
		}
	}
`
export const styledButton = css`
	width: 100%;
	max-width: 180px;
	height: ${vars.field.medium};
	font-weight: 500;
	padding-left: 4px;
	padding-right: 4px;
	margin-top: 4px;

	${vars.media.phabletSmall} {
		${fontBase}
		max-width: 100%;
		height: 38px;
	}
`
export const StyledButton = styled(Button)`
	${styledButton}
`
export const ButtonLoad = styled(Button)`
	${styledButton}
`
export const IcnLoad = styled(LoadIcn)`
	color: ${vars.color.accent};
	width: 20px;
	height: 20px;
	margin-right: 8px;

	${ButtonLoad}:hover & {
		color: ${vars.color.white};
	}
`
