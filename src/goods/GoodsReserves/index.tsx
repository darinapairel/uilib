import React, { useState, useRef, useEffect } from "react"
import * as vars from "../../helpers/vars"
import ReservesDropInfo from "../../CartReservesDropInfo"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import useWindowDimensions from "../../helpers/useWindowDimensions"
import getDocumentHeight from "../../helpers/get-docheight"
import getCoords from "../../helpers/get-coords"
import * as S from "./styles"

const GoodsReserves = ({
	placeholder,
	variant,
	data = [],
	dropExtraInfo,
	isHidden = false
}) => {
	const [opened, setOpened] = useState(false)
	const [position, setPosition] = useState(false)
	const { width } = useWindowDimensions()
	const drop = useRef(null)
	const block = useRef(null)

	const handleClickOutside = (e) => {
		!drop.current.contains(e.target) && setOpened(false)
	}

	useEffect(() => {
		if (width <= vars.breakpoint.phablet) {
			opened
				? disableBodyScroll(block.current)
				: enableBodyScroll(block.current)
		} else {
			enableBodyScroll(block.current)
		}
	}, [opened, width])

	useEffect(() => {
		opened && setPosition(false)

		if (drop.current && block.current) {
			const docHeight = getDocumentHeight()
			const dropPos = getCoords(drop.current)
			const distance =
				dropPos.top +
				drop.current.getBoundingClientRect().height +
				block.current.getBoundingClientRect().height +
				30

			if (distance >= docHeight) {
				setPosition(true)
			}
		}
	}, [opened])

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [opened])

	return (
		<>
			<S.StyledBlock isHidden={isHidden} ref={drop}>
				<S.StyledMain onClick={() => setOpened(!opened)}>
					<S.StyledPlaceholder variant={variant}>
						{placeholder}
					</S.StyledPlaceholder>
					<S.StyledList variant={variant}>
						{data.reduce(
							(acc, item, index) =>
								item.nums
									? [
											...acc,
											<S.StyledItem
												key={`order-reserve-${index}`}
												iserror={item.error}
											>
												<S.StyledTitle>{item.title}:</S.StyledTitle>
												<S.StyledNums>{item.nums}</S.StyledNums>
											</S.StyledItem>
									  ]
									: acc,
							[]
						)}
					</S.StyledList>
					<S.StyledDown
						variant={variant}
						isopen={opened}
						iserror={data.length < 2 && data[0].error}
					>
						<S.StyledDownIcn />
					</S.StyledDown>
				</S.StyledMain>

				<S.StyledDrop isopen={opened} ref={block} position={position}>
					<ReservesDropInfo data={dropExtraInfo} />
				</S.StyledDrop>
			</S.StyledBlock>

			<S.StyledOverlay onClick={() => setOpened(false)} isopened={opened} />
		</>
	)
}

export default GoodsReserves
