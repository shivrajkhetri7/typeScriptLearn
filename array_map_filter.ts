// @ts-ignore
let arr1: number[] = [
  20, 12, 54, 65, 74, 65, 7744, 15, 5454, 8748, 9485, 84784, 14, 21, 333, 4,
];

const isHund: number[] = arr1.filter((item: number) => item < 100);

console.log(isHund);

// TODO convertinn above array items into string

const str1: string[] = arr1.map((item: number) => item.toString());

console.log("converting all the array items into string ", str1);

// TODO sum of all the array items

const sum = arr1.reduce((current: number, prev: number) => current + prev, 0);

console.log(`Sum of all the array element`, sum);
