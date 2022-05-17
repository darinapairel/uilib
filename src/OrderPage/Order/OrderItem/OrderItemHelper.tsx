import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import * as vars from "../../../helpers/vars"
import { rgba } from "polished"
import DownIcn from "../../../assets/img/arrow-down.svg"

const StyledBlock = styled.div`
	position: relative;
`
const StyledSpoiler = styled.div`
	display: inline-block;
	vertical-align: middle;
	color: ${vars.color.links};
	transition: opacity ${vars.trans.base};
	margin-bottom: 12px;
	cursor: pointer;
	line-height: 1;
	white-space: nowrap;
	user-select: none;

	&:hover {
		opacity: 0.5;
	}
`
const StyledSpoilerText = styled.span`
	border-bottom: 1px dotted ${rgba(vars.color.links, 0.7)};
`
const StyledSpoilerIcn = styled(DownIcn)`
	margin-left: 4px;
	display: inline-block;
	vertical-align: middle;
	width: 7px;
	height: 7px;
`
const StyledDrop = styled.div<{ isactive }>`
	background: ${vars.color.white};
	box-shadow: ${vars.shadow.drop};
	position: absolute;
	left: 0;
	top: 100%;
	width: 200px;
	z-index: ${vars.zindex.items};
	border-radius: 4px;
	padding: 12px;
	opacity: 0;
	visibility: hidden;
	transform: translateY(10px);
	transition: ${vars.animate.drop};

	${(props) =>
		props.isactive &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		`}
`

const OrderItemHelper = (props) => {
	const { title, className, children } = props
	const [opened, setOpened] = useState(false)
	const drop = useRef(null)

	const handleClickOutside = (e) => {
		!drop.current.contains(e.target) && setOpened(false)
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [opened])

	return (
		<StyledBlock className={className} ref={drop}>
			<StyledSpoiler onClick={() => setOpened(!opened)}>
				<StyledSpoilerText>{title}</StyledSpoilerText>
				<StyledSpoilerIcn />
			</StyledSpoiler>

			<StyledDrop isactive={opened}>{children}</StyledDrop>
		</StyledBlock>
	)
}

export default OrderItemHelper
