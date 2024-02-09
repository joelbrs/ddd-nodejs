import OrderItem from "./order-item";

type OrderProps = {
  id: string;
  customerId: string;
  items: OrderItem[];
};

export default class Order {
  constructor(private props: OrderProps) {}

  total() {
    return this.props.items.reduce((acc, item) => acc + item.price, 0);
  }
}
