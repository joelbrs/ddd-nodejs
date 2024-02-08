type CustomerProps = {
  _id: string;
  _name: string;
  _address: string;
};

export default class Customer {
  constructor(private props: CustomerProps) {}

  get id() {
    return this.props._id;
  }

  set id(id: string) {
    this.props._id = id;
  }

  get name() {
    return this.props._name;
  }

  set name(name: string) {
    this.props._name = name;
  }

  get address() {
    return this.props._address;
  }

  set address(address: string) {
    this.props._address = address;
  }
}
