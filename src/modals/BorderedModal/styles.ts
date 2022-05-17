import styled from "styled-components"
import * as vars from "helpers/vars"
import { fontLarge } from "helpers/mixins"
import { rgba } from "polished"
import { ButtonClose } from "elements"

export const Modal = styled.div`
	width: 100%;
	border-radius: 4px;
	box-shadow: 20px 0 24px -10px ${rgba(vars.color.muted, 0.08)};
	background: ${vars.color.white};
	position: relative;
	width: 100%;
	flex: 0 0 auto;
	pointer-events: all;
`
export const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 24px 22px;
	border-bottom: 1px solid ${vars.color.background};

	${vars.media.phabletSmall} {
		padding: 16px 24px;
	}
`
export const Title = styled.b`
	${fontLarge}
	display: block;
	color: ${vars.color.text};
	font-weight: 700;
`
export const Close = styled(ButtonClose)`
	flex: 0 0 auto;
	margin-left: 16px;
	margin-bottom: -2px;

	&:hover {
		color: ${vars.color.important};
	}
`
export const Body = styled.div`
	padding: 32px;

	${vars.media.notebook} {
		padding: 24px;
	}

	${vars.media.phabletSmall} {
		padding: 16px 16px 24px;
	}
`
