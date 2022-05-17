import React from "react"
import * as S from "./styles"

const Container = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return <S.Container className={className}> {children}</S.Container>
}

export default Container
