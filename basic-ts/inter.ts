const man = {
    name:'sehun',
    age:25
};

// Web app
// boundary
// server

//below has high possibility to trigger errors
function prt(params: any) { 
    console.log(params.city);
}
prt(man);

/* ------------- */
//Interface : 명세, 타입, 클래스를 만들댸
interface IPerson {
    name: string;
    age: number;
    city?: string; //optional!!
}

const per: IPerson = {
    name: 'sehun',
    age: 25
};

function ab(params: IPerson){
    console.log(params?.city ?? "no city"); //null check, technique
}

ab(per);
