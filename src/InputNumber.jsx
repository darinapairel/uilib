import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import * as vars from "./helpers/vars"
import ArrowIcn from "./assets/img/input-number.svg"
import Repeatable from "react-repeatable"

const StyledBlock = styled.label`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 68px;

  ${(props) =>
    props.variant == "goods" &&
    css`
      width: 60px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid ${vars.color.background};
  background: ${vars.color.white};
  text-align: right;
  color: ${vars.color.text};
  font-weight: 500;
  font-size: ${vars.font.base};
  height: 40px;
  padding: 0 29px 0 0;
  transition: border ${vars.trans.base}, background ${vars.trans.base};
  outline: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: textfield !important;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover {
    background-color: ${vars.color.inputs};
  }

  &:focus {
    border-color: ${vars.color.accent};
  }

  ${(props) =>
    props.variant == "goods" &&
    css`
      padding-right: 10px;
      text-align: center;

      ${vars.media.phabletSmall} {
        padding-right: 0;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${vars.color.inputs};
      pointer-events: none;
      color: ${vars.color.price};
      cursor: default;
    `}

  ${(props) =>
    props.error &&
    css`
      color: ${vars.color.important};
    `}
`

const stylesBtn = css`
  display: inline-flex;
  justify-content: flex-start;
  height: 20px;
  width: 21px;
  position: absolute;
  right: 0;
  user-select: none;
  color: ${vars.color.accent};
  line-height: 1;
  cursor: pointer;
`
const stylesIcn = css`
  display: inline-block;
  vertical-align: top;
  width: 12px;
  height: 12px;
  flex: 0 0 auto;
  transition: margin ${vars.trans.base};
`

const StyledUp = styled(Repeatable)`
  ${stylesBtn}
  top: 0;
  align-items: flex-end;

  ${(props) =>
    props.disabled &&
    css`
      color: ${vars.color.price};
      pointer-events: none;
    `}

  ${(props) =>
    props["data-disabled"] == "true" &&
    css`
      color: ${vars.color.price};
      pointer-events: none;
    `}

  ${(props) =>
    props["data-variant"] == "goods" &&
    css`
      ${vars.media.phabletSmall} {
        display: none;
      }
    `}
`
const StyledUpIcn = styled(ArrowIcn)`
  ${stylesIcn}
  margin-bottom: 2px;

  ${StyledUp}:hover & {
    opacity: 0.8;
  }

  ${StyledUp}:active & {
    margin-bottom: 4px;
  }
`
const StyledDown = styled(Repeatable)`
  ${stylesBtn}
  bottom: 0;
  justify-content: flex-start;

  ${(props) =>
    props.disabled &&
    css`
      color: ${vars.color.price};
      pointer-events: none;
    `}

  ${(props) =>
    props["data-disabled"] == "true" &&
    css`
      color: ${vars.color.price};
      pointer-events: none;
    `}

  ${(props) =>
    props["data-variant"] == "goods" &&
    css`
      ${vars.media.phabletSmall} {
        display: none;
      }
    `}
`
const StyledDownIcn = styled(ArrowIcn)`
  ${stylesIcn}
  transform: rotate(180deg);
  margin-top: 2px;

  ${StyledDown}:hover & {
    opacity: 0.8;
  }

  ${StyledDown}:active & {
    margin-top: 4px;
  }
`

const InputNumber = (props) => {
  const {
    min = 1,
    max = 999,
    step = 1,
    value,
    name,
    variant,
    disabled,
    error,
    onChange,
    className
  } = props
  const [inputValue, setInputValue] = useState(+value || 1)
  const ref = useRef(null)
  useEffect(() => {
    if (value && +value !== +inputValue) {
      setInputValue(value)
      onChange && onChange(value)
    }
  }, [value])
  const updateValue = (value) => {
    setInputValue(value)
    onChange && onChange(value)
  }

  const handlerUp = (e) => {
    let value = +inputValue || min
    if (value >= max) return
    updateValue(value + step)
  }

  const handlerDown = () => {
    if (inputValue <= min) return
    updateValue(+inputValue - step)
  }

  const handlerBlur = (e) => {
    if (step > 1) {
      updateValue(Math.ceil(+e.target.value / step) * step)
    }
    if (+e.target.value == 0) {
      updateValue(step > 1 ? step : 1)
    }
  }

  const handlerChange = (e) => {
    const input = String(e.target.value)
    const filter = input.replace(/[^\d]/, "")
    let value = +filter // ? +filter : 1

    if (value == 0) {
      value = ""
    }

    if (value > max) {
      value = max
    }

    updateValue(value)
  }

  return (
    <StyledBlock disabled={disabled} className={className} variant={variant}>
      <StyledInput
        min={min}
        max={max}
        value={inputValue}
        onBlur={handlerBlur}
        onChange={handlerChange}
        type="text"
        name={name}
        variant={variant}
        error={error}
        disabled={disabled}
        ref={ref}
      />

      <StyledUp
        onPress={handlerUp}
        onHold={handlerUp}
        repeatDelay={500}
        repeatInterval={50}
        role="button"
        tag="span"
        data-disabled={(inputValue >= max).toString()}
        data-variant={variant}
        disabled={disabled}
        aria-label="Увеличить"
      >
        <StyledUpIcn />
      </StyledUp>
      <StyledDown
        onPress={handlerDown}
        onHold={handlerDown}
        repeatDelay={500}
        repeatInterval={50}
        role="button"
        tag="span"
        data-disabled={(inputValue <= min).toString()}
        data-variant={variant}
        disabled={disabled}
        aria-label="Уменьшить"
      >
        <StyledDownIcn />
      </StyledDown>
    </StyledBlock>
  )
}

export default InputNumber
