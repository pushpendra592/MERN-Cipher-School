function greet(name , ...rest){
    return `Hi, I am ${name}, and my hobies are ${rest}.`
}

function noAge(age, ...rest){
    console.log(rest);
}

// let ans = greet("Pushpendra","Football", "Anime", "cricket");
// console.log(ans);

// // let {Age}
// noAge(obj);

// let obj = {name: "Pushpendra", Age: 22, Degree: "Btech", Address: "Rajasthan"}

// Write a function in js that uses optional chaining to safely access the age property of a given persion object.
// if the age property is present, return its value; otherwise, return a default value of 0;

function getAge(person) {
  return person?.Age ?? "Age not available";
}

// console.log(getAge(obj));
// console.log(getAge(null));     

let obj1 = {
    product: "Jean",
    Price: 1200,
    Colour: "Blue"
}

function getPrice(obj){
    return obj?.Price?? null;
}

let p = getPrice(obj1);

if(p != null){
    let discountPrice = p - (p/10);
    console.log(discountPrice.toFixed(2));
}else{
    console.log("Price Not Available");
}


