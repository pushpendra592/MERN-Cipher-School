// for(let i =1; i <= 5; i++){
//     setInterval(() => {
//         console.log(i);
//     }, i*1000)
// }



// function fun(){
//     setTimeout(() => {
//         console.log("Hello");
//     }, 1000);

//     new Promise((resolve) => {
//         resolve(console.log("World"));
//     });
// }

// fun();

// write a function that takes a call back and execute it after the call stack is clear

// function doSomething(callback) {
//   setTimeout(callback, 0);
// }

// doSomething(() => {
//     console.log("Hello Call Back");
// })

setTimeout(() => {
    console.log("Parent");
    setTimeout(() => {
        console.log("1st child");
        setTimeout(() => {
            console.log("2nd child");
        }, 1000);
    }, 1000)
}, 1000);