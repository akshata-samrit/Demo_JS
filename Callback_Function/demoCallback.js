// 1

function normal(a)
{
    console.log("This is a Normal FUnction");
    a();
}
normal(callback);

function callback()
{
    console.log("This is a Callback Function");
}


// 2 ===> Function declared inside a calling Function

function externaldemo(z)
{
    console.log("This is a External Function");
    z();
}
externaldemo(function internal() {console.log("This is a Internal Function")});
