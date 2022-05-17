import React, { useState } from "react"
import * as S from "./styles"

const OrderPayment = ({ id, details }) => {
  return (
    <S.List key={id}>{details && <S.ListItem>{details}</S.ListItem>}</S.List>
  )
}
const OrderVendor = ({ id, name }) => {
  return <S.Subtitle key={id}>{name}</S.Subtitle>
}
const OrderShipment = ({ city, type }) => {
  return (
    <S.List>
      {city && <S.ListItem>{city}</S.ListItem>}
      <S.ListItem>{type}</S.ListItem>
    </S.List>
  )
}

const Order = ({
  title,
  href = "#",
  num,
  id,
  created,
  paymentType,
  paymentStatus,
  paymentDate,
  source,
  status,
  statusCode,
  summ,
  // summLevel,
  // summText,
  // date,
  // author,
  // city,
  // info,
  // errors = [],
  className
}) => {
  // const [openedInfo, setOpenedInfo] = useState(false)
  let summLevel = () => {
    if (status === "Оплачен") return 2
    else if (status === "Не оплачен") return 0
    else return 1
  }
  const details = `Посылка #${id}`

  return (
    <S.Block className={className}>
      <S.Inner>
        <S.Order>
          <S.Main>
            {" "}
            {/* первый элемент строки заказа (столбец Заказ) */}
            <S.Link href={href}>
              <S.Title>{id}</S.Title>
              <OrderVendor id={id} name={source} />
            </S.Link>
            {num && <S.Nums>{num}</S.Nums>}
          </S.Main>
        </S.Order>

        <S.CreateDate>{created}</S.CreateDate>
        {/*<S.Shipment>  второй элемент строки заказа (столбец Дата оформления)   
          <S.Date type="created">{created}</S.Date>
        </S.Shipment> */}

        <S.Status>
          {" "}
          {/* третий элемент строки заказа (столбец Статус посылки (заказа)) */}
          <S.StatusEl key={`item-status-${status}`}>
            <S.Payment>
              <S.Subtitle>{status}</S.Subtitle>
              <OrderPayment id={id} details={details} />
            </S.Payment>
            {/* <S.StatusShort>
              {status?
                <S.StatusText type="status" level={statusCode}>{status}</S.StatusText> 
                // СТАТУС ОТГРУЗКИ
                :
                <S.Empty>Не отгружался</S.Empty>
              }
            </S.StatusShort> */}
          </S.StatusEl>
        </S.Status>

        <S.Status>
          {" "}
          {/* четвертый элемент строки заказа (столбец Тип оплаты) */}
          {/* изменить структуру, убрать компоненты статуса 
              и заменить подобным оплате (Payment) 
                         или дате (Shipment -> Date) 
                         или сумме (Summ) */}
          <S.StatusEl key={`item-status-${status}`}>
            <S.StatusShort>
              <S.StatusText type="paymentType" level={statusCode}>
                {paymentType}
                {/*status*/}
              </S.StatusText>
              {/* ТИП ОПЛАТЫ */}
            </S.StatusShort>
          </S.StatusEl>
        </S.Status>

        <S.Shipment>
          <S.Date type="paymentDate">{paymentDate}</S.Date>
        </S.Shipment>
        <S.Summ>
          <S.SummEl key={`item-summ-${id}`}>
            <S.SummPrice>
              {summ}
              {" ₽"}
            </S.SummPrice>
            <S.SummStatus level={summLevel}>{paymentStatus}</S.SummStatus>
          </S.SummEl>
        </S.Summ>

        {/* <S.MobAuthor title={author}>
          <OrderAuthor id={id} day={day} />
          <OrderShipment city={city} type={type} />
        </S.MobAuthor>

        <S.InfoMob
          opened={openedInfo}
          setOpened={setOpenedInfo}
          onSave={onCommentChange}
        >
          {info}
        </S.InfoMob> */}
      </S.Inner>
    </S.Block>
  )
}

export default Order
