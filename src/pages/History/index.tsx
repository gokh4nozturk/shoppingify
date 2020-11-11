import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Shopping } from "../../context";
import { useTitle } from "react-use";

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
  border,
} from "./style/styledIndex";
import { FaChevronRight } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";

const History = () => {
  useTitle("History");
  const { history } = useContext(Shopping);

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
      <Container>
        <Title>Shopping history</Title>
        {history.map((item) => {
          return (
            <ResultsContainer key={item._id}>
              <ResultsMonth>
                {`${months[new Date(item.createdAt).getMonth()]} ` +
                  new Date(item.createdAt).getFullYear()}
              </ResultsMonth>
              <ShoppingContainer>
                <ShoppingName>{item.name}</ShoppingName>

                <DetailPartSecond>
                  <ShoppingDateContainer>
                    <BsCalendar size="1.5rem" />
                    <ShoppingDateDetail>
                      {new Date(item.createdAt).getMonth() +
                        "." +
                        new Date(item.createdAt).getDate() +
                        "." +
                        new Date(item.createdAt).getFullYear()}
                    </ShoppingDateDetail>
                  </ShoppingDateContainer>
                  <ShoppingState
                    color={item.completed ? border.completed : border.cancelled}
                  >
                    {item.completed ? `completed` : `cancelled`}
                  </ShoppingState>
                  <Link to={`history/${item._id}`}>
                    <FaChevronRight
                      size="1.5rem"
                      style={{
                        textDecoration: "none",
                        color: "#F9A109",
                      }}
                    />
                  </Link>
                </DetailPartSecond>
              </ShoppingContainer>
            </ResultsContainer>
          );
        })}
      </Container>
    </>
  );
};

export default History;
