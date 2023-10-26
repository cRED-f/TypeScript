"use strict";
console.log("fahim valo chele");
console.log("Hello World!");
//class
class user {
    constructor(email, name) {
        this.email = "a";
        this.email = email;
        this.name = name;
    }
}
class user {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "a";
        this.email = email;
        this.name = name;
    }
}
//getter setter
class user {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._courseTaker = 1;
        this.city = "a";
        this.email = email;
        this.name = name;
    }
    //private method
    fucntionPrivate() {
        console.log("private method");
    }
    //getter
    get getEmail() {
        return `getter ${this.email} `;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter
    set courseCount(count) {
        this._courseCount = count;
    }
}
class admin extends user {
    constructor(email, name) {
        super(email, name);
        this.isCourse = true;
    }
    changeCourse() {
        this._CourseCount = 5; //err cz private
        this._courseTaker = 5; //ok cz protected
    }
}
const fahim = new user("fa@gmail.com", "fahim");
console.log(fahim.email);
