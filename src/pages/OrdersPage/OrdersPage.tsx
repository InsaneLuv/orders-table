import OrdersActions from "@/components/OrdersActions/OrdersActions";
import OrdersHeader from "@/components/OrdersHeader/OrdersHeader";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useGetOrderQuery } from "@/services/orderService";
import React, { useState } from "react";
import styles from "./orders-page.module.css";
import OrdersTable from "@/components/OrdersTable/OrdersTable";
import OrdersCard from "@/components/OrdersCard/OrdersCard";
import { useAppSelector } from "@/hooks/redux";
import PaginationBar from "@/components/PaginationBar/PaginationBar";
import useDebounce from "@/hooks/useDebounce";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Loading from "@/components/Loading/Loading";

const OrdersPage: React.FC = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const { source, uid, fromPoint, toPoint, page, sortBy } = useAppSelector(
    (state) => state.orderReducer
  );

  const debouncedUid = useDebounce(uid, 500);
  const debouncedFromPoint = useDebounce(fromPoint, 500);
  const debouncedToPoint = useDebounce(toPoint, 500);

  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useGetOrderQuery({
    uid: debouncedUid,
    from_point: debouncedFromPoint,
    to_point: debouncedToPoint,
    source,
    limit: 10,
    page: page,
    sort_by: sortBy,
  });

  const isTablet = useWindowWidth(1024);

  const toggler = () => {
    setIsFilter((prev) => !prev);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage text={error.message} />;
  }

  return (
    <div>
      <OrdersHeader />
      <div className={styles.wrapper}>
        <OrdersActions toggler={toggler} />
        {isTablet ? (
          <OrdersCard orders={orders} isFilter={isFilter} toggle={toggler} />
        ) : (
          <OrdersTable orders={orders} isFilter={isFilter} />
        )}
        <PaginationBar totalPage={5} />
      </div>
    </div>
  );
};

export default OrdersPage;
