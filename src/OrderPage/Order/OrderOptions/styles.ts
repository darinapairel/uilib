import styled, { css } from "styled-components"
import * as vars from "../../../helpers/vars"

import ExportIcn from "../../../assets/img/export.svg"
import DuplicateIcn from "../../../assets/img/duplicate.svg"
import DelIcn from "../../../assets/img/cross.svg"
import Button from "../../../Button"

export const Block = styled.div`
	user-select: none;
`
export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	position: relative;
	right: -6px;

	${vars.media.hd} {
		right: auto;
		left: -6px;
	}
`
export const Item = styled.li`
	margin: 0 8px;

	&:last-child {
		margin-right: 0;
	}

	${vars.media.fullhd} {
		margin: 0;
	}
`
export const StyledButton = styled(Button)`
	height: ${vars.field.base};
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	border: 0;
	background: transparent;
	border-radius: 4px;
	padding: 0 6px;
	border-radius: 4px;
	height: 40px;
	outline: none !important;
	transition: color ${vars.trans.base}, background ${vars.trans.base},
		transform ${vars.trans.base};

	&:hover {
		background: ${vars.color.accentHover};
	}

	&:active {
		transform: translateY(2px);
	}

	${vars.media.fullhd} {
		font-size: ${vars.font.semibase};
	}
`
export const stylesIcn = css`
	display: inline-block;
	vertical-align: middle;
	width: 20px;
	height: 20px;
	flex: 0 0 auto;
`
export const IcnExport = styled(ExportIcn)`
	${stylesIcn}
	color: ${vars.color.accent};
`
export const IcnDuplicate = styled(DuplicateIcn)`
	${stylesIcn}
	color: ${vars.color.accent};
`
export const IcnDel = styled(DelIcn)`
	${stylesIcn}
	color: ${vars.color.importantLight};
	width: 22px;
	height: 22px;
`

export const Text = styled.span`
	display: inline-block;
	vertical-align: middle;
	font-weight: 500;
	margin-left: 12px;

	${vars.media.fullhd} {
		margin-left: 6px;
	}
`
