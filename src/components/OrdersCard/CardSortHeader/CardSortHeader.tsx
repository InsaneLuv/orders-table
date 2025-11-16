import SortHeader from "@/components/SortHeader/SortHeader";
import React from "react";
import styles from "./card-sort-header.module.css";
import { useAppDispatch } from "@/hooks/redux";
import { setSortBy } from "@/store/reducers/orderSlice";

const CardSortHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  const sortLoading = () => {
    dispatch(setSortBy("loading_dt"));
  };

  const sortFromPoint = () => {
    dispatch(setSortBy("points.0"));
  };

  const sortToPoint = () => {
    dispatch(setSortBy("points.1"));
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
