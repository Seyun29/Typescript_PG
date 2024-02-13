"use strict";
var man = {
    name: 'sehun',
    age: 25
};
// Web app
// boundary
// server
//below has high possibility to trigger errors
function prt(params) {
    console.log(params.city);
}
prt(man);
var per = {
    name: 'sehun',
    age: 25
};
function ab(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "no city"); //null check, technique
}
ab(per);
