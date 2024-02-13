const arr1: number[] = [1, 2, 3]; //array type declaration is expressed mainly as this way than below
const arr2: Array<number> = [1, 2, 3]; //same as above, GENERIC

const arr3: string[] = ["hi", "hello", "bye"]; //mainly used
const arr4: Array<string> = ["hi", "hello", "bye"]; //GENERIC

const arr5: any[] = [1, true, false, "haha", {}]; //What about this case? -> this is nonsense. itself is not recommended technically.

interface IPerson {
  name: string;
  age: number;
  city?: string;
}

const arr6: IPerson[] = [ //array type declaration using Interface!!!
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

arr6.forEach((v)=>console.log(v.city ?? "wtf?"));

// Tuple - 배열의 길이 length 와 안에 원소를 바꿀수 없는 자료구조!! : 불변성 유지를 위해.
const arr7: [number, string, object, any[]] = [1, "hi", {}, []];

console.log(arr7)
arr7.push("wtf???") //it works While it shouldnt,, Tuple의 한계! (논리적 자료구조이기 떄문)
console.log(arr7)
