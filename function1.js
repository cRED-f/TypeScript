"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//err
function addTwo(num) {
    return num + 2;
}
addTwo(2);
//correct way
function addTwo2(num) {
    return num + 22;
}
addTwo2(2);
var userId = function (id, name, isLogin) {
    if (isLogin === void 0) { isLogin = false; }
};
userId(1, "fahim");
userId(1, "fahim", true);
