var person1 = {
    fname : "abc",
    lname : "xyz"
}

var person2 = {sddress : "Bangalore"}

person2.__proto__ = person1;

console.log(person2);

console.log(person2.fname);

console.log(person2.address);

// By FOR-IN Loop

for(var property in person2)
{
    console.log("all the properties : "+ person2[property]);
}

for (const key in person2) 
{
    if (person2.hasOwnProperty.call(person2, key)) 
    {
        const element = person2[key];
        console.log("has own property : " + element);
    }
}