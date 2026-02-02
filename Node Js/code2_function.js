function oddEven(number) {
    // let even = true
    if (number % 2 === 0) {
        console.log("The Number ", a, "is even");
    } else {
        console.log("The Number", a, "is odd");
    }
}

function area(a, b){
    let area = a*b;
    console.log("Area:", area);
}

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function type(a){
    return a.constructor.name;
}

function TypeOfElementInArray(arr){
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        ans[i] = typeof(arr[i]);
    }
    return ans;
}

function ObjectOfElementInArray(obj){
    return typeof(obj) == "object";
}


// AREA
let a = 5;
let b = 2;
area(a,b);


// ODD-EVEN
oddEven(a);


// SUM OF ARRAY
let arr = [1,2,3,4,5];
console.log("Sum of array: ", sum(arr));


// DATATYPE
console.log(type(arr));


// DATATYPE IN ARRAY
let arr1 = [1, 'Hello', true];
console.log(TypeOfElementInArray(arr1));


// CHECK OBJECT
let obj = {name: "Rahul", No: 20};
console.log(ObjectOfElementInArray(obj));