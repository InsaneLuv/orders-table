import type { Distribution } from "@/type/main";

const copyOrderData = (order: Distribution) => {
  const orderText = `
${order.order.meta.trip_id}
${order.status}`.trim();
  navigator.clipboard.writeText(orderText);
};

export default copyOrderData;
