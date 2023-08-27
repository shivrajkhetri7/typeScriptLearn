const num: number[] = [12, 321, 21, 12, 32, 1, 2];

console.log(num);

const str: string[] = ["shivraj", "khetri"];
console.log(str[1]);

// TODO insert the element into array

const fruits: string[] = ["apple", "orange"];
fruits.push("KiWi");

// @ts-ignore
console.log(fruits);

fruits.unshift("banana");
console.log(fruits);
