interface userInfo {
  name: string;
  contact: number;
  address: string;
  pincode?: number;
  education: string;
}

const user: userInfo = {
  name: "shivraj",
  contact: 883034916,
  address: "Maharastra",
  pincode: 411046,
  education: "B-tech",
};

console.log(user);
