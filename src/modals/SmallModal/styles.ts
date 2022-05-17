import styled from "styled-components"
import * as vars from "helpers/vars"
import { titleH1, fontMedium } from "helpers/mixins"
import { rgba } from "polished"
import { ButtonClose } from "elements"

export const Modal = styled.div`
	position: relative;
	background: ${vars.color.white};
	border-radius: 4px;
	box-shadow: 0 0 24px ${rgba(vars.color.shadow, 0.16)};
	width: 100%;
	flex: 0 0 auto;
	pointer-events: all;
`
export const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40px 40px 0;
	margin-bottom: 32px;

	${vars.media.phabletSmall} {
		border-bottom: 1px solid ${vars.color.background};
		padding: 16px 24px;
		margin-bottom: 18px;
	}
`
export const Title = styled.b`
	${titleH1}
	display: block;
	color: ${vars.color.text};
	font-weight: 700;
	cursor: default;

	${vars.media.phabletSmall} {
		${fontMedium}
	}
`
export const Close = styled(ButtonClose)`
	margin-left: 16px;
	margin-bottom: -1px;
	display: inline-block;
	vertical-align: middle;

	${vars.media.phabletSmall} {
		margin-right: -4px;
	}
`
export const Body = styled.div`
	padding: 0 40px 40px;

	${vars.media.phabletSmall} {
		padding: 0 16px 24px;
	}
`
