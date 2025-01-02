let person = {
    firstName: "Robert",
    lastName: "Jordan",
    age: 25
};

person.email = "robert_jordan@gmail.com";
delete person.age;

console.log(person);