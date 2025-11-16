import React from "react";
import styles from "./filter.module.css";
import Input from "@/components/UI/Input/Input";
import Select from "@/components/UI/Select/Select";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  clearFilter,
  setFromPoint,
  setSource,
  setToPoint,
  setUid,
} from "@/store/reducers/orderSlice";
import del from "@/assets/delete.svg";
import Button from "@/components/UI/Button/Button";

const options = [
  { value: "", label: "По-умолчанию" },
  { value: "Эфес", label: "Эфес (Гарантии)" },
  { value: "Магнит", label: "Магнит (Гарантии)" },
];

const Filter: React.FC = () => {
  const { source, uid, toPoint, fromPoint } = useAppSelector(
    (state) => state.orderReducer
  );

  const dispatch = useAppDispatch();

  const changeSource = (value: string) => {
    dispatch(setSource(value));
  };
  const changeUid = (value: string) => {
    dispatch(setUid(value));
  };
  const changeToPoint = (value: string) => {
    dispatch(setToPoint(value));
  };
  const changeFromPoint = (value: string) => {
    dispatch(setFromPoint(value));
  };
  const clearAllFilters = () => {
    dispatch(clearFilter());
  };

  return (
    <div className={styles.wrapper}>
      <Select options={options} value={source} setValue={changeSource} />
      <Input value={uid} setValue={changeUid} placeholder="ID" type="text" />
      <Input
        value={fromPoint}
        setValue={changeFromPoint}
        placeholder="Откуда"
        type="text"
      />
      <Input
        value={toPoint}
        setValue={changeToPoint}
        placeholder="Куда"
        type="text"
      />
      <div className={styles.but_wra}>
      <Button onClick={clearAllFilters} text="Сбросить" img={del} />

      </div>
    </div>
  );
};

export default Filter;
