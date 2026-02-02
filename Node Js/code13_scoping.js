// var x = 5;

// function test(){
//     console.log(x);
//     // var x = 5;
// }

// test();


// var show = function(){
//     console.log("first");
// };

// function show(){
//     console.log("second");
// }

// show()


// function print(){
//     console.log(x);
//     if(true){
//         var x = 20;
//     }
// }

// print();



// function test(){
//     console.log(a);
//     var a = 20;
//     let b = 30;
//     function print(){
//         console.log(a+b);
//     }
//     print();
// }
// test();



// function outer(){
//     let a = 20;
//     function inner(){
//         console.log(a);
//     }
//     return inner();
// }

// let c = outer();
// console.log(typeof c);



// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// let c1 = counter();
// console.log(c1);



// for(var i = 1; i <= 3; i++){
//     (function (x) {
//         setTimeout(function() {
//             console.log(x);
//         }, x*1000);
//     })(i);
// }




// function counterApp(){
//     let count = 0;
//     return {
//         inc: function(){
//             count++;
//             return count;
//         },
//         dec: function(){
//             count--;
//             return count;
//         },
//         value: function(){
//             return count;
//         }
//     };
// }


// let obj = counterApp();

// console.log(obj.value());
// console.log(obj.inc());
// console.log(obj.inc());
// console.log(obj.dec());




function test(){
    let count = 0;
    return function (){
        ++count;
        console.log(count);
    }
}

test()();
test()();
test()();