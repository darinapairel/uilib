import React from "react"
import * as S from "./styles"
import { Modal } from "react-responsive-modal"

const BorderedModal = ({
	open,
	setOpen,
	title,
	children
}: {
	open?: boolean
	setOpen?: any
	title?: string
	children?: any
}) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			showCloseIcon={false}
			center={true}
			classNames={{ modal: "bordered-modal" }}
		>
			<S.Modal>
				<S.Head>
					<S.Title>{title}</S.Title>
					<S.Close onClick={() => setOpen(false)} />
				</S.Head>

				<S.Body>{children}</S.Body>
			</S.Modal>
		</Modal>
	)
}

export default BorderedModal
