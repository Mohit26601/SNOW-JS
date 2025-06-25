// loops can execute a block of code multipile time
// for loop

// for(let i = 12; i >= 2; i--){
//     console.log("IN");
    

//     console.log(i);
       
// }
// console.log("OUT");




// var items = ['Incident', 'Problem', 'Change'];

// for (var i = 0; i < items.length; i++) {
//     // gs.info('Item: ' + items[i]);  // Use console.log in client-side scripts
//     console.log("Item:" + item[i]);
    
// }








// for(let i = 10; i >= 0; i--){
    //     console.log(i);
    
    // }
    
// for(let i = 1; i <=10; i++) {
//   console.log("valuse is :",i);
//     for(let j = 1; j <= 10; j++)
//      console.log(i * j);
        
        
// }
// console.log("out");
        


//...while loop...
        // let i = 1;
        // while (i <= 10) {
            //     console.log(i);
            //     i++;
            
            
            // }
            
            
// .......do while loop......






// // Basic for loop to iterate over an array (Client Script / Script Include)

// var items = ['Incident', 'Problem', 'Change'];

// for (var i = 0; i < items.length; i++) {
//     console.log('Item: ' + items[i]);
// }


// // // Looping with Object.keys() (Client Script or Script Include)
// var abc = {
//     name: 'Mohit',
//     role: 'Developer',
//     location: 'India'
// };


// var mohit = Object.keys(abc);
// for (var i = 0; i < mohit.length; i++) {
//     console.log(mohit[i]+ ': ' + abc[mohit[i]]);
// }


// ........for eah loop......

// let players = ["virat", "rohit", "dhoni", "shami", "iyer","rahul"];

// players.forEach((patil) => {
//     console.log(patil);
// }

// ......for off loop......
let players = ["virat", "rohit", "dhoni", "shami", "iyer","rahul"];
for (const player of players){
    console.log(`The name of player is :${players}`);
    
}


let lang = {
    js : "javascript",
    ts : "typesctipy",
    jv : "java",
    py : "python"
}

// for (const key is object){

// }


for (const key in lang ) {
    console.log(`the actual name of ${key} is ${lang[key]}`);
    
}