console.log("Hello JavaScript!");
console.log(100);
console.log(10+20);

let n = "Jhon";
console.log(n);

let age = 20;
console.log(age);

const pi = 3.14;
console.log(pi);

let a=20;
let b=10;

let i=5
console.log(i++);
console.log(i--);
console.log(i--);

age = 20;
console.log(age > 18);
console.log(age < 18);
console.log(age == '20');
console.log(age === '20');

let firstname = "Jhon";
let lastname = "Doe";
console.log(firstname + " " + lastname + age);
console.log(`${firstname} ${lastname} ${age}`);
console.log(`His age is ${age} years old.`);

let marks = 75;
if(marks >= 80){
    console.log("A");
} else if(marks < 80 && marks >= 40){
    console.log("B");
} else {
    console.log("Failed");
}
for (let j=1; j<=5; j++){
    console.log(j);
}
function add(a, b){
    return a + b;
}
let result = add(10, 20);
console.log(result);

console.log(typeof (age));