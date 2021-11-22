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

// function introduce()
// {
//     console.log("Hello my name is " + this.fname + " : " + this.lname);
// }

// introduce();

// introduce.call(person1);

function introduce(msg, a, b, c)
{
    console.log("Hello my name is " + this.fname + " : " + this.lname)
    console.log(a, b, c);
}

introduce.apply(person2, ["Hello my name is ", 1, 3, 5]);

 