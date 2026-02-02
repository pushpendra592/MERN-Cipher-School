let greet = name => `Greeting from ${name}`;
console.log(greet("Pushpendra"));

let arr = [1,2,3,4,5,6];

let even = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            arr.splice(i,1);
        }
    }
    return arr;
}

let evenNumber = even(arr);
console.log(evenNumber);


// spread


let user = {
    firstname : "Joe",
    lastname : "Mark"
}

let {firstname, lastname} = user;

console.log(firstname, lastname);


let arr1 = [1,2,3,4];

let [one, two, three] = arr1;

console.log(one, two, three);

// let person = {
//     name:"pk",
//     age: 28,
//     city: "kolkata",
//     profile:[{designation:"Software Engineer", degree: "B.tech"},{role:"Frontend Devoloper"}]
// }

// let {profile} = person;
// let [{designation,degree},{role}] = profile;
// console.log(degree);




// let user1 = {
//     firstname: "Vivek",
//     lastname: "Agarwal",
//     age: 38,
//     posts: [
//             {title: "Post 1", comments: 10},
//             {title: "Post 2", comments: 11}
//     ]
// }

// let {posts} = user1;
// let [{},{title, comments}] = posts;

// console.log(comments);
// console.log(title);





let user2 = {
    id: 339,
    name: "John",
    age: 42,
    education: {
        degree: {
            name:"BCA"
        }
    }
}

// let {education} = user2;
// let {degree} = education;
// let {name} = degree;

let {education : {degree : {name}}} = user2;

console.log(name);

for (i in user2){
    console.log(i);
}



