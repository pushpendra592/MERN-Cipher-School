let result1 = (null && "A") || ("" || (5 && "Hi"));
console.log(result1);

let result2 = !("" || 0) && (NaN || "JS");
console.log(result2);

let result3 = (undefined || ("" && 5)) || (NaN && "Ok") || "Final";
console.log(result3);

function isTruthy(a, b, c){
    return a || b || c;
}

console.log(isTruthy(false, false, true));

console.log(Boolean(true+false));
console.log(10*"abc");

function checkVar(v){
    if(typeof(v) === "Array"){
        console.log("It's an Array");
    }
    else if(v === null){
        console.log("It's an null value");
    }
    else if(typeof(v) === "object"){
        console.log("It's an Object");
    }
    else{
        console.log(typeof(v));
    }
}


checkVar(null);

