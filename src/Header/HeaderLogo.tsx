import React from "react"
import styled from "styled-components"
import * as vars from "../helpers/vars"
import Logo from "../Logo"
const StyledLogo = styled.a`
	vertical-align: top;
	line-height: 1;
	max-width: 100%;
	transition: transform ${vars.trans.base}, opacity ${vars.trans.base},
		color ${vars.trans.base};
	outline: none !important;
	flex: 0 0 auto;
	user-select: none;

	&:hover {
		opacity: 0.9;
	}

	&:active {
		opacity: 0.6;
	}
`
const StyledLogoImg = styled(Logo)`
	display: block;
	width: 100%;
`

const HeaderLogo = () => {
	return (
		<StyledLogo title="Marvel">
			<StyledLogoImg colorType="white-logo" type="marvel" />
		</StyledLogo>
	)
}

export default HeaderLogo
