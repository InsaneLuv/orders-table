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
import type { Distribution } from "@/type/main";
import React, { type JSX } from "react";
import TableContentAction from "./TableContentAction/TableContentAction";
import SortHeader from "@/components/SortHeader/SortHeader";

const TableContent: React.FC<{ orders: Distribution[] }> = ({ orders }) => {
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
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Номер</TableHeader>
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
          <TableRow key={order.distr_id}>
<TableCell>
  {order.distr_id}
</TableCell>
 <TableCell>{convertToReadableDate(order.order.route.points[0].planed_date)}</TableCell>
            <TableCell>{order.order.route.points[0].city_name}</TableCell>
            <TableCell>{order.order.route.points[order.order.route.points.length - 1].city_name}</TableCell>
<TableCell>
  {(() => {
    const list = order.order.cargo?.list;
    if (!list || !Array.isArray(list)) return '';
    
    const countMap = new Map<string, number>();
    list.forEach(item => {
      countMap.set(item, (countMap.get(item) || 0) + 1);
    });
    
    const result: JSX.Element[] = [];
    countMap.forEach((count, item) => {
      if (count > 1) {
        result.push(
          <span key={item}>
            {item} <span style={{ opacity: 0.6, fontSize: '0.9em' }}>(x{count})</span>
          </span>
        );
      } else {
        result.push(<span key={item}>{item}</span>);
      }
    });
    
    return (
      <>
        {result.reduce((acc: JSX.Element[], element, index) => {
          if (index > 0) {
            acc.push(<span key={`comma-${index}`}>, </span>);
          }
          acc.push(element);
          return acc;
        }, [])}
      </>
    );
  })()}
</TableCell>
            <TableCell>{order.order.veh.type}</TableCell>
            <TableCell>
  {order.cost || '-'} / {order.cost_nds || '-'}
</TableCell>
            <TableCell>{order.order.meta.client_name}</TableCell>
<TableCell>
{(order.worker?.first_name || order.pending?.first_name) && (
  <span className={`pill ${order.pending ? 'pill-green' : 'pill-blue'}`}>
    {order.pending ? '🕵️' : '🪖'} {order.pending?.first_name || order.worker?.first_name}
  </span>
)}
</TableCell>
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
