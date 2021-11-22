//Standard Function / Function Declaration

function demo1()
{
    console.log("This is a demo1 function");
}
demo1();

function display1(fname , lname)
{
    console.log(fname + ":" + lname);
    console.log(arguments);
}
display1("Akshata",20);
display1("Akshata",20,10,true,null,undefined);


// Function Expression

var demo2 = function()
{
    console.log("This is a demo2 function");
}
demo2();

var display2 = function(fname,lname)
{
    console.log(fname + ":" + lname);
    console.log(arguments);
}
display2("Akshata",20);
display2("Akshata",20,10,true,null,undefined);

//Anonymous Function
//Immediately Invocable Function

(function()
{
    console.log("This is a demo Anonymous Function");
})

(function xyz() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
})()

// Arrow Functions

var arrowfunction1 = () => console.log("Arrow Functions");
arrowfunction1();

var arrowfunction2 = (Parameter1,Parameter2) =>
{
    console.log(Parameter1);
    console.log(Parameter2);
    console.log("More Number of Statements");
     console.log("Arrow Function");
}
arrowfunction2("value1","value2");