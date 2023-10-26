let score: number | string;

score = 10;
score = "10";

type User4 = {
  name: string;
  age: number;
  isLogin: boolean;
};

type Admin = {
  name: string;
  age: number;
  isLogin: boolean;
  admin: boolean;
};

let fahim: User4 | Admin;

fahim = {
  name: "fahim",
  age: 22,
  isLogin: true,
  admin: true,
};

function getId(id: number | string) {
  return id;
}
getId(1);
getId("1");

function getId2(id: number | string) {
  id.toLowerCase(); //err
}

function getId3(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id.toExponential();
  }
}

//array
const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10"]; //err

const data2: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10"];
const data3: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10"];

const data4: number[] | string[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data5: number[] | string[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10"]; //err
