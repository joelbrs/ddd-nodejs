import Address from "./address";

type CustomerProps = {
  id: string;
  name: string;
  address?: Address;
  activate?: boolean;
};

export default class Customer {
  constructor(private props: CustomerProps) {
    this.validate();
  }

  set address(address: Address) {
    this.props.address = address;
  }

  validate() {
    if (this.props.name.length === 0) {
      throw new Error("Name is required.");
    }

    if (this.props.id.length === 0) {
      throw new Error("Id is required.");
    }
  }

  changeName(name: string) {
    this.props.name = name;
    this.validate();
  }

  activate() {
    if (!this.props.address) {
      throw new Error("Address is mandatory to activate a customer.");
    }
    this.props.activate = true;
  }

  deactivate() {
    this.props.activate = false;
  }
}
