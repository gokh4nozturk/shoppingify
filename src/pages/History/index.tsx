import React, { useState } from "react";

import Details from "./Details";

import {
  Container,
  Title,
  ResultsContainer,
  ResultsMonth,
  ShoppingContainer,
  ShoppingName,
  DetailPartSecond,
  ShoppingDateContainer,
  ShoppingDateDetail,
  ShoppingState,
  ShoppingDetailBtn,
  border,
} from "./style/styledIndex";
import { FaChevronRight } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";

const History = () => {
  const [onToggleDetail, setOnToggleDetail] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);

  const degisken = isCompleted ? border.completed : border.cancelled;

  const isControlDetail = () => {
    setOnToggleDetail(!onToggleDetail);
  };

  const d = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      {!onToggleDetail ? (
        <Container>
          <Title>Shopping history</Title>
          <ResultsContainer>
            <ResultsMonth>
              {months[d.getMonth()] + " " + d.getFullYear()}
            </ResultsMonth>
            <ShoppingContainer>
              <ShoppingName>{`Grocery List`}</ShoppingName>

              <DetailPartSecond>
                <ShoppingDateContainer>
                  <BsCalendar size="1.5rem" />
                  <ShoppingDateDetail>
                    {d.getMonth() + "." + d.getDay() + "." + d.getFullYear()}
                  </ShoppingDateDetail>
                </ShoppingDateContainer>
                <ShoppingState color={degisken}>
                  {isCompleted ? `completed` : `cancelled`}
                </ShoppingState>
                <ShoppingDetailBtn onClick={isControlDetail}>
                  <FaChevronRight size="1.5rem" />
                </ShoppingDetailBtn>
              </DetailPartSecond>
            </ShoppingContainer>
          </ResultsContainer>
          <ResultsContainer>
            <ResultsMonth>
              {months[d.getMonth()] + " " + d.getFullYear()}
            </ResultsMonth>
            <ShoppingContainer>
              <ShoppingName>{`Grocery List`}</ShoppingName>

              <DetailPartSecond>
                <ShoppingDateContainer>
                  <BsCalendar size="1.5rem" />
                  <ShoppingDateDetail>
                    {d.getMonth() + "." + d.getDay() + "." + d.getFullYear()}
                  </ShoppingDateDetail>
                </ShoppingDateContainer>
                <ShoppingState color={degisken}>
                  {isCompleted ? `completed` : `cancelled`}
                </ShoppingState>
                <ShoppingDetailBtn onClick={isControlDetail}>
                  <FaChevronRight size="1.5rem" />
                </ShoppingDetailBtn>
              </DetailPartSecond>
            </ShoppingContainer>
          </ResultsContainer>
          <ResultsContainer>
            <ResultsMonth>
              {months[d.getMonth()] + " " + d.getFullYear()}
            </ResultsMonth>
            <ShoppingContainer>
              <ShoppingName>{`Grocery List`}</ShoppingName>

              <DetailPartSecond>
                <ShoppingDateContainer>
                  <BsCalendar size="1.5rem" />
                  <ShoppingDateDetail>
                    {d.getMonth() + "." + d.getDay() + "." + d.getFullYear()}
                  </ShoppingDateDetail>
                </ShoppingDateContainer>
                <ShoppingState color={degisken}>
                  {isCompleted ? `completed` : `cancelled`}
                </ShoppingState>
                <ShoppingDetailBtn onClick={isControlDetail}>
                  <FaChevronRight size="1.5rem" />
                </ShoppingDetailBtn>
              </DetailPartSecond>
            </ShoppingContainer>
          </ResultsContainer>
          <ResultsContainer>
            <ResultsMonth>
              {months[d.getMonth()] + " " + d.getFullYear()}
            </ResultsMonth>
            <ShoppingContainer>
              <ShoppingName>{`Grocery List`}</ShoppingName>

              <DetailPartSecond>
                <ShoppingDateContainer>
                  <BsCalendar size="1.5rem" />
                  <ShoppingDateDetail>
                    {d.getMonth() + "." + d.getDay() + "." + d.getFullYear()}
                  </ShoppingDateDetail>
                </ShoppingDateContainer>
                <ShoppingState color={degisken}>
                  {isCompleted ? `completed` : `cancelled`}
                </ShoppingState>
                <ShoppingDetailBtn onClick={isControlDetail}>
                  <FaChevronRight size="1.5rem" />
                </ShoppingDetailBtn>
              </DetailPartSecond>
            </ShoppingContainer>
          </ResultsContainer>
        </Container>
      ) : (
        <Details isControlDetail={isControlDetail}></Details>
      )}
    </>
  );
};

export default History;
