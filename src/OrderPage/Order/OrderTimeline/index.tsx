import React, { useState, useRef, useEffect } from "react"
import * as S from "./styles"
import { pluralize } from "numeralize-ru"
import { formatDate, FormatType } from "../../../helpers/date"

const OrderTimeline = ({ shipment, className }: { shipment; className? }) => {
	const timeline = useRef(null)
	const [itemWidth, setItemWidth] = useState(false)

	const shipmentDate = formatDate(
		shipment?.states?.[0].date,
		FormatType.DAY_MONTH_YEAR_LONG
	)

	const handleResize = () => {
		timeline.current && setItemWidth(timeline.current.scrollWidth)
	}
	useEffect(() => console.log(shipment))
	useEffect(() => {
		handleResize()

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [timeline])

	return (
		<S.Block className={className}>
			<S.Item>
				<S.Main>
					<S.Head>
						<S.Title>Посылка</S.Title>
						<S.Number variant={shipment.colorBadge === 1 ? "accent" : "danger"}>
							{shipment.number}
						</S.Number>
					</S.Head>

					<S.Body>
						<S.Info>
							<S.InfoItem>
								{`${shipment.orderCount} ${pluralize(
									shipment.orderCount,
									"товар",
									"товара",
									"товаров"
								)}`}
							</S.InfoItem>
							<S.InfoItem>{shipment.orderSum} ₽</S.InfoItem>
						</S.Info>
					</S.Body>
				</S.Main>

				<S.Content>
					<S.Date>{shipmentDate}</S.Date>
					<S.Timeline ref={timeline}>
						<S.Points>
							{shipment.states.map((state, index) => {
								let color = null
								switch (state.activityType) {
									case 1:
										color = "done"
										break
									case 2:
										color = "progress"
										break
									case 3:
										color = "error"
								}
								return (
									<React.Fragment key={`shipment-states-${index}`}>
										<S.Dot status={color}>
											<S.DotLabel maxwidth={itemWidth}>
												{state.statePhase}
											</S.DotLabel>
										</S.Dot>
										{index !== 3 && <S.Sep status={color} />}
									</React.Fragment>
								)
							})}
						</S.Points>
					</S.Timeline>
				</S.Content>

				<S.Final>
					<S.Paragraph>
						<S.Link href="#">
							<S.Id>Отправка #{shipment.pickingListId}</S.Id>
						</S.Link>
					</S.Paragraph>

					{/* <S.Badge variant="light">{shipment.statusDilevery}</S.Badge> */}
				</S.Final>
			</S.Item>
		</S.Block>
	)
}

export default OrderTimeline
