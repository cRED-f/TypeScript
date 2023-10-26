//declare variable
let meets: string = "Hello World!";

console.log(meets);

//number variable
let id: number = 21310;
id.toExponential();
console.log(id);

//boolean variable
let isTrue: boolean = true;
console.log(isTrue);

//any
let anyType: any = "Hello World!";
anyType = 123;
anyType = true;
console.log(anyType);

let user: string;
function getUser() {
  return "fahim";
}
user = getUser();

export {};
