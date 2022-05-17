import React from "react"

import * as S from "./styles"
import DefaultModal from "../../modals/DefaultModal"

const OurPriceModal = ({ open, setOpen }: { open?: any; setOpen?: any }) => {
	return (
		<DefaultModal open={open} setOpen={setOpen} title="Внимание" maxWidth={450}>
			<S.Text>Товар будет добавлен с ценой по прайс-листу Marvel</S.Text>
			<S.MessageButton mod="base" onClick={() => setOpen(false)}>
				Продолжить
			</S.MessageButton>
		</DefaultModal>
	)
}

export default OurPriceModal
