import React, { useState } from "react"
import * as S from "./styles"
import EditModal from "../../EditModal"

const OrderDescription = (props) => {
	const { className, data } = props
	const {
		companyName,
		TIN,
		contractId,
		deliveryType,
		author,
		createdDate,
		city
	} = data
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<>
			<S.Block className={className}>
				<S.Title>Данные о заказе</S.Title>

				<S.Content>
					<S.Section>
						<p>{companyName}</p>
						<p>ИНН {TIN}</p>
						<p>Договор {contractId}</p>
						<p>ООО &quot;Марвел КТ&quot; ИНН 7811365157</p>
					</S.Section>
					<S.Section>
						<p>{deliveryType}</p>
						<p>{author}</p>
						<p>{createdDate}</p>
						<p>Склад {city}</p>
					</S.Section>
				</S.Content>

				<S.Edit onClick={() => setModalOpen(true)}>
					<S.StyledEditIcn />
					Изменить данные
				</S.Edit>
			</S.Block>

			<EditModal open={modalOpen} setOpen={setModalOpen} />
		</>
	)
}

export default OrderDescription
