//성별, 부서코드, 카테고리 ...

enum categoryEnum {
    HOME = "HOME",
    KITCHEN = "KITCHEN",
    SPORTS = "SPORTS",
}; //Enum Declaration //will be assigned 0,1,2,,, automatically if not assigned manually

const category: categoryEnum = categoryEnum.HOME; //Use ENUM this way!!

// Web app
// --boundary
// Server

function cate1(category: any) {
    if(category === "HOME"){
        console.log("5% off")
    } else if (category === "KITCHEN"){
        console.log("10% off")
    } else{
        console.log("server stops")
    }
}

cate1(category);


// Literal Type
// Similar to Enum; Enum은 재활용 많이 되고, Literal은 주로 일회성

enum sexEnum {
    MALE,
    FEMALE,
    ETC,
}

const sex: "MALE" | "FEMALE" | "ETC" = "MALE" //literal type
const sex2: sexEnum = sexEnum.MALE; //enum type
const num1: 1 | 2 | 3 = 1; //literal type
console.log(num1)
