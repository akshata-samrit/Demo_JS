console.log(this);

console.log(a);
var a;
a = 10;
console.log(a);

function sample()
{
    a = 20;
   //console.log(a);
   console.log(this.a);    
}
sample();


var fname = "abc";
var lname = "xyz";

var person1 = {
    fname : "Bhagath",
    lname : "Singh",
    fullName : function () {
        console.log(this);     //person1
        // console.log(this.fname + " : " + this.lname);
        
        var self = this;
        function inner()
        {
            console.log(self);  // person1
        }
        inner();

    }
}
person1.fullName();
console.log(fname + " : " + lname);

