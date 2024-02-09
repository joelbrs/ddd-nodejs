type AddressProps = {
  _street: string;
  _number: number;
  _zip: string;
  _city: string;
};

export default class Address {
  constructor(private props: AddressProps) {
    this.validate();
  }

  validate() {
    if (this.props._street.length === 0) {
      throw new Error("Street is required.");
    }

    if (this.props._city.length === 0) {
      throw new Error("City is required.");
    }

    if (this.props._number === 0) {
      throw new Error("Number is required.");
    }

    if (this.props._zip.length === 0) {
      throw new Error("Zip is required.");
    }
  }

  toString() {
    return `${this.props._street}, ${this.props._number}, ${this.props._zip} ${this.props._city}`;
  }
}
