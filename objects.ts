// TODO create an Object with Optional params

import { string } from "prop-types";

type Students = {
  name: string;
  sname: string;
  city: string;
  pincode?: number;
  isActive: boolean;
};
const Student: Students = {
  name: "shivraj",
  sname: "Khetri",
  city: "pune",
  pincode: 411046,
  isActive: true,
};

const Student2: Students = {
  name: "Akash",
  sname: "Khetri",
  city: "Solapur",
  isActive: true,
};
console.log("student 1", Student);
console.log("student 2", Student2);

// !CallSignature

type User = {
  name: string;
  designation: string;
  city: string;
  salary: number;
  info: (intro?: string) => string;
};

const userObj: User = {
  name: "Ankita",
  designation: "Accounts",
  city: "pune",
  salary: 10000,
  info: function (intro?: string): string {
    if (intro) {
      return `Hello this is my instro ${intro}`;
    } else {
      return `Hi this is ${userObj.name} I'm working as ${userObj.designation}`;
    }
  },
};

console.log(userObj);

console.log("this is user intoduction", userObj?.info());
