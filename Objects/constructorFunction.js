function Person(fname, lname, address)
{
    this.fname = fname;
    this.lname = lname;
    this.address = address;
}

var personX = new Person("Akshata", "Samrit", "Bangalore")

console.log(personX);
console.log(personX.address);
console.log(personX["lname"]);