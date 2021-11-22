function Person(fname, lname, address)
{
    this.fname = fname;
    this.lname = lname;
    this.address = address;
}
Person.prototype.yoe = 3;
 var personX = new Person("Akshata", "Samrit", "Bangalore")

var inheritedObj = Object.create(personX)

console.log(inheritedObj);
//document.write(inheritedObj);
console.log(inheritedObj.fname);
console.log(personX.yoe);
console.log(personX.fname);





