//javaScript variable

let name = "fahim";

let isName = true;

let data = [];

//TypeScript variable
let nameT: string = "fahim";

let age: number = 25;

let isNameT: boolean = true;

let dataT: string[] = [];

//union types javaScript
let mixed = [];
mixed.push("fahim");
mixed.push(25);
mixed.push(true);

let id = " fahim";

//union types TypeScript
let mixedT: any[] = [];
mixedT.push("fahim");
mixedT.push(25);
mixedT.push(true);

let idT: string | number = "fahim";

//objects in javaScript

const person = {
  name: "fahim",
  age: 25,
  isName: false,
};

console.log(person.name);

//object in typeScript
interface personType {
  name: string;
  age: number;
  isName: boolean;
}

const personT: personType = {
  name: "fahim",
  age: 25,
  isName: false,
};

//function in javaScript

function hi() {
  console.log("hi");
}

//function in typeScript

function hiT(): void {
  console.log("hi");
}

function hiT2(name: string): number {
  console.log("hi", name);
  return 1;
}

function hiT3(age: number): number {
  return age;
}

function hiT4(age: number, name: string): string | number {
  return age + name;
}

function hiT5(age: number, name: string): void {
  console.log(age, name);
}

//Optional and Default Parameters in javaScript
function greet(name, greeting) {
  return `${greeting}, {name}`;
}

//Optional and Default Parameters in TypeScript
function greetT(name: string, greeting: string): any {
  return `${greeting}, {name}`;
}

function greetT1(name: string, greeting: string): string {
  return `${greeting}, {name}`;
}

function greetT2(name: string, greeting: string = "hi"): string {
  return `${greeting}, {name}`;
}

function greetT3(name: string, greeting?: string): void {
  console.log(`${greeting}, {name}`);
}

//classes in javaScript

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("hello I'm" + this.name + "and I am" + this.age + "years old");
  }
}

const person1 = new Person("fahim", 25);
console.log(person1.speak());

//classes in TypeScript

class PersonT {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isName: boolean;

  speak() {
    console.log(
      "hello I'm" +
        this.name +
        "and I am" +
        this.age +
        "years old" +
        this.isName
    );
  }
}

const person1T = new PersonT("fahim", 25, true);
console.log(person1T.speak());

//Enum in javaScript

const directions = {
  Up: "UP",
  Down: "DOWN",
  Left: "LEFT",
  Right: "RIGHT",
};

//Enum in TypeScript
const directionsT = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};

let move: string = directionsT.up;

//generics in javaScript
function identity(arg) {
  return arg;
}

//generics in TypeScript
function identityT<T>(arg: T): T {
  return arg;
}
identityT<number>(25);
identityT<string>("fahim");

//any and unknown in JavaScript
let data = "fahim";

data = 1000; //no error

//any and unknown in TypeScript
let dataT: unknown = "fahim";

dataT = 1000; //error

let dataT: any = "fahim";

dataT = 1000; //no error

// Difference Between unknown and any:
// any: It allows you to assign any value without any type checking.
// This can lead to errors because TypeScript won't warn you if
// you're doing something that might be unsafe.

// unknown: It also allows any value, but you cannot do anything with it
//  until you check its type. TypeScript forces you
// to perform some kind of checking before using it, ensuring safer code.

// Example of unknown:
let value: unknown = 10; // Can be any type: number, string, object, etc.

// This will give an error because you cannot access properties directly on an `unknown` type.
console.log(value.toString()); // Error: Object is of type 'unknown'.

// Before you use the value, you need to check its type.
if (typeof value === "number") {
  console.log(value.toString()); // Safe: we know it's a number now.
}

//type Assertion (casting) in javaScript
let input = document.getElementById("input");
input.value = "Hello World"; //not type safe

//type Assertion (casting) in TypeScript
let input = document.getElementById("input") as HTMLInputElement;
input.value = "Hello World"; //type safe
