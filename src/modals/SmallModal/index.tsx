import React from "react"
import * as S from "./styles"
import { Modal } from "react-responsive-modal"
// import { observer } from 'mobx-react-lite'

const SmallModal = ({
	open,
	setOpen,
	title,
	className = "small-modal",
	children
}: {
	open?: boolean
	setOpen?: any
	title?: string
	className?: string
	children?: any
}) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			showCloseIcon={false}
			center={true}
			classNames={{ modal: className }}
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

export default SmallModal
