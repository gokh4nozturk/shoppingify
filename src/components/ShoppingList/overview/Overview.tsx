import React, { useContext } from "react";
import { OverviewContainer, BtnBack, BackButton } from "../style/styleOverview";
import { BsArrowLeft } from "react-icons/bs";
import { Shopping } from "../../../context";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  const { isControlToggleOverview, overviewItem } = useContext(Shopping);

  return (
    <OverviewContainer>
      <BtnBack>
        <BackButton
          onClick={() => {
            isControlToggleOverview(false);
          }}
        >
          <BsArrowLeft />
          back
        </BackButton>
      </BtnBack>

      {overviewItem.map((item) => {
        return <OverviewItem item={item} />;
      })}
    </OverviewContainer>
  );
};

export default Overview;
