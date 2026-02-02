// function show(){
//     console.log(this);
// }
// show();

// OUTPUT => object [Global]


// "use strict"
// function show(){
//     console.log(this);
// }
// show();

// OUTPUT => undefined


// const user = {
//     name: "Pushpendra Singh",
//     greet(){
//         console.log(this.name);
//     }
// }
// user.greet();

// OUTPUT => Pushpendra Singh


// const obj = {
//     name: "ram",
//     show(){
//         function inner(){
//             console.log(this.name);
//         }
//         inner();
//     }
// };
// obj.show();

// OUTPUT => undefined



// const obj = {
//     name: "ram",
//     show(){
//         console.log(this.name);
//         function inner(){
//             console.log(this);
//         }
//         inner();
//     }
// };
// obj.show();

// OBJECT => ram and object[globle]



const obj = {
    name: "ram",
    show(){
        const inner = () => {
            console.log(this.name);
        }
        inner();
    }
};
obj.show();
// ARROW FUNCTION DOES'NT HAVE IT's OWN THIS WHICH IS WHY IT TAKE THIS FROM ITS PARENT CLASS 

// OUTPUT => ram