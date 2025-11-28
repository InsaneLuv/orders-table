import SortHeader from "@/components/SortHeader/SortHeader";
import React from "react";
import styles from "./card-sort-header.module.css";
import { useAppDispatch } from "@/hooks/redux";
import { setSortBy } from "@/store/reducers/orderSlice";

const CardSortHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  const sortLoading = () => {
    dispatch(setSortBy("departure.planed_date"));
  };

  const sortFromPoint = () => {
    dispatch(setSortBy("departure.city_name"));
  };

  const sortToPoint = () => {
    dispatch(setSortBy("destination.city_name"));
  };

  return (
    <div className={styles.sort}>
      <SortHeader text="Погрузка" onClick={sortLoading} />
      <SortHeader text="Откуда" onClick={sortFromPoint} />
      <SortHeader text="Куда" onClick={sortToPoint} />
    </div>
  );
};

export default CardSortHeader;
