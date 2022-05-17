import { useState } from "react"
import styled, { css } from "styled-components"
import * as vars from "./helpers/vars"
import { fontBase, fieldDisabled, fieldError } from "./helpers/mixins"

const StyledTextarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid ${vars.color.background};
  width: 100%;
  outline: none !important;
  transition: border ${vars.trans.base};
  -webkit-appearance: none;
  resize: vertical;

  &::placeholder {
    opacity: 1;
    color: ${vars.color.muted};
  }

  &:hover {
    border-color: ${vars.color.backgroundDark};
  }

  &:focus {
    border-color: ${vars.color.links};
  }

  &:disabled {
    ${fieldDisabled}
  }

  ${(props) =>
    props.error &&
    css`
      &,
      &:hover,
      &:focus {
        ${fieldError}
      }
    `}

  ${(props) =>
    props.size == "base" &&
    css`
      ${fontBase}
      font-weight: 500;
      padding: 16px;
    `}
`

const BaseTextarea = (props) => {
  const {
    disabled,
    size = "base",
    value,
    name,
    onChange,
    onInput,
    onBlur,
    error,
    placeholder,
    id,
    className
  } = props
  const [myValue, setMyValue] = useState(value)

  const handlerChange = (e) => {
    setMyValue(e.currentTarget.value)
    onChange && onChange(e.currentTarget.value)
  }

  return (
    <StyledTextarea
      className={className}
      id={id}
      disabled={disabled}
      value={myValue}
      name={name}
      size={size}
      error={error}
      placeholder={placeholder}
      onChange={handlerChange}
      onInput={onInput}
      onBlur={onBlur}
    />
  )
}

export default BaseTextarea
