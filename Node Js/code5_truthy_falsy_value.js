function checkUndefined(value){
    return value === undefined;
}

function checkObject(value){
    return typeof value === "object";
}

function checkNull(value){
    return typeof value === "object" && value === null;
}

let obj = {a:1, b:2};
console.log(checkObject(obj));
