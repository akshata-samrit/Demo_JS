var person = {
    fname : "Akshata",
    lname : "Samrit",
    address : "Bangalore",
    yoe : 4,
    skillset : ["Java Script", "Java", "Selenium", "Webdriver IO"],
    introduction : function()
                    {
                        console.log("Hello my name is" + " " + this.fname + " " + this.lname);
                    },
    biodata : {
        fname : "Akshata",
        lname : "Samrit",
        address : "Bangalore",
        yoe : 4,
        skillset : ["Java Script", "Java", "Selenium", "Webdriver IO"],
        introduction : function()
                        {
                            console.log("Hello my name is" + " " +this.fname + " " + this.lname);
                        }
    }

}

// by using dot (.) or brackect [] notations we can access properties of an object
console.log(person.fname); //by using dot notation

console.log(person["fname"]); //by using bracket notation

console.log(person.introduction());

console.log(person.biodata);
console.log(person.biodata.introduction());

