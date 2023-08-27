class UserDetails {
  name: string;
  city: string;

  constructor(names: string, citys: string) {
    this.name = names;
    this.city = citys;
  }
}

const person = new UserDetails("Shivraj", "pune");

console.log(person);
