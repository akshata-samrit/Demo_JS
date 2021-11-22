function add(a,b)
{
    console.log(a+b);
}

var sum = add.bind(this,10);

sum(20);