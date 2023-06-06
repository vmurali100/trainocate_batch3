var message = "Hello , Typescript";
var count = 20;
function handleNumbers(x, y, method) {
  if (method == "add") {
    return x + y;
  } else {
    return x * y;
  }
}
var totalOfNos = handleNumbers(30, 40, "add");
console.log(totalOfNos);
var person = {
  fname: "Murali",
  lname: "Krishna",
  age: 40,
  email: "vmurali@gmail.com",
};
function sayHello(user) {
  console.log(
    "Hello , "
      .concat(user.fname, " ! , You are ")
      .concat(user.age, " old . Aren't You ?")
  );
}
sayHello(person);


