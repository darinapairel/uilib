import styled from "styled-components"
import * as vars from "../../helpers/vars"
import { fontMedium } from "../../helpers/mixins"
import IcnLoad from "../../assets/img/export.svg"
import FileType from "../../badges/FileType"

export const Block = styled.div``
export const Title = styled.b`
	${fontMedium}
	display: block;
	font-weight: 500;
	margin-bottom: 18px;
`
export const List = styled.ul``
export const Item = styled.li`
	margin-bottom: 20px;

	&:last-child {
		margin-bottom: 0;
	}
`
export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${vars.color.brand};
	position: relative;
	padding-right: 24px;
	transition: color ${vars.trans.base};

	&:hover {
		color: ${vars.color.links};
	}

	${vars.media.phabletSmall} {
		color: ${vars.color.links};
	}
`
export const File = styled(FileType)`
	margin-right: 10px;
`
export const Name = styled.b`
	font-weight: 500;

	${Link}:hover & {
		font-weight: 700;
	}
`
export const Icn = styled(IcnLoad)`
	display: inline-block;
	vertical-align: middle;
	width: 20px;
	height: 20px;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	opacity: 0;
	transition: opacity ${vars.trans.base};

	${Link}:hover & {
		opacity: 1;
	}
`
