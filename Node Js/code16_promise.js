function getNumber(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

getNumber()
    .then((num) => {
        console.log("1st",num);
        return num*2;
    })
    
    .then((num) => {
        console.log("2st",num);
        return num*3;
    })
    
    .catch((err) => {
        console.log("error: ", err);
    })kj, 