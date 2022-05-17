import React from "react"
import * as S from "./styles"

const LoadMoreButton = ({ onClick, children }) => {
	return <S.LoadMore onClick={onClick}>{children}</S.LoadMore>
}

export default LoadMoreButton
