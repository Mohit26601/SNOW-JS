// var student ={
//     firstName : "vijay",
//     lastName : "patil",
//     rollNo : 21


// }
// console.log(student);



// let studentInfo ={  };

// studentInfo.fName = "Tushar";

// console.log(studentInfo);



// const obj ={
//     fName : "tushar",
//     lName: "shinde",
//     isactice: true,
//     pincode: 424302,
//     rollNo: 46
// }
// console.log(obj);

// console.log(obj.fName);

// let res = obj.fName
// console.log(obj.fName);                                 // this is long method to print the output


// // ...new...........
// let obj2 = new Object(
//     {fullName: "Mohit Shinde"}

// )
// console.log(obj2);


// .........updating object...... 
// const obj ={
//     fName : "tushar",
//     lName: "shinde",
//     isactice: true,
//     pincode: 424302,
//     rollNo: 46
// }

// obj.pincode = 5050505;                                  // this is how we can update the info in object                         
// obj.rollNo = 47;
// console.log(obj);



// const obj ={
//     fName : "tushar",
//     lName: "shinde",
//     isactice: true,
//     pincode: 424302,
//     rollNo: 46
    
// }

// let res = Object.values(obj);
// console.log(res.toString());




// const obj ={
//     fName : "tushar",
//     lName: "shinde",
//     isactice: true,
//     pincode: 424302,
//     rollNo: 46
    
// }

// let res = Object.keys(obj);
// console.log(res.join(" and "));



//..........nested Object..........
// const obj = {
//         fName : "tushar",
//         lName: "shinde",
//         isactice: true,
//         pincode: 424302,
//         rollNo: 46,
//         obj2 : {
//             address: "kusumba",
//             pincode: 401133,
//             phoneno: 7262000720,
//             obj3 : {
//                 className: 12,
//                 classFlore: "2nd",
//                 classTeacher: "Patil Bai"

//             }
            
//         }

        
//     }

// let res = obj.obj2.obj3.classTeacher                            // with this way we can access the object in object (Nested Object)
// console.log(res);
// let res1 = Object.keys(obj);                                // this is to access the all the key.
// console.log(res1);



// ..........destructure.........
const obj = {
            fName : "tushar",
            lName: "shinde",
            isactice: true,
            pincode: 424302,
            rollNo: 46,
            address: "kusumba",
            pincode: 401133,
            phoneno: 7262000720,
            className: 12,
            classFlore: "2nd",
            classTeacher: "Patil Bai"
    


}

const {address, pincode, classTeacher} = obj
console.log(address);

