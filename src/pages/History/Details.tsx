import React from "react";

import { Container } from "./style/styledDetails";

interface PropTypes {
  isControlDetail: () => void;
}

const Details = ({ isControlDetail }: PropTypes) => {
  return (
    <Container>
      <button onClick={isControlDetail}>History</button>
    </Container>
  );
};

export default Details;
