import styled from "styled-components"
import Button from "../../../Button"
import SimpleDropdown from "../../../SimpleDropdown"
import PageStat from "../../../PageStat"

export const Block = styled.div``
export const Stat = styled(PageStat)``
export const Type = styled(SimpleDropdown)`
	margin-bottom: 16px;

	&:first-child {
		margin-top: 38px;
	}
`
export const StyledButton = styled(Button)`
	width: 100%;
	margin-top: 28px;
`
