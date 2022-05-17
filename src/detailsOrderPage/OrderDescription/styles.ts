import styled from "styled-components"
import * as vars from "../../helpers/vars"
import { fontMedium, lineHeight } from "../../helpers/mixins"
import { rgba } from "polished"
import EditIcn from "../../assets/img/edit.svg"

export const Block = styled.div`
	background: ${rgba(vars.color.links, 0.1)};
	border-radius: 4px;
	padding: 24px;
`
export const Title = styled.b`
	${fontMedium}
	display: block;
	font-weight: 500;
	margin-bottom: 18px;
`
export const Content = styled.div`
	font-size: ${vars.font.base};
	line-height: ${lineHeight(vars.font.base, "24px")};

	p {
		margin-bottom: 2px;
		overflow-wrap: anywhere;
	}

	p:last-child {
		margin-bottom: 0;
	}
`
export const Section = styled.div`
	& + & {
		margin-top: 16px;
	}
`
export const Edit = styled.div`
	color: ${vars.color.links};
	font-weight: 500;
	margin-top: 20px;
	transition: opacity ${vars.trans.base}, transform ${vars.trans.base};
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	user-select: none;

	&:hover {
		opacity: 0.5;
	}

	&:active {
		transform: translateY(2px);
	}
`
export const StyledEditIcn = styled(EditIcn)`
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	width: 16px;
	height: 16px;
	flex: 0 0 auto;
`
