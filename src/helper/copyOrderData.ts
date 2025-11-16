import type { IOrder } from "@/type/main";
import convertToReadableDate from "./readableDate";

const copyOrderData = (order: IOrder) => {
  const orderText = `
          UID: ${order.uid}
          Статус: ${order.status}
          Погрузка: ${convertToReadableDate(order.loading_dt)}
          Откуда: ${order.points[0]}
          Куда: ${order.points[order.points.length - 1]}
          Груз: ${order.cargo}
          ТС: ${order.veh}
          Ставка: ${order.cost}
          Источник: ${order.source}
          Исполнитель: ${order.worker}
        `.trim();

  navigator.clipboard
    .writeText(orderText)
    .then(() => {
      alert("Данные заказа скопированы в буфер обмена");
    })
    .catch((err) => {
      console.error("Ошибка при копировании: ", err);
    });
};

export default copyOrderData;
