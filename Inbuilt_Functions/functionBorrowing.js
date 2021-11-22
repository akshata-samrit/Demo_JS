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


console.log(person1.fullname.call(person2));