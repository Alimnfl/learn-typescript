"use strict";
// 6
Object.defineProperty(exports, "__esModule", { value: true });
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return '200 OK';
// }
var getHello = function (s) {
    return '';
};
// const heros = [1,2,3];
var heros = ['Thor', 'Spiderman', 'Iron Man'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// untuk mengakhiri sebuah program, tipe yang tidak pernah diperhatikan
function handleError(errmsg) {
    throw new Error();
}
