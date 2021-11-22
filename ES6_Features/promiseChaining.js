function promise1()
{
    console.log("Inside Promise1 Function");

    var pro1 = new Promise((resolve,reject) => {
        setTimeout(() => {resolve ("Promise1"); }, 1000)
    })
    return pro1
}

function promise2()
{
    console.log("Inside Promise2 Function");

    var pro2 = new Promise((resolve,reject) => {
        setTimeout(() => {resolve ("Promise2"); }, 2000)
    })
    return pro2
}

function promise3()
{
    console.log("Inside Promise3 Function");

    var pro3 = new Promise((resolve,reject) => {
        setTimeout(() => {resolve ("Promise3"); }, 1000)
    })
    return pro3
}

// promise1().then((msg) => {console.log(msg); 
//             return promise2()}).then((msg) => {console.log(msg);
//             return promise3()}).then((msg) => {console.log(msg);})


// Promise.all()

// 
console.log("======== Promise.all() ========");

Promise.all([Promise1(), promise2(), promise3]).then((msg) => {
                            console.log("All the promises got resolved"); })

Promise.race()

console.log("======== Promise.race() ========");

Promise.race([Promise1(), promise2(), promise3]).then((msg) => {
                             console.log("Which Promise resolved first"); })