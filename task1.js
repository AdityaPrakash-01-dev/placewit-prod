let temp=()=>{
    setTimeout(()=>{
        console.log("file1.txt")
        console.log("file download complete!!");
    },5000)
    setTimeout(()=>{
        console.log("file1.txt")
        console.log("file upload complete!!");
    },5000);
}
async function downloadData(url){
    console.log(url);
     temp();
    
    
}
console.log("before file upload");
downloadData("www.google.com")
console.log("Downloading/Uploading Started...");

