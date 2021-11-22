// Rest Operator

console.log("======== Rest Operator========");

function rest(a, b, ...c) 
{
    console.log(a, b, c);
}
rest(1,2,3,4,5,6);



// Spread Operator

console.log("======== Spread Operator========");

var z = ["apple", "ball", "cat", "dog"]

function spread(a,b,c,d)
{
    console.log(a,b,c,d);    
}
spread(...z)


var d = ["rose", "jasmine", "lilly", "lotus"]

function flower(a,b,c) 
{
    console.log(a,b,c);    
}
flower(...d)