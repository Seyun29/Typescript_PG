"use strict";
var arr1 = [1, 2, 3]; //array type declaration is expressed mainly as this way than below
var arr2 = [1, 2, 3]; //same as above, GENERIC
var arr3 = ["hi", "hello", "bye"]; //mainly used
var arr4 = ["hi", "hello", "bye"]; //GENERIC
var arr5 = [1, true, false, "haha", {}]; //What about this case? -> this is nonsense. itself is not recommended technically.
var arr6 = [
    {
        name: "yongsoo",
        age: 25,
        city: "seoul",
    },
    {
        name: "yongsoo",
        age: 25,
    },
    {
        name: "yongsoo",
        age: 25,
    },
    {
        name: "yongsoo",
        age: 25,
        city: "seoul",
    },
    {
        name: "yongsoo",
        age: 25,
        city: "seoul",
    },
];
arr6.forEach(function (v) { var _a; return console.log((_a = v.city) !== null && _a !== void 0 ? _a : "wtf?"); });
// Tuple - 배열의 길이 length 와 안에 원소를 바꿀수 없는 자료구조!! : 불변성 유지를 위해.
var arr7 = [1, "hi", {}, []];
console.log(arr7);
arr7.push("wtf???"); //it works While it shouldnt,, Tuple의 한계! (논리적 자료구조이기 떄문)
console.log(arr7);
