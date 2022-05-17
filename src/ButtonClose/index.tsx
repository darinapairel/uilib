import React from "react"
import * as S from "./styles"

const ButtonClose = ({ onClick, className }) => {
	return (
		<S.BtnClose
			className={className}
			onClick={onClick}
			aria-label="Закрыть"
			role="button"
		>
			<S.StyledCloseIcn />
		</S.BtnClose>
	)
}

export default ButtonClose
