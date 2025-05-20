function uploadFile(filename,url){
    return new Promise((res,rej)=>{
        console.log("Uploading "+filename+" to"+url+".....");
        setTimeout(()=>{
            console.log("Upload complete");
            res("Upload Successfull");

        },1000);

    })
}
function downloadFile(url){
    return new Promise((res,rej)=>{
        console.log("Downloading Data from "+url+".....");
        setTimeout(()=>{
            console.log("Download Complete");
            res("Downloaded data from "+url);

        },1000)
    })
    
}
function writeFile(fileName,data){
    return new Promise((res,rej)=>{
        console.log("Writing data into file"+fileName+"......");
        setTimeout(()=>{
            console.log("Data written to file "+fileName);
            res("Writing Successfull");
        },1000);    
    })
}
downloadFile("xyz.in").then((data)=>{
    console.log(data);
     writeFile("file.txt","data").then((data)=>{
        console.log(data);
        uploadFile("file.txt","xyz.in").then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log("Error in uploading data");
        })
     })
})