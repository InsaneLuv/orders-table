import OrdersHeader from "@/components/OrdersHeader/OrdersHeader";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useGetOrderQuery } from "@/services/orderService";
import React, { useState } from "react";
import styles from "./orders-page.module.css";
import OrdersTable from "@/components/OrdersTable/OrdersTable";
import OrdersCard from "@/components/OrdersCard/OrdersCard";
import { useAppSelector } from "@/hooks/redux";
import useDebounce from "@/hooks/useDebounce";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Loading from "@/components/Loading/Loading";

const OrdersPage: React.FC = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const { source, trip_id, fromPoint, toPoint, page, sortBy, sortDir } = useAppSelector(
    (state) => state.orderReducer
  );

  const debouncedTripId = useDebounce(trip_id, 500);
  const debouncedFromPoint = useDebounce(fromPoint, 500);
  const debouncedToPoint = useDebounce(toPoint, 500);
  const isTablet = useWindowWidth(1024);

  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useGetOrderQuery({
    trip_id: debouncedTripId,
    from_point: debouncedFromPoint,
    to_point: debouncedToPoint,
    source,
    limit: 300,
    page: page,
    sort_by: sortBy,
    sort_dir: sortDir,
  });

  const toggler = () => {
    setIsFilter((prev) => !prev);
  };

  // Используем total_pages из ответа API
  // const totalPages = orders?.total_pages || 1;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage text={error.message} />;
  }

  return (
    <div>
      <OrdersHeader toggler={toggler} />
      <div className={styles.wrapper}>
        {isTablet ? (
          <OrdersCard orders={orders} isFilter={isFilter} toggle={toggler} />
        ) : (
          <OrdersTable orders={orders} isFilter={isFilter} />
        )}
        {/* <PaginationBar totalPage={totalPages} /> */}
      </div>
    </div>
  );
};

export default OrdersPage;