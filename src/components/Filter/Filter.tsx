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
  setTripId,
} from "@/store/reducers/orderSlice";
import del from "@/assets/delete.svg";
import Button from "@/components/UI/Button/Button";

const options = [
  { value: "", label: "Все источники" },
  { value: 'СЕЛЬТА', label: "Сельта (Гарантии)" },
  { value: 'ООО "СЕЛЬТА"', label: "Сельта (Спот)" },
  { value: 'AB InBev Efes', label: "Эфес (Гарантии)" },
  { value: 'АО "АБ ИНБЕВ ЭФЕС"', label: "Эфес (Спот)" },
  { value: 'ООО "А ЛОГИСТИКС"', label: "Аскона (Спот)" },
];

const Filter: React.FC = () => {
  const { source, trip_id, toPoint, fromPoint } = useAppSelector(
    (state) => state.orderReducer
  );

  const dispatch = useAppDispatch();

  const changeSource = (value: string) => {
    dispatch(setSource(value));
  };
  const changeTripId = (value: string) => {
    dispatch(setTripId(value));
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
  // const {data: sources} = useGetSourcesQuery()
  // console.log(sources);
  return (
    <div className={styles.wrapper}>
      <Select options={options} value={source} setValue={changeSource} />
      <Input value={trip_id} setValue={changeTripId} placeholder="Номер транспортировки" type="Номер транспортировки" />
      <Input
        value={fromPoint}
        setValue={changeFromPoint}
        placeholder="Отправка"
        type="text"
      />
      <Input
        value={toPoint}
        setValue={changeToPoint}
        placeholder="Прибытие"
        type="text"
      />
      <div className={styles.but_wra}>
      <Button onClick={clearAllFilters} text="Сбросить" img={del} />

      </div>
    </div>
  );
};

export default Filter;
