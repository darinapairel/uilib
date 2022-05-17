import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import * as vars from "../../../helpers/vars"
import { textOverflow } from "../../../helpers/mixins"
import IcnDonw from "../../../assets/img/arrow-down.svg"

const StyledBlock = styled.div`
	position: relative;
`
const StyledSelect = styled.div<{ isopened }>`
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	color: ${vars.color.muted};
	white-space: nowrap;
	min-width: 1px;
	max-width: 100%;

	${(props) =>
		props.isopened &&
		css`
			color: ${vars.color.links};
		`}
`
const StyledLabel = styled.div`
	${textOverflow}
	display: block;
`
const StyledDown = styled.span<{ isopened }>`
	display: inline-block;
	vertical-align: middle;
	line-height: 0;
	flex: 0 0 auto;
	margin-left: 10px;
	transition: transform ${vars.trans.base};

	${(props) =>
		props.isopened &&
		css`
			transform: rotate(180deg);
		`}
`
const StyledDownIcn = styled(IcnDonw)`
	width: 7px;
	height: 7px;
	display: inline-block;
	vertical-align: top;
`

const StyledDrop = styled.div<{ isopened }>`
	background: ${vars.color.white};
	border-radius: 4px;
	padding: 16px;
	box-shadow: ${vars.shadow.drop};
	position: absolute;
	left: 0;
	top: calc(100% + 6px);
	z-index: ${vars.zindex.items};
	width: 200px;
	opacity: 0;
	visibility: hidden;
	transform: translateY(10px);
	transition: ${vars.animate.drop};

	ul + ul {
		margin-top: 12px;
	}

	${(props) =>
		props.isopened &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		`}
`

const OrderItemInfo = (props) => {
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
			<StyledSelect onClick={() => setOpened(!opened)} isopened={opened}>
				<StyledLabel>{title}</StyledLabel>
				<StyledDown isopened={opened}>
					<StyledDownIcn />
				</StyledDown>
			</StyledSelect>

			<StyledDrop isopened={opened}>{children}</StyledDrop>
		</StyledBlock>
	)
}

export default OrderItemInfo
