const user = {
  name: "ali",
  lastName: "komijani",
  age: 33,
  password: "******",
  birthday: 1370,
  role: "customer",
  key: 12,
};

function sayHello() {
  console.log("hello my name is", this.name);
  console.log(this);
}
sayHello();
user.sayHello = sayHello;
user.sayHello();
