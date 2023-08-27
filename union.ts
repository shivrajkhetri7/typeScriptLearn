function unionFunctuion(value: string | number): any {
  if (typeof value == "number") {
    return value * 2;
  } else if (typeof value == "string") {
    return value.toUpperCase();
  } else {
    throw new Error("inavalid type of value ");
  }
}

console.log(unionFunctuion(20));
console.log(unionFunctuion("shivraj"));
