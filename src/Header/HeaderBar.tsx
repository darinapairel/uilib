import React from "react"
import styled from "styled-components"
import * as vars from "../helpers/vars"
import Container from "../Container"
import HeaderLogo from "./HeaderLogo"
import HeaderSearch from "./HeaderSearch"

const StyledLogoContainer = styled.div`
	display: inline-block;
	margin-right: 17px;
	margin-left: 1px;
	width: 88px;
	padding-top: 15px;
`
const LargeLogo = styled.div`
	${vars.media.phabletSmall} {
		display: none;
	}
`
const MobilePanel = styled.div`
	display: none;
	${vars.media.phabletSmall} {
		display: block;
	}
`
const StyledBlock = styled.div`
	background: ${vars.color.brand};
	z-index: ${vars.zindex.preheader - 1};
	position: relative;
	box-shadow: 0 -1px 0 ${vars.color.brand};
`
const StyledContainer = styled(Container)`
	${vars.media.phabletSmall} {
		padding-left: 16px;
		padding-right: 16px;
	}
`
const StyledContent = styled.div`
	height: 59px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	${vars.media.phabletSmall} {
		height: auto;
		padding-bottom: 16px;
		align-items: flex-start;
		justify-content: center;
	}
`
export const StyledSearch = styled(HeaderSearch)`
	width: 100%;
	flex: 0 1 auto;
	margin-top: -1px;

	${vars.media.phabletSmall} {
		margin-top: 0;
	}
`

const Header = () => {
	const fetchFromApi = () => console.log("зваглушка")
	return (
		<>
			<MobilePanel>
				<StyledBlock>
					<StyledContainer>
						<StyledContent>
							<StyledLogoContainer>
								<HeaderLogo />
							</StyledLogoContainer>
						</StyledContent>
					</StyledContainer>
				</StyledBlock>
			</MobilePanel>
			<StyledBlock>
				<StyledContainer>
					<StyledContent>
						<LargeLogo>
							<StyledLogoContainer>
								<HeaderLogo />
							</StyledLogoContainer>
						</LargeLogo>
						<StyledSearch fetchFromApi={fetchFromApi} />
					</StyledContent>
				</StyledContainer>
			</StyledBlock>
		</>
	)
}

export default Header
