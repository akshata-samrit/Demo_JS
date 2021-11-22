async function syncMode() 
{
    console.log("Download Started");
    
    var sync = new Promise((resolve, reject) => {
        setTimeout(() => {resolve ("Download in Progress"); }, 3000)
    })

    await sync.then((msg) => {console.log(msg);}).catch()
            console.log("Download Completed");
}

syncMode()