function user1({ name: string, age: number }) {}

user1({ name: "fahim", age: 22 });

function createUser(): { name: string; age: number } {
  return { name: "fahim", age: 22 };
}

//type alias
type User = {
  name: string;
  age: number;
  isLogin: boolean;
};
type user1 = string | number | boolean;

function createUser1(user: User): User {
  return { name: user.name, age: user.age, isLogin: user.isLogin };
}

createUser1({ name: "fahim", age: 22, isLogin: true });

type User1 = {
  readonly _id: string;
  name: string;
  age: number;
  isLogin: boolean;
  creditCard?: number;
};

type cardNumber = {
  cardNumber: number;
};

type cardDetails = User1 & cardNumber;
