let message: string = "Hello , Typescript";
let count: number = 20;

function handleNumbers(x: number, y: number, method: string): number {
  if (method == "add") {
    return x + y;
  } else {
    return x * y;
  }
}

const totalOfNos: number = handleNumbers(30, 40, "add");
console.log(totalOfNos);

interface Person {
  fname: string;
  lname: string;
  age: number;
  email: string;
}
const person: Person = {
  fname: "Murali",
  lname: "Krishna",
  age: 40,
  email: "vmurali@gmail.com",
};

function sayHello(user: Person) {
  console.log(
    `Hello , ${user.fname} ! , You are ${user.age} old . Aren't You ?`
  );
}

sayHello(person);

class GlobalUser {
  name: string;
  user: Person;
  constructor(name: string, user: Person) {
    this.name = name;
    this.user = user;
  }
}

var samplePerson = {
  fname: "Murali",
  lname: "Krishna",
  age: 40,
  email: "vmurali@gmail.com",
};
const mainUser = new GlobalUser("Ram Krishna", samplePerson);
