import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/Table";

import convertToReadableDate from "@/helper/readableDate";
import { useAppDispatch } from "@/hooks/redux";
import { setSortBy } from "@/store/reducers/orderSlice";
import type { IOrder } from "@/type/main";
import React from "react";
import TableContentAction from "./TableContentAction/TableContentAction";
import SortHeader from "@/components/SortHeader/SortHeader";

const TableContent: React.FC<{ orders: IOrder[] }> = ({ orders }) => {
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
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>ID</TableHeader>
          <TableHeader>
            <SortHeader onClick={sortLoading} text="Погрузка" />
          </TableHeader>
          <TableHeader>
            <SortHeader onClick={sortFromPoint} text="Откуда" />
          </TableHeader>
          <TableHeader>
            <SortHeader onClick={sortToPoint} text="Куда" />
          </TableHeader>
          <TableHeader>Груз</TableHeader>
          <TableHeader>TC</TableHeader>
          <TableHeader>Ставка</TableHeader>
          <TableHeader>Источник</TableHeader>
          <TableHeader>Исполнитель</TableHeader>
          <TableHeader>Действия</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.uid}>
            <TableCell>{order.uid}</TableCell>
            <TableCell>{convertToReadableDate(order.loading_dt)}</TableCell>
            <TableCell>{order.points[0]}</TableCell>
            <TableCell>{order.points[order.points.length - 1]}</TableCell>
            <TableCell>{order.cargo}</TableCell>
            <TableCell>{order.veh}</TableCell>
            <TableCell>{order.cost}</TableCell>
            <TableCell>{order.source}</TableCell>
            <TableCell>{order.worker}</TableCell>
            <TableCell>
              <TableContentAction order={order} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableContent;
