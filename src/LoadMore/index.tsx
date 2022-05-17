import Loader from "../Loader"
import LoadMoreButton from "./LoadMoreButton"
import React from "react"

const LoadMore = ({
	isMoreItemsLoading,
	notShownItemsCount,
	onLoadMoreClick,
	step = 10
}) => {
	return (
		<>
			{isMoreItemsLoading && <Loader product />}

			{notShownItemsCount > 0 && !isMoreItemsLoading && (
				<LoadMoreButton onClick={onLoadMoreClick}>
					Показать ещё {Math.min(step, notShownItemsCount)} из{" "}
					{notShownItemsCount}
				</LoadMoreButton>
			)}
		</>
	)
}

export default React.memo(LoadMore)
