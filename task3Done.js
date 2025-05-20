function UploadFile(filename,url){
    return new Promise((res,rej)=>{
        console.log("UPloading "+filename+" to "+url+".....");
        setTimeout(()=>{
            console.log("Upload complete");
            res("Upload Successfull");
        },1000);
    })
}
function writeFile(fileName,data){
    return new Promise((res,rej)=>{
        console.log("Writing data into file "+fileName+".....");
        setTimeout(()=>{
            console.log("Data written to file "+fileName);
            res("Writing Successfull");
        },1000);
    })
}
function downloadFile(url){
    return new Promise((res,rej)=>{
        console.log("Downloading data from "+url+".....");
        setTimeout(()=>{
            console.log("Download complete");
            res("Downloaded data from "+url);
        },1000);
    })
}
async function main(){
    await downloadFile("xyz.in").then((data)=>{
        console.log(data);
    })
    await writeFile("file.txt",null).then((data)=>{
        console.log(data);
    })
    await UploadFile("file.txt","xyz.in").then((data)=>{
        console.log(data);
    })
}
main();
