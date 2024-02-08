type CustomerProps = {
  _id: string;
  _name: string;
  _address: string;
  _activate: boolean;
};

export default class Customer {
  constructor(private props: CustomerProps) {
    this.validate();
  }

  validate() {
    if (this.props._name.length === 0) {
      throw new Error("Name is required.");
    }

    if (this.props._id.length === 0) {
      throw new Error("Id is required.");
    }
  }

  changeName(name: string) {
    this.props._name = name;
    this.validate();
  }

  activate() {
    if (this.props._address.length === 0) {
      throw new Error("Address is mandatory to activate a customer.");
    }
    this.props._activate = true;
  }

  deactivate() {
    this.props._activate = false;
  }
}
