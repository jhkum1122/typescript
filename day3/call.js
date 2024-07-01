/*
const callerObj = {
  name: "john",
};

function checkMyThis(age) {
  console.log("What is this ${this}");
  console.log("Do I have a name? ${this.name}");
  this.age = age;
  console.log("What is this ${this.age}");
}

checkMyThis(age);
checkMyThis.call(callerObj, 25);
*/

const callerObj = {
  name: "john",
};

function checkMythis(age) {
  console.log("what is this ${this}");
  console.log("Do I have a name? ${this.name}");
  this.age = age;
  console.log("what is my age ${this.age}");
}

checkMythis();
checkMythis.call(callerObj, 25);
