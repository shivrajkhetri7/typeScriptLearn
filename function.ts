// TODO nomal function

function isDisplay(name: string, rollCall: number): void {
  console.log(`My name is ${name} and roll call is ${rollCall}`);
}

console.log(isDisplay("shivraj", 3));

//  TODO write a function which write something

function isNotation(name: string, id: number): string {
  return `I'm ${name} my fav number is ${id}`;
}

console.log(isNotation("Devil", 45));

// TODO write a Arrow function

const greeting = (name: string, price: number): string =>
  `Hello ${name} Congratulation you won ${price} rupee`;

console.log(greeting("Abhi", 10000));

// ! Question Write a function to check palindrom

const isPalindrom = (str: string): boolean => {
  let revString: string = str.split("").reverse().join("");
  return str === revString;
};

console.log(`this is palindrome`, isPalindrom("12345"));

// !Question find the avarage

const arr = [20, 54, 45, 84, 74];

function avg(arr: any): number {
  const len: number = arr.length;
  const sum: number = arr.reduce((curr: number, prev: number) => {
    return curr + prev;
  }, 0);

  const result = (sum / (100 * len)) * 100;
  return result;
}

console.log("AVG", avg(arr));
