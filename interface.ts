interface Iuser {
  email: string;
  id: number;
  googleId?: string;
  startDate?: Date;
  st(): string;
  st1: () => string;
}

//reopening interface
interface Iuser {
  githubId?: string;
}
//extending interface
interface Admin extends Iuser {
  role: "admin" | "TA" | "student";
}

const fahim: Admin = {
  email: "fa",
  id: 1,
  googleId: "1",
  startDate: new Date(),
  st() {
    return "1";
  },
  st1: () => "1",

  githubId: "1",

  role: "admin",
};
