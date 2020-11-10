import React, { useContext } from "react";
import { Shopping } from "../../context";

import {
  Container,
  CloseBtn,
  Title,
  BtnContainer,
  CancelBtn,
  YesBtn,
} from "./style";

const CancelPopUp = () => {
  const { isControlPopUpToggle } = useContext(Shopping);
  return (
    <Container>
      <BtnContainer>
        <CloseBtn onClick={isControlPopUpToggle}>X</CloseBtn>
      </BtnContainer>
      <Title>Are you sure that you want to delete this list?</Title>
      <BtnContainer>
        <CancelBtn onClick={isControlPopUpToggle}>Cancel</CancelBtn>
        <YesBtn>Yes</YesBtn>
      </BtnContainer>
    </Container>
  );
};
export default CancelPopUp;
