const score: Array<number> = [];
const Gname: Array<string> = [];

function indentityOne(val: number | string): number | string {
  return val;
}

function indentityTwo(val: any): any {
  return val;
}

function indentityThree<Type>(val: Type): Type {
  return val;
}

indentityThree("string");
indentityThree(typeof "string");
indentityThree(123);

//for arrow function
const arrowFunc = <Type>() => {};
const arrowFunc1 = <Type>(val: Type): Type => {
  return val;
};
