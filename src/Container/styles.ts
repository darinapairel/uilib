import styled from "styled-components"
import { media } from "../helpers/vars"

export const Container = styled.div`
	padding-left: 32px;

	${media.desktop} {
		padding-left: 24px;
		padding-right: 24px;
	}

	${media.tablet} {
		padding-left: 16px;
		padding-right: 16px;
	}

	${media.phabletSmall} {
		padding-left: 8px;
		padding-right: 8px;
	}
`
