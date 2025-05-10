function fileUpload(file){
    return new Promise((res,rej)=>{


        setTimeout(()=>{
            console.log(file);
            res(1);      

        },3000);
    })

}
async function fileUpload1(files){
    console.log("starting.....");
    await fileUpload(files).then(()=>{

        console.log("file upload complete");
    })
}
function download1(file){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(file);
            res(1);      

        },3000);
    })
    console.log(url)

}
async function downloadFile(url){
    console.log("downloading file......");
    await download1(url).then(()=>{
        console.log("file download complete");
    })
    // console.log("file download complete");
}
console.log("before file upload");

async function processs1(){
    console.log("starting....");

   await downloadFile("xyz.in");
    console.log("Starting file upload");

    await fileUpload1("file1.txt");
}
// downloadFile("www.google.com");
// console.log("## under-process ##");
processs1();

