import styled from "styled-components"
import { font, media } from "helpers/vars"
import { lineHeight } from "helpers/mixins"
import Button from "../../Button"

export const Text = styled.div`
	margin-top: -8px;
	margin-bottom: 24px;
	font-size: ${font.base};
	line-height: ${lineHeight(font.base, "22px")};
	cursor: default;

	${media.phabletSmall} {
		margin-bottom: 24px;
	}
`
export const MessageButton = styled(Button)`
	border-radius: 4px;
	width: 100%;
`
