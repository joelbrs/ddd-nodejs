import OrderItem from "./order-item";

type OrderProps = {
  id: string;
  customerId: string;
  items: OrderItem[];
};

export default class Order {
  constructor(private props: OrderProps) {}
}
