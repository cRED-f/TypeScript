const superCar = [];

superCar.push("BMW"); //err

const superCar1: string[] = [];

superCar1.push("BMW");

const superCar2: Array<string> = [];

superCar2.push("BMW");

type User12 = {
  name: string;
  age: number;
  isLogin: boolean;
  creditCard?: number;
};
const allUser: User12[] = [];

allUser.push({ name: "fahim", age: 22, isLogin: true });

const model: number[][] = [[], []];
