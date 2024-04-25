let userName:string = "홍길동";
let members:string[]|number[] = ["홍길동", "정은식"];

let members2:[string, number] = ["홍길동", 22];

type IdType = string | number;
let id:IdType = "ㅁㅁ";

let gender:'M'|'W' = 'W';

console.log(userName);

// 함수
function testFunc(num:number) :number {
    return 1;
}

testFunc(10);

// 객체
type ObjType = {
    // name: string,
    // age: number
    // addr?: string
    [key:string] : string
}


let obj:ObjType = {
    name: "문자열" ,
    age: "19"
}