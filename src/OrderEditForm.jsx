import React from 'react'
import styled, { css } from "styled-components"
import * as vars from "./helpers/vars"
import { fontBase } from "./helpers/mixins"
import Radio from "./Radio"
import BaseTextarea from "./BaseTextarea"
import Button from "./Button"
import BaseSelect from "./BaseSelect"

const StyledBlock = styled.div`
  width: 100%;
`
const StyledRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  ${vars.media.phabletSmall} {
    flex-wrap: wrap;
  }
`

const StyledSide = styled.div`
  padding-right: 12px;
  width: 233px;
  flex: 0 0 auto;
  text-align: left;

  ${(props) =>
    props.mod == "top" &&
    css`
      align-self: flex-start;
      padding-top: 10px;
    `}

  ${vars.media.phablet} {
    width: 160px;
  }

  ${vars.media.phabletSmall} {
    width: 100%;
    padding-right: 0;
    margin-bottom: 4px;
  }
`
const StyledLabel = styled.b`
  ${fontBase}
  display: block;
  color: ${vars.color.text};
  cursor: default;
  font-weight: 400;
`
const StyledContent = styled.div`
  width: 100%;
  flex: 0 1 auto;
  min-width: 1px;
`

const StyledSelect = styled(BaseSelect)``
const StyledTextarea = styled(BaseTextarea)`
  width: 100%;
  height: 90px;
  resize: none;
`
const StyledVariants = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: -4px;
  margin-left: -4px;
  margin-right: -4px;
`
const StyledVar = styled.li`
  margin-bottom: 4px;
  margin-right: 4px;
  margin-left: 4px;
`
const StyledRadio = styled(Radio)`
  font-weight: 500;
`
const StyledRadioLabel = styled.span`
  padding-left: 4px;
`

const StyledFooter = styled(StyledRow)`
  margin-top: 32px;
  text-align: right;
  justify-content: flex-end;
`
const StyledSend = styled(Button)`
  border-radius: 4px;
  width: 160px;

  ${vars.media.phabletSmall} {
    height: ${vars.field.base};
    font-size: ${vars.font.base};
    width: 100%;
  }
`

const urik = [
  { value: "1", label: 'ООО "ИБС Платформикс" ИНН 770750770750' },
  { value: "2", label: 'ООО "Микс" ИНН 770750770330' },
  { value: "3", label: 'ООО "Платс" ИНН 7170750770750' }
]
const marvel = [
  { value: "1", label: 'ООО "Марвел КТ" ИНН 7811365157 ' },
  { value: "2", label: 'ООО "Марвел Москва" ИНН 3311365157 ' },
  { value: "3", label: 'ООО "Марвел Россия" ИНН 78113651513 ' }
]
const number = [
  { value: "1", label: "251218-У" },
  { value: "2", label: "331218-E" },
  { value: "3", label: "251219-A" }
]
const sklad = [
  { value: "1", label: "МСК - Климовск" },
  { value: "2", label: "МСК - Химки" },
  { value: "3", label: "СПБ - Девяткино" }
]

const OrderEditForm = ({ className }) => {
  return (
    <StyledBlock className={className}>
      <StyledRow>
        <StyledSide>
          <StyledLabel>Ваше юридическое лицо:</StyledLabel>
        </StyledSide>
        <StyledContent>
          <StyledSelect size="base" options={urik} defaultValue={urik[0]} />
        </StyledContent>
      </StyledRow>
      <StyledRow>
        <StyledSide>
          <StyledLabel>Юридическое лицо Марвел:</StyledLabel>
        </StyledSide>
        <StyledContent>
          <StyledSelect size="base" options={marvel} defaultValue={marvel[0]} />
        </StyledContent>
      </StyledRow>
      <StyledRow>
        <StyledSide>
          <StyledLabel>Номер договора:</StyledLabel>
        </StyledSide>
        <StyledContent>
          <StyledSelect size="base" options={number} defaultValue={number[0]} />
        </StyledContent>
      </StyledRow>
      <StyledRow>
        <StyledSide>
          <StyledLabel>Тип отгрузки:</StyledLabel>
        </StyledSide>
        <StyledContent>
          <StyledVariants>
            <StyledVar>
              <StyledRadio name="delivery">
                <StyledRadioLabel>Доставка</StyledRadioLabel>
              </StyledRadio>
            </StyledVar>
            <StyledVar>
              <StyledRadio name="delivery">
                <StyledRadioLabel>Доставка до ТК</StyledRadioLabel>
              </StyledRadio>
            </StyledVar>
            <StyledVar>
              <StyledRadio name="delivery">
                <StyledRadioLabel>Самовывоз</StyledRadioLabel>
              </StyledRadio>
            </StyledVar>
          </StyledVariants>
        </StyledContent>
      </StyledRow>
      <StyledRow>
        <StyledSide>
          <StyledLabel>Склад отгрузки:</StyledLabel>
        </StyledSide>
        <StyledContent>
          <StyledSelect size="base" options={sklad} defaultValue={sklad[0]} />
        </StyledContent>
      </StyledRow>
      <StyledRow>
        <StyledSide mod="top">
          <StyledLabel>Комментарий:</StyledLabel>
        </StyledSide>
        <StyledContent>
          <StyledTextarea value="Для DNS на Новослободской, отгрузка по мере поступления." />
        </StyledContent>
      </StyledRow>

      <StyledFooter>
        <StyledSend mod="base" size="medium">
          Сохранить
        </StyledSend>
      </StyledFooter>
    </StyledBlock>
  )
}

export default OrderEditForm
