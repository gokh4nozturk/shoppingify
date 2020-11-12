import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import { BsCalendar } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { HistoryType } from "./Details";
import {
  CompleteBtn,
  CompleteCancelBtn,
  CompleteContainer,
  CompleteDeleteBtn,
  SubTitle,
  Title,
} from "../style/styledDetails";
import {
  border,
  ShoppingDateContainer,
  ShoppingDateDetail,
  ShoppingState,
} from "../style/styledIndex";

interface Props {
  item: HistoryType;
  id: string;
  fetchList: () => void;
}

const DetailsTitle = ({ item, id, fetchList }: Props) => {
  const { goBack } = useHistory();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const itemDate = new Date(`${item.createdAt}`);

  const UpdateTheHistory = useCallback(
    (state) => {
      Axios.put(`/api/history/${id}`, {
        completed: state,
      })
        .then(function (response) {
          fetchList(); // for any updates
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [id, fetchList]
  );

  const DeleteTheHistory = useCallback(
    //this function will use with pop up
    () => {
      Axios.delete(`/api/history/${id}`)
        .then(function (response) {
          console.log(response);
          goBack();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [id, goBack]
  );

  return (
    <Title key={item._id}>
      <SubTitle>{item.name}</SubTitle>
      <ShoppingState
        className="complete-state"
        color={item.completed ? border.completed : border.cancelled}
      >
        {item.completed ? `completed` : `cancelled`}
      </ShoppingState>
      <ShoppingDateContainer className="sub-title-date">
        <BsCalendar size="1.5rem" />
        <ShoppingDateDetail>
          {days[itemDate.getDay()] +
            " " +
            itemDate.getMonth() +
            " " +
            itemDate.getDate() +
            " " +
            itemDate.getFullYear()}
        </ShoppingDateDetail>
      </ShoppingDateContainer>
      <CompleteContainer>
        <CompleteDeleteBtn
          onClick={() => {
            DeleteTheHistory();
          }}
        >
          <FiTrash2 size="1.5em" />
        </CompleteDeleteBtn>
        <CompleteCancelBtn
          onClick={() => {
            UpdateTheHistory(false);
          }}
        >
          Cancel
        </CompleteCancelBtn>
        <CompleteBtn
          onClick={() => {
            UpdateTheHistory(true);
          }}
        >
          Complete
        </CompleteBtn>
      </CompleteContainer>
    </Title>
  );
};

export default DetailsTitle;
