"use strict";
//성별, 부서코드, 카테고리 ...
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["HOME"] = "HOME";
    categoryEnum["KITCHEN"] = "KITCHEN";
    categoryEnum["SPORTS"] = "SPORTS";
})(categoryEnum || (categoryEnum = {}));
; //Enum Declaration //will be assigned 0,1,2,,, automatically if not assigned manually
var category = categoryEnum.HOME; //Use ENUM this way!!
// Web app
// --boundary
// Server
function cate1(category) {
    if (category === "HOME") {
        console.log("5% off");
    }
    else if (category === "KITCHEN") {
        console.log("10% off");
    }
    else {
        console.log("server stops");
    }
}
cate1(category);
// Literal Type
// Similar to Enum; Enum은 재활용 많이 되고, Literal은 주로 일회성
var sexEnum;
(function (sexEnum) {
    sexEnum[sexEnum["MALE"] = 0] = "MALE";
    sexEnum[sexEnum["FEMALE"] = 1] = "FEMALE";
    sexEnum[sexEnum["ETC"] = 2] = "ETC";
})(sexEnum || (sexEnum = {}));
var sex = "MALE"; //literal type
var sex2 = sexEnum.MALE; //enum type
var num1 = 1; //literal type
console.log(num1);
