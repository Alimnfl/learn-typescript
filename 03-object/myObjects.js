"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 9
var User = {
    name: 'alimnfl',
    email: 'alimnfl@alim.dev',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'alimnfl', isPaid: 'false', email: 'alim@alim.com' };
createUser(newUser);
function createCourse() {
    return { name: 'reactjs', price: 10000 };
}
