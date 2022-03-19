console.log(2-19);
console.log("Bom dia tudo bem frsçop*&");
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;
console.log(c*9);
console.log(typeof(c));
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName);//Um método é uma função armazenada como uma propriedade.

const person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person2.fullName());

  let kol =person2.fullName();
  console.log(kol.length);
  const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  console.log(cars);
  const fruits = ["Banana", "Orange", "Apple"];
  console.log(Array.isArray(fruits));
