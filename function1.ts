//err
function addTwo(num) {
  return num + 2;
}

addTwo(2);

//correct way
function addTwo2(num: number) {
  return num + 22;
}
addTwo2(2);

let userId = (id: number, name: string, isLogin: boolean = false) => {};
userId(1, "fahim");
userId(1, "fahim", true);

function addTwo3(num: number): number {
  // return num + 22;
  return "fahim"; //err
}
addTwo3(2);

function getNumber(num: number): number {
  if (num > 0) {
    return num;
  } else {
    return true; //err
  }
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num.map((n: number): number => {
  return n * 2;
});

function consoleErr(err: string): void {
  console.log(err);
  return 1; //err
}

function handleErr(err: string): never {
  throw new Error(err);
}

export {};
