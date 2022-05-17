import styled, { css } from "styled-components"
import { link } from "../../helpers/mixins"
import { rgba } from "polished"
import * as vars from "../../helpers/vars"
import Dropdown from "../../Dropdown"
import OrderCheckbox from "../OrderCheckbox"
import OrdersActions from "../OrdersListActions"

export const Block = styled.div`
	margin-bottom: 25px;
`
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
`

export const Mass = styled.span`
	${link}
	font-weight: 500;
	display: none;

	${vars.media.phablet} {
		display: inline-block;
		cursor: pointer;
	}
`
export const Checkbox = styled(OrderCheckbox)``

export const Drops = styled.div<{ ischecked?: boolean }>`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	margin-left: auto;

	${(props) =>
		props.ischecked &&
		css`
			visibility: hidden;
		`}

	${vars.media.phablet} {
		display: block;
		width: 100%;

		${(props) =>
			props.ischecked &&
			css`
				visibility: visible;
			`}
	}
`
export const Drop = styled(Dropdown)`
	margin-right: 42px;
	display: inline-block;
	vertical-align: middle;

	&:last-child {
		margin-right: 0;
	}

	${vars.media.phablet} {
		margin-right: 0;
		width: 100%;
		margin-bottom: 10px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`
export const Actions = styled.div<{ ischecked?: boolean; isvisible?: boolean }>`
	position: absolute;
	right: -6px;
	top: 50%;
	transform: translateY(-100%);
	opacity: 0;
	visibility: hidden;
	transition: transform ${vars.trans.base}, opacity ${vars.trans.fast},
		visibility ${vars.trans.base};
	background: ${vars.color.white};

	${(props) =>
		props.ischecked &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(-50%);
		`}

	${vars.media.phablet} {
		z-index: ${vars.zindex.overlay + 1};
		position: fixed;
		left: 50%;
		transform: translate(-50%, 100%);
		bottom: 40px;
		top: auto;
		border-radius: 4px;
		width: 304px;

		${(props) =>
			props.ischecked &&
			css`
				opacity: 0;
				visibility: hidden;
				transform: translate(-50%, 100%);
			`}

		${(props) =>
			props.isvisible &&
			css`
				opacity: 1;
				visibility: visible;
				transform: translate(-50%, 0);
			`}
	}
`
export const ActionsBlock = styled(OrdersActions)``

export const Overlay = styled.div<{ isopened?: boolean }>`
	position: fixed;
	z-index: ${vars.zindex.overlay};
	left: 0;
	width: 100%;
	height: 100%;
	top: 0;
	user-select: none;
	opacity: 0;
	visibility: hidden;
	background: ${rgba(vars.color.brand, 0.9)};
	transition: opacity ${vars.trans.base};

	${vars.media.phablet} {
		${(props) =>
			props.isopened &&
			css`
				visibility: visible;
				opacity: 1;
			`}
	}
`
