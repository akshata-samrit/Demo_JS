var person1 = {
    fname : "Bhagath",
    lname : "Singh",
    fullname : function() {
        console.log(this.fname + " : " + this.lname)
    }
}

var person2 = {
    fname : "Virat",
    lname : "Kohli"
}

function introduce()
{
    console.log("Hello my name is " + this.fname + " : " + this.lname);
}

introduce();

introduce.bind(person1);

function introduce1(msg, a, b, c)
{
    console.log("Hello my name is " + this.fname + " : " + this.lname)
    console.log(a, b, c);
}

var result = introduce1.bind(person1, "Hello my name is ", 1, 3, 5);

result();
console.log(result());
