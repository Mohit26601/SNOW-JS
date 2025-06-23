// const firstNameee = "Rohit"
// console.log(firstNameee)



// let firstNamee = "500"
// console.log(firstNamee)

// var firstName = "mohit";
// console.log(firstName)

// var a = 5;
// var b = 6;
// var c = a + b;

// console.log(c)


// var a = 100;
// var a = 200;

// console.log(a);

// let a = 500;
// a = 400;
//  console.log(a);


// const a = "lasdjf";
// a = 600;

// console.log(a)


// const _pi = 3.14;
// let person = "mohit Shinde";
// let answer = "yes I'm";

// console.log(_pi, person, answer);                    // One line
// console.log(`_pi =${_pi}, human = ${person}, ans = ${answer}`);               //Print with labels using template literals
// console.log({_pi, person, answer});            //Print as an object


// .......we can't do this .....
// let a = 100;
// let a = "jhon snow";

// ...same as that we can do this in var...
// var b = 100;
// var b = "jhon snow";

// console.log(b);


// let c = 3;
// {
//     let c = 5;
// }                                               //Redeclaring a variable inside a block will not redeclare the variable outside the block:

// console.log(`Output for let is ${c}`);



// var a = 2;
// {
//     var a = 5;
// }                                                //Redeclaring a variable inside a block will also redeclare the variable outside the block:

// console.log(`output for var is ${a}`);



// carName = "BMW";
// var carName;                                        //Meaning: You can use the variable before it is declared:
// console.log(carName);


// carName1 = "BMW";
// let carName1;                                //Meaning: Using a let variable before it is declared will result in a ReferenceError:
// console.log(carName1);



// .............CONSTANT...........


// const PI = 3.145456789876543;
// const PI = 3.14;                                    //A variable defined with the const keyword cannot be reassigned
// PI = PI + 10



// const cars = ["BMW", "Audi", "VW"];
// cars[0] = "Toyota";
// cars.push("Honda");
// console.log(cars);


// let user = [];
// user = [{fName : "Mohit",
//         userAge : 25}];
// user.push(user);
// console.log(user);                                  //Pushin an object in array.


const car = { type:"Fiat", model:"500", color:"white"}
car.color = "red";                      // You can change a property:
car.owner = "John Snow";                // You can add a property:
console.log(car);











