import React, { useEffect, useState } from "react";

import { HistoryType } from "./Details";

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
import Axios from "axios";
import { Link } from "react-router-dom";

type ResponseType = undefined | HistoryType[];

const History = () => {
  const [history, setHistories] = useState<HistoryType[]>([]);
  const [isCompleted, setIsCompleted] = useState(true);

  const variable = isCompleted ? border.completed : border.cancelled;

  const historyDate = new Date();
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

  const getHistory = async () => {
    const newHistories: ResponseType = await Axios.get("/api/histories")
      .then((res) => res.data)
      .catch((err) => console.log(err));

    setHistories(newHistories);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <Container>
        <Title>Shopping history</Title>
        {history.map((item) => {
          return (
            <ResultsContainer>
              <ResultsMonth>
                {months[historyDate.getMonth()] +
                  " " +
                  historyDate.getFullYear()}
              </ResultsMonth>
              <ShoppingContainer>
                <ShoppingName>{item.name}</ShoppingName>

                <DetailPartSecond>
                  <ShoppingDateContainer>
                    <BsCalendar size="1.5rem" />
                    <ShoppingDateDetail>
                      {historyDate.getMonth() +
                        "." +
                        historyDate.getDate() +
                        "." +
                        historyDate.getFullYear()}
                    </ShoppingDateDetail>
                  </ShoppingDateContainer>
                  <ShoppingState color={variable}>
                    {isCompleted ? `completed` : `cancelled`}
                  </ShoppingState>
                  <Link to={`history/${item._id}`}>
                    <FaChevronRight size="1.5rem" />
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
