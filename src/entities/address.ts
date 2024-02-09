type AddressProps = {
  street: string;
  number: number;
  zip: string;
  city: string;
};

export default class Address {
  constructor(private props: AddressProps) {
    this.validate();
  }

  validate() {
    if (this.props.street.length === 0) {
      throw new Error("Street is required.");
    }

    if (this.props.city.length === 0) {
      throw new Error("City is required.");
    }

    if (this.props.number === 0) {
      throw new Error("Number is required.");
    }

    if (this.props.zip.length === 0) {
      throw new Error("Zip is required.");
    }
  }

  toString() {
    return `${this.props.street}, ${this.props.number}, ${this.props.zip} ${this.props.city}`;
  }
}
