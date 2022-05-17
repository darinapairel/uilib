import React from "react"
import styled, { keyframes, css } from "styled-components"
import { transparentize } from "polished"
import * as vars from "./helpers/vars"
import LoaderImg from "./assets/img/loader_logo.svg"

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`
const StyledLoaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  max-width: 80px;
  max-height: 80px;
  /* transition: opacity ${vars.trans.base}, visibility ${vars.trans.base}; */

  ${(p) =>
    p.product &&
    css`
      padding-top: 40px;
      padding-bottom: 40px;
      margin: 0 auto;
    `}
`
const StyledLoader = styled.div`
  box-sizing: border-box;
  padding: 37px;

  border-radius: 50%;

  border-top: 3px solid ${transparentize(0.5, "#e0e2e8")};
  border-right: 3px solid ${transparentize(0.5, "#e0e2e8")};
  border-bottom: 3px solid ${transparentize(0.5, "#e0e2e8")};
  border-left: 3px solid #5895e1;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${rotate} 0.5s infinite linear;
  animation: ${rotate} 0.5s infinite linear;
`
const StytledImg = styled(LoaderImg)`
  /* display: inline-block; 
     vertical-align: middle; 
     flex: 0 0 auto; */
  width: 24px;
  height: 24px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  transform: translateY(3px);
`

const Loader = ({ speed = 0.6, className = "", product = false }) => {
  return (
    <StyledLoaderWrapper className={className} product={product}>
      <LoaderImg />
      <StyledLoader />
      <StytledImg speed={speed} />
    </StyledLoaderWrapper>
  )
}

export default Loader
