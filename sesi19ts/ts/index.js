var num = 10;
var test = "20";
console.log(num);
var nums = [1, 2, "test"];
function sum(a, b) {
    return a + b;
}
// Tanda tanya pada age menandakan kalau age itu opsional
var otherParticipant = [
    { name: 'Alluwi', age: 22 }
];
// Class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var alluwi = new Person('Alluwi');
alluwi.setAge('22');
console.log(alluwi);
