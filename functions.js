// function addValue() {
//     console.log("This is our functions");
    
// }
// addValue();


// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }
  
//   const myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };
  
//   console.log(myCar.make); // "Honda"
//   myFunc(myCar);
//   console.log(myCar.make); // "Toyota"



  
  
  
// this is how we call the function in js

// function addValue(){
//     console.log("This is js");
// }

// addValue();



// function mohit(){
//   console.log("mohit shinde");
  
// }
// mohit();

// function addValue(){

//  let a = 100;
//  let b = 200;
//  let res = a + b;


// }
//addValue();



// function addValue(){
//    let a = 100;
//    let b = 200;
//    let res = a + b;
//   console.log(res);
//  }
  
//    addValue();



  //  function addValue(){

  //   let a = 100;
  //   let b = 200;
  //   let res = a + b;
  //   console.log("This is before return");
  //   return a + b;
  //   console.log(res);
  //  }
   
   

  //  console.log(addValue());
   


// function addValue(num1, num2){       //parameters
//   console.log(num1 + num2);
  
// }
// addValue(100, 200);           //arguments



// function addValue(num1, num2)
// {       //parameters
//   return num1 + num2;
  
// }
        
// console.log (addValue(100, 800));              //arguments



// function getValue(...num1)
// {
//   return num1

// }
// console.log(getValue(200, 300, 400, 500));


// function infoCode(){
//   let name = "Tushar";
//   let age = 24;
//   let stuObj ={
//     student : "rohan"
//   }
//   let arr = [1,2,3,4,5]
//   console.log(name, age,stuObj,arr);

  
// }

// infoCode();


// // ..... We are accessing the object though function in below code        ........ object values are access by function .......

// let userOne ={
//   userName : "pranit",                        // object 
//   userID : "tcs100"

// }

// function accessUser(Employee){
//   console.log(`User details are :
//                The name of TCS Employee of user ${Employee.userName}                  
//                and the userID of Employee is ${Employee.userID}`);              // function

// }
// accessUser(userOne);




// let arr = [10, 20, 30]
// console.log(arr);


// function accessArr(getValue){
//   return getValue[1]
// }
// console.log(accessArr(arr));


// let userOne ={
//     userName : "pranit",                        // object 
//     userID : "tcs100",
//     otherDeatils : function() {
//       console.log(`The name of user is ${this.userName}and Id of user is ${this.userID}`);
      

//     }

// }
// console.log(userOne.otherDeatils());


// ................arrow fucntion.................

// const addValue = (a, b) => {
//   return a * b

// }
// console.log(addValue(100, 200));




// let addValue = () => console.log("This is single line arrow function");          // This is single arrow fucntion
// addValue();


// const addValue = (a, b) => a * b;          // no need to"return" because of not using {}this.
// console.log(addValue(12, 34));                      


// const addValue = (a, b) => {return a * b};                // same code as above but retun is reqired bcoz of {}
// console.log(addValue(12, 34));    



// setTimeout(() => {
//   console.log("This message is delayed by 5 seconds");
// }, 5000);



//........IILE........

// function addValue ( a, b) {
//   console.log("Normal fucntion", a / b);

// }
// addValue(12 ,6);


// (function addValue () {
//   console.log("IIFE");

  
// } ) ();


// (function addValue (a, b) {
//   console.log("Addition is", a + b);
// } ) ( 5, 6);





// (function aValue(a, b) {
//   console.log("Multiply", a * b);
  
// }) ( 123, 456);




