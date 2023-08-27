// TODO create the string store into variable and make that in uppperCase and store upperCaseText variable and make lowercase and store into lowerCaseText variable

const text: string = "this is shivraj ramesh khetri MERN stack developer";

const upperCaseText: string = text.toUpperCase();
console.log(`UpperCase`, upperCaseText);

const lowerCaseText: string = text.toLocaleLowerCase();
console.log("Lowercase", lowerCaseText);

// TODO create the String and find the length of string

const stringChar: string = "Shivraj";

const strLength = stringChar.length;

console.log(
  `----String---------${stringChar}-------lenght---------${strLength}`
);

// TODO find the subString from the "text" string

const subString: boolean = text.includes("shivraj");

console.log(`"shivraj" substring is exiest ${subString}`);
