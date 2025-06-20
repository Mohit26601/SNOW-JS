// function addValue() {
//     console.log("This is our functions");
    
// }



function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(myCar.make); // "Honda"
  myFunc(myCar);
  console.log(myCar.make); // "Toyota"



  
  
  
// this is how we call the function in js

function addValue(){
    console.log("This is js");
}

addValue();