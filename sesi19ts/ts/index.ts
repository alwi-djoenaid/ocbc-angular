const num: number = 10;
const test: number | string = "20";
console.log(num);

const nums: (number | string)[] = [1, 2, "test"];

function sum(a: number, b: number){
    return a + b;
}

type Participant = {
    name: string,
    age?: number
}
// Tanda tanya pada age menandakan kalau age itu opsional

let otherParticipant: Participant[] = [
    {name: 'Alluwi', age: 22}
]


// Class

class Person{
    age?: string

    constructor(
        public name: string
    ){}

    setAge(age: string){
        this.age = age;
    }
}

const alluwi = new Person('Alluwi');
alluwi.setAge('22');
console.log(alluwi);
