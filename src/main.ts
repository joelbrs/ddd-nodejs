import { randomUUID } from "crypto";
import Customer from "./entities/customer";
import Address from "./entities/address";
import OrderItem from "./entities/order-item";
import Order from "./entities/order";

const customer = new Customer({ id: "123", name: "Joel Filho" });
const address = new Address({
  city: "São Paulo",
  number: 280,
  street: "Rua Dois",
  zip: "123456-78",
});
customer.address = address;
customer.activate();

const item1 = new OrderItem({ id: "456", name: "Item 1", price: 10 });
const item2 = new OrderItem({ id: "789", name: "Item 2", price: 15 });

const order = new Order({
  id: randomUUID(),
  customerId: "123",
  items: [item1, item2],
});
