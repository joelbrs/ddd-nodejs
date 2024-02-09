type OrderItemProps = {
  id: string;
  name: string;
  price: number;
};

export default class OrderItem {
  constructor(private props: OrderItemProps) {}
}
