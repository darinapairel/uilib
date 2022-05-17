import React from "react"
import styled from "styled-components"
import OrderEditForm from "./OrderEditForm"
import DefaultModal from "./modals/DefaultModal"

const StyledForm = styled(OrderEditForm)`
  width: 100%;
  padding-top: 8px;
`

const EditModal = ({ open, setOpen }) => {
  return (
    <DefaultModal open={open} setOpen={setOpen} title="Изменить данные заказа">
      <StyledForm />
    </DefaultModal>
  )
}

export default EditModal
