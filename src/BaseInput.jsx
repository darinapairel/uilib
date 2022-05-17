import React, { useState } from "react"
import styled, { css } from "styled-components"
import * as vars from "./helpers/vars"
import { inputSizeBase, fieldDisabled, fieldError } from "./helpers/mixins"

const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid ${vars.color.background};
  outline: none !important;
  transition: border ${vars.trans.base}, background-color ${vars.trans.base};
  -webkit-appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    opacity: 1;
    color: ${vars.color.price};
    font-weight: 400;
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

  ${(props) => props.size == "base" && inputSizeBase}
`

const BaseInput = React.forwardRef(
  (
    {
      disabled,
      size = "base",
      type = "text",
      value = "",
      name,
      error,
      onChange,
      onInput,
      onBlur,
      onFocus,
      placeholder,
      id,
      className,
      autocomplete
    },
    ref
  ) => {
    const [myValue, setMyValue] = useState(value)

    const handlerChange = (e) => {
      setMyValue(e.currentTarget.value)
      onChange && onChange(e)
    }

    return (
      <StyledInput
        className={className}
        id={id}
        type={type}
        disabled={disabled}
        value={myValue}
        name={name}
        size={size}
        error={error}
        placeholder={placeholder}
        onChange={handlerChange}
        onInput={onInput}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref}
        autocomplete={autocomplete}
      />
    )
  }
)

export default BaseInput
