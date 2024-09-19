/*const profile = {
  name: "Asish Khandal",
  post: 10,
  followers: 589,
  following: 4,
};


console.log(profile["post"]); */

// let a = 6;
// let b = 5;

// console.log("a +b =", a + b);

// let a = 5;
// let b = 3;

// let con1 = a > b;
// let con2 = a === 3;
// console.log("a and b is equal =", con1 && con2);

// let age = 10;

// if (age > 18) {
//   console.log("can vote");
// } else {
//   console.log("cannot vote");
// }

// let a = 5;

// if (a % 2 == 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }

// let age = 10;

// console.log(age > 18 ? "the is adult" : "not adult");

// let num = prompt("Please enter a number");

// if (num % 5 === 0) {
//   console.log(num, " The number is multiple of 5");
// } else {
//   console.log(num, "The number is not multiple of 5");
// }

// let num = prompt("Please enter a number");
// sum = 0;

// for (let i = 1; i <= num; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let num = prompt("Please enter a number");

// let product = 0;

// for (let i = 1; i <= 12; i++) {
//   product = num * i;
//   console.log(num, " * ", i, " = ", product);
// }

// let names = ["Asish ", "krishna", "harri ", "Hur hue"];

// names[3] = "bikash";
// console.log(names[3]);

// let marks = [40, 80, 90, 100, 30];
// let avg = 0;

// for (let i = 0; i < marks.length; i++) {
//   avg = avg + marks[i];
// }

// let ans = avg / marks.length;

// console.log(ans);

// let prices = [250, 645, 300, 900, 50];

// let final = [];

// for (let i = 0; i < prices.length; i++) {
//   final[i] = prices[i] - prices[i] * 0.1;
// }

// console.log(final);

// let names = ["a", "b", "c", "d", "e"];

// names.push("j");

// console.log(names);

// let fruit = ["a", "b", "c", "d", "e"];
// let mango = ["e", "f", "g", "h", "i", "j"];

// let a = ["asisj", " bayleena"];

// let bay = fruit.concat(mango, a);
// console.log(bay);

// let companies = ["Google", "Facebook", "Twitter", "Uber", "Netflix"];

// // companies.splice(3, 1, "ola");
// // companies.shift(0);
// companies.push("Amazon");

// console.log(companies);

// function myFunction(msg, n) {
//   //   console.log("hi am learning js");
//   //   console.log("hi am learning for my life");
//   console.log(msg, n);
// }

// myFunction("hello i love codding", 500);

// function myFunction(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter first number"));

// myFunction(num1, num2);

// function myFunction(num1, num2) {
//   sum = num1 + num2;
//   return sum;
// }

// let val = myFunction(1, 2);

// console.log(val);

// const mul = (a, b) => {
//   console.log(a + b);
// };

// mul(1, 2);

// function myFunction(word) {
//   let count = 0;

//   for (const char of word) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(count);
// }

// myFunction("hello");

// const myFunction = (word) => {
//   let count = 0;
//   for (const char of word) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// myFunction("hello");

// let arr = ["hello", "world"];

// arr.forEach((val, idx) => {
//   console.log(val.toUpperCase(), idx);
// });

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//   console.log(val * val);
// });

// let marks = ["75", "90", "43", "80", "93", "97"];

// const output = marks.filter((val) => {
//   return Number(val) >= 90;
// });

// console.log(output);

// let num = prompt("Please enter a number");

// let arr = [];

// for (let i = 0; i < num; i++) {
//   arr.push(i + 1);
// }

// console.log(arr);

// const output = arr.reduce((pre, cur) => {
//   return pre + cur;
// });

// console.log(output);

// const product = arr.reduce((pre, cur) => {
//   return pre * cur;
// });

// console.log(product);

// let h2 = document.querySelector("h2");

// h2.innerText = h2.innerText + " Hello I am Asish Khandal";

// let box = document.querySelectorAll(".box");

// for (let i = 0; i < box.length; i++) {
//   box[i].innerText = `i am asish khandal ${i}`;
// }

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// let body = document.querySelector("body");
// body.prepend(newBtn);

// let para = document.querySelector("p");

// // para.setAttribute("class", "newClass");

// para.classList.add("newClass");

// let btn1 = document.querySelector("button");
// let body = document.querySelector("body");

// let curMode = "light";

// btn1.addEventListener("click", () => {
//   if (curMode === "light") {
//     curMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     curMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   console.log(curMode);
// });

// class parent {
//   hello() {
//     console.log("hello from parent");
//   }
// }

// class child extends parent {}

// let obj = new child();
// obj.hello();

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log("This is secret data");
//   }
// }

// let student1 = new User("asish", "assh@gmail.com");
// let student2 = new User("ash", "ashtech@gmail.com");

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("This is secret data");
//   }
// }

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     console.log("i can edit the data");
//   }
// }

// let student1 = new User("asish", "assh@gmail.com");
// let student2 = new User("ash", "ashtech@gmail.com");

// let ash = new Admin("bayleena", "bay@gmail.com");

// ash.editData();

// let promise = new Promise((resolve, reject) => {
//   console.log("work done");
//   reject("some error occured");
// });

// let age = 5;

// while (age == 5) {
//   console.log(age);
//   age++;
// }
// let age = 7;
// let i = 0;
// do {
//   console.log("work done");
//   i++;
// } while (i < age);

// let arr = ["a", "b", "c", "d", "e", "f"];

// for (let element of arr) {
//   console.log(element);
// }

// const posts = {
//   id: 1,
//   title: "asish",
//   body: "khandal",
// };

// for (let post in posts) {
//   // console.log(post);
//   console.log(posts[post]);
// }

// let val = 0;
// const sum = (a, b) => {
//   val = val + a + b;
//   console.log(val);
// };

// sum(5, 6);

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;

// let newArr = arr.reduce((sum, val) => {
//   return sum + val;
// });

// console.log(newArr / arr.length);

// let arr = [10, 30, 5, 7, 55];

// let newArr = arr.reduce((pre, curr) => {
//   return pre > curr ? pre : curr;
// });

// console.log(newArr);

// let pattern = "";
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     pattern = pattern + "* ";
//   }
//   pattern = pattern + "\n";
// }
// console.log(pattern);

// let num = 5;
// let pattern = ""; //pattern string
// if (num > 1) {
//   //no star pattern for 0 or negative numbers.
//   for (let i = 1; i <= num; i++) {
//     //first 'for loop' for horizontal lines
//     for (let j = 1; j <= i; j++) {
//       //second 'for loop' to print star
//       pattern += "* "; //adding * to pattern string
//     }
//     pattern += "\n"; //new line after row completion
//   }
//   console.log(pattern); //printing star to console
// } else {
//   pattern = "Number must be greater than 1 to print star pattern.";
// }

// let newButton = document.createElement("button");

// newButton.innerText = "Click here";
// newButton.style.backgroundColor = "black";

// let div = document.querySelector("div");

// div.append(newButton);

// let btn1 = document.querySelector("#btn1");

// const handler3 = () => {
//   console.log("hiiiiii");
// };

// btn1.removeEventListener("mouseenter", handler3);

// btn1.addEventListener("mouseenter", () => {
//   console.log("mouse left");

// });

// (function () {
//   console.log("hello");
// })();

// (() => {
//   console.log("world");
// })();

// (async () => {
//   console.log("async function");
// })();

function asish(a, b, ...manyMore) {
  console.log(a, b, manyMore);
}

asish(1, 2, 3, 4, 5, 6, 7, 8, 9);
