import styled, { css } from "styled-components"
import * as vars from "../../helpers/vars"
import { rgba } from "polished"
import IcnShip from "../../assets/img/order.svg"
import IcnReload from "../../assets/img/reload.svg"
import IcnCross from "../../assets/img/cross.svg"

export const Block = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	${vars.media.phablet} {
		display: block;
		padding: 6px;
	}
`
export const Actions = styled.ul<{ isvisible?: boolean }>`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	transition: opacity ${vars.trans.base};
	position: relative;

	${(props) =>
		props.isvisible &&
		css`
			opacity: 1;
		`}

	${vars.media.phablet} {
		display: block;
	}
`
export const ActionsItem = styled.li`
	transition: background ${vars.trans.base}, transform ${vars.trans.base};
	border-radius: 4px;
	margin-left: 10px;
	margin-right: 10px;

	&:last-child {
		margin-right: 0;
	}

	${vars.media.preWide} {
		margin-left: 0;
	}

	${vars.media.phablet} {
		display: block;
		margin: 0;
	}
`
export const Action = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	cursor: pointer;
	border: 0;
	margin: 0;
	padding: 0 6px;
	border-radius: 4px;
	height: 40px;
	background: none;
	cursor: pointer;
	transition: background ${vars.trans.base}, transform ${vars.trans.base};

	&:hover {
		background: ${vars.color.accentHover};
	}

	&:active {
		transform: translateY(2px);
	}

	${vars.media.phablet} {
		&:hover,
		&:active {
			background: ${rgba(vars.color.background, 0.5)};
		}
	}
`
const stylesIcn = css`
	display: inline-block;
	vertical-align: middle;
	width: 20px;
	height: 20px;
	flex: 0 0 auto;
	color: ${vars.color.accent};
	transition: transform ${vars.trans.base};
`
export const ShipIcn = styled(IcnShip)`
	${stylesIcn}
	width: 24px;
	height: 24px;
`
export const ReloadIcn = styled(IcnReload)`
	${stylesIcn}
`
export const DelIcn = styled(IcnCross)`
	${stylesIcn}
	color: ${vars.color.importantLight};
	width: 24px;
	height: 24px;
`
export const ActionText = styled.span`
	font-weight: 500;
	margin-left: 10px;
`
