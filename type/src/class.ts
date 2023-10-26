console.log("fahim valo chele");
console.log("Hello World!");
//class
class user {
  email: string = "a";
  private name: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

class user {
  readonly city: string = "a";
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }
}

//getter setter
class user {
  private _courseCount = 1;
  protected _courseTaker = 1;
  readonly city: string = "a";
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  //private method
  private fucntionPrivate() {
    console.log("private method");
  }

  //getter
  get getEmail(): string | number {
    return `getter ${this.email} `;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  //setter
  set courseCount(count: number) {
    this._courseCount = count;
  }
}

class admin extends user {
  isCourse: boolean = true;
  constructor(email: string, name: string) {
    super(email, name);
  }
  changeCourse() {
    this._CourseCount = 5; //err cz private

    this._courseTaker = 5; //ok cz protected
  }
}

const fahim = new user("fa@gmail.com", "fahim");
console.log(fahim.email);
