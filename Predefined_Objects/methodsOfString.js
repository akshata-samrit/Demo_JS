// indexOf()

console.log("======== indexOf() ========");
var str1 = "hello world";

console.log(str1.indexOf("o"));

console.log(str1.indexOf("l"));

console.log((str1.indexOf("o" , 5)));


// lastIndexOf()
console.log("======== lastindexOf() ========");
var str2 = "hello world";

console.log(str2.lastIndexOf("l"));

console.log(str2.lastIndexOf("l", 5));


// charAt()
console.log("======== charAt() ========");
var str3 = "hello world";

console.log(str3.charAt(6));

console.log(str3.charAt(-3));



// charCodeAt()
console.log("======== charCodeAt() ========");
var str4 = "hello world";

console.log(str4.charCodeAt(10));

console.log(str4.charCodeAt(11));


// localeCompare()
console.log("======== localeCompare() ========");
var str5 = "hello world";

console.log(str5.localeCompare("A"));

console.log(str5.localeCompare("hello world"));

console.log(str5.localeCompare("i"));



// replace()
console.log("======== replace() ========");
var str6 = "hello world";

console.log(str6.replace(" ","_"));



// slice()
console.log("======== slice() ========");
var str7 = "hello world";

console.log(str7.slice(2,8));




// split()
console.log("======== split() ========");
var str8 = "hello world";

console.log(str8.split(" "));




// startsWith()
console.log("======== startsWith() ========");
var str9 = "hello world";

console.log(str9.startsWith("wo"));





// substr()
console.log("======== substr() ========");
var str10 = "hello world";

console.log(str10.substr(2,5));




// substring()
console.log("======== substring() ========");
var str11 = "hello world";

console.log(str11.substring(4,10));
console.log(str11.substring(7,-4));
console.log(str11.substring(4,13));




// trim()
console.log("======== trim() ========");
var str12 = "  hello world  ";

console.log(str12.length);
console.log(str12.trim().length);



// repeat()
console.log("======== repeat() ========");
var str13 = "hello world";

console.log(str13.repeat(2));