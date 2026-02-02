let user = [{name: "Ram", age: 22, class: "1"}, {name: "rahul", age: 25, class: "2"}];

user.forEach(element => {
    console.log(element.name, element.age);
})

let arr1 = user.map(element => element.age*2)
console.log(arr1);

let arr2 = user.map(element => element.name.toUpperCase());
console.log(arr2);

let arr3 = user.map(element => element.age += 10);
console.log(arr3);

let arr4 = user.map(element => element.age *= 83);
console.log(arr4);

let arr5 = user.map(element => element.class = Number(element.class));
console.log(arr5);

let arr6 = user.map(element => element.age = element.age % 2 ? "Odd" : "Even");
console.log(arr6);

let arr = [1,2,1,3,3,5,"Hi", "Hello", "Hi", 1, 1];

function freq(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];

        if (obj[key] === undefined) {
            obj[key] = 1;
        } else {
            obj[key]++;
        }
    }

    console.log(obj);
}
freq(arr);

let arr7 = ["hello world", "good day"];
let arr8 = arr7.map(element => element.split(" ").map(ele => ele[0].toUpperCase()+ ele.slice(1)).join(""));
console.log(arr8);

let word = ["apple", "mango", "banana"];
let word2 = word.map(fruit => fruit[0].toUpperCase()+fruit.slice(1));
console.log(word2);

let num = [ 1, 2, 3, 4, 5, 6];
let nums = num.filter(ele =>{
    return ele % 2 == 0;
})
console.log(nums);

let words = ["Hello", "world", "JavaScript", "map", "Code"];
words1 = words.filter(ele => {
    return ele[0] == ele[0].toUpperCase()
})
console.log(words1);

let obj1 = {}
let freq1 = word.reduce((obj1, ele) => {
    obj1[ele] = (obj1[ele] || 0) +1;
    return obj1; 
})
console.log(freq1);

