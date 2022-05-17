import React from "react"
import styled from "styled-components"
import * as vars from "../../helpers/vars"
import { titleH1, fontLarge } from "../../helpers/mixins"
import { rgba } from "polished"
import { Modal } from "react-responsive-modal"
import ButtonClose from "../../ButtonClose"
import "react-responsive-modal/styles.css"

const StyledModal = styled.div`
  border-radius: 4px;
  background: ${vars.color.white};
  box-shadow: 0 0 24px ${rgba(vars.color.shadow, 0.16)};
  position: relative;
  width: 100%;
  flex: 0 0 auto;
  pointer-events: all;
`
const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 49px 40px 0;
  margin-bottom: 32px;

  ${vars.media.phabletSmall} {
    padding: 24px 24px 0;
    margin-bottom: 18px;
  }
`
const StyledTitle = styled.b`
  ${titleH1}
  display: block;
  color: ${vars.color.text};
  font-weight: 700;
  padding-right: 40px;
  cursor: default;

  ${vars.media.phabletSmall} {
    ${fontLarge}
  }
`
const StyledClose = styled(ButtonClose)`
  color: ${vars.color.price};
  position: absolute;
  right: 40px;
  top: 40px;

  ${vars.media.phabletSmall} {
    right: 20px;
    top: 20px;
  }
`
const StyledBody = styled.div`
  padding: 0 40px 40px;

  ${vars.media.phabletSmall} {
    padding: 0 24px 24px;
  }
`

const DefaultModal = ({ open, setOpen, title, maxWidth, children }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      showCloseIcon={false}
      center={true}
      classNames={{ modal: `default-modal` }}
      styles={maxWidth && { modal: { maxWidth: `${maxWidth}px` } }}
    >
      <StyledModal>
        <StyledHead>
          <StyledTitle>{title}</StyledTitle>
          <StyledClose onClick={() => setOpen(false)} />
        </StyledHead>

        <StyledBody>{children}</StyledBody>
      </StyledModal>
    </Modal>
  )
}

export default DefaultModal
