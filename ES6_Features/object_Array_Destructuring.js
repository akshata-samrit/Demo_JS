// Object Destructuring

console.log("======== Object Destructuring ==========");

var person = {
    fname : "Akshata",
    lname : "Samrit",
    address : "Bangalore",
    yoe : 4,
    skillset : ["javascript", "java", "selenium", "webdriverio"]
     
}

// var firstname = person.fname;
// console.log(firstname);

// console.log(fname);
// console.log(address);

// var {fname, address} = person
// console.log(fname);
// console.log(address);

var {fname : firstname, address : location, yoe : no_of_exp} = person
console.log(firstname);
console.log(location);
console.log(no_of_exp);

// console.log(fname);




// Array Destructuring

console.log("======== Array Destructuring ==========");

var a = [1, "hello", true, null]

// var x = a[0];
// var y = a[1];

var[x,y] = a;
console.log(x,y);

var a1 = [1, "hello", true, null, undefined, "world", "javascript"]

var [x,y,...z] = a1
console.log(x,y);
console.log(z);


var [s,b] = z
console.log(s);
console.log(b);