// Promise

console.log("========== Promise ==========");

var promise1 = new Promise(function (resolve, reject) {
    var a = "promise";
    var b = "promise";

    if (a==b)
    {
        resolve("a & b are equal");
    }
    else
    {
        reject("a is not equal to b");
    }
    
})

promise1.then((msg) => {console.log(msg); }).catch((msg) => {console.log(msg); })



