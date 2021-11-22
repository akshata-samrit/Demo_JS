var arr1 = [10, 20, 30, 40, 50]


// concat()

console.log(arr1.concat([100, 200, 300, 400, 500]));

console.log(arr1);


// every()

var arr2 = [10, 20, 30, 40, 50]

console.log(arr2.every((element) => {
            return element>=10
        }));


// some()

var arr3 = [10, 20, 30, 40, 50]

console.log(arr3.some(function(element) {
            return element>=30
        }));


// push()

var arr4 = [10, 20, 30, 40, 50]

console.log("Before Modify " + arr1.length);
console.log(arr4.push(60, 70, 80));
console.log(arr4);
console.log("After Modify " + arr1.length);


// unshift()

var arr5 = [10, 20, 30, 40, 50]

console.log(arr5.unshift(1, 2, 3, 4, 5));
console.log(arr5);


// pop()

var arr6 = [10, 20, 30, 40, 50]

console.log(arr6.pop());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);




// shift()

var arr7 = [10, 20, 30, 40, 50]

console.log(arr7.shift());
console.log(arr7);

console.log(arr7.shift());
console.log(arr7);

console.log(arr7.shift());
console.log(arr7);

console.log(arr7.shift());
console.log(arr7);

console.log(arr7.shift());
console.log(arr7);

console.log(arr7.shift());
console.log(arr7);

console.log(arr7.shift());
console.log(arr7);


// splice()

var arr8 = [10, 20, 30, 40, 50]

console.log(arr8.splice(1, 1, "tewnty"));

console.log(arr8);

console.log(arr8.splice(1, 3, "tewnty"));

console.log(arr8);

console.log(arr8.splice(1, 1, "tewnty", "thirty", "fourty"));

console.log(arr8);

console.log(arr8.splice(1, 0, "abc", "xyz", "def"));

console.log(arr8);



// indexOf()

var arr9 = [10, 20, 30, 40, 50]

console.log(arr9.indexOf(40));

console.log(arr9.indexOf(50, 3));



// lastIndexOf()

var arr10 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr10.lastIndexOf(40));

console.log(arr10.lastIndexOf(40, 4));



// forEach()

var arr11 = [10, 20, 40, 70, 30, 40, 50, 40]

arr11.forEach(function(element, index)
{
    console.log(element + " : " + index);
})



// map()

var arr12 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr12.map((element) => {
            return element * 2
        }));
       
 console.log(arr12);



// filter()

var arr13 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr13.filter((element) => {
            return element>30
        }));

console.log(arr13);



// sort()

// For Ascending Order
var arr14 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr14.sort());


// For Descending Order

console.log(arr14.sort((a,b) => {
            return b-a
        }));



// reduce()

var arr15 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr15.reduce((a,b) => {
            return a+b
        }));

  
        

// reduceRight()

var arr16 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr16.reduceRight((a,b) => {
                return a-b
            }));




// toString

var arr17 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr17.toString());




// reverse()

var arr18 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr18.reverse());



// slice()

var arr19 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr19.slice(2,5));




// values()

var arr20 = [10, 20, 40, 70, 30, 40, 50, 40]

console.log(arr20.values());