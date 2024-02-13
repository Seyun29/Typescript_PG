"use strict";
// 타입 주석
var a = 10;
a = Number("1"); //cast func.
var b = 'hello';
b = String(123); //cast func.
var c = [1, 2, 3];
//any -> 이거쓰면 ts 왜쓰냐?
//number
//string
//boolean
//object -> {} any,, 쓰지마라. 모든 에러의 근원이 될 수 있음.
// type inference
var d = 1; //type is inferenced as number automatically
//d = "hi"; //error
