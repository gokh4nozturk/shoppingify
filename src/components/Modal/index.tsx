import React from "react";

import {
  Container,
  CloseBtn,
  Title,
  BtnContainer,
  CancelBtn,
  YesBtn,
} from "./style";

const CancelPopUp = () => {
  return (
    <Container>
      <BtnContainer>
        <CloseBtn>X</CloseBtn>
      </BtnContainer>
      <Title>Are you sure that you want to cancel this list?</Title>
      <BtnContainer>
        <CancelBtn>Cancel</CancelBtn>
        <YesBtn>Yes</YesBtn>
      </BtnContainer>
    </Container>
  );
};
export default CancelPopUp;
