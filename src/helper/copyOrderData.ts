import type { IOrder } from "@/type/main";
import convertToReadableDate from "./readableDate";

const copyOrderData = (order: IOrder) => {
  const orderText = `
${order.uid}
${order.status}
${convertToReadableDate(order.loading_dt)}
${order.points[0]}
${order.points[order.points.length - 1]}
${order.cargo}
${order.veh}
${order.cost}
${order.source}
${order.worker}`.trim();
  navigator.clipboard.writeText(orderText);
};

export default copyOrderData;
