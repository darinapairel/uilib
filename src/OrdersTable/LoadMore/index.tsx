import React, { useEffect, useState } from "react"

import Loader from "../../Loader"
import LoadMoreButton from "./LoadMoreButton"

const LoadMore = ({
	isMoreItemsLoading = false,
	notShownItemsCount,
	onLoadMoreClick,
	step = 10
}: {
	isMoreItemsLoading: boolean
	notShownItemsCount?
	onLoadMoreClick
	step: number
}) => {
	const [isLoading, setLoading] = useState(isMoreItemsLoading)
	useEffect(() => {
		setLoading(isMoreItemsLoading)
	}, [isMoreItemsLoading])
	const onClickHandler = () => {
		setLoading(true)
		setTimeout(() => {
			onLoadMoreClick()
			setLoading(false)
		}, 500)
	}
	return (
		<>
			{isLoading && <Loader product />}

			{notShownItemsCount > 0 && !isLoading && (
				<LoadMoreButton onClick={onClickHandler}>
					Показать ещё {Math.min(step, notShownItemsCount)} из{" "}
					{notShownItemsCount}
				</LoadMoreButton>
			)}
		</>
	)
}

export default React.memo(LoadMore)
