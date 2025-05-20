function uploadFunction(fileName,url,call1){
    console.log("Uploading "+fileName+" to "+url+".....");
    setTimeout(()=>{
        console.log("Upload complete");
        call1(null,"Upload successful");
    },1000);

}
function writeFunction(fileName,data,call1){
    console.log("Writitng data into file "+fileName+".....");
    setTimeout(()=>{
        console.log("Data written to file "+fileName);
        call1(null,"Writing Successfullu");
    },1000);


}
function downloadFunction(url,call1){
console.log("Downloading data from "+url+".....");
setTimeout(()=>{
    console.log("Download complete")
    call1(null,"Downloaded data from "+url);
},1000);

}

downloadFunction("xyz.in",(err,data)=>{
    if(err!=null){
        console.log("Error in downloading data");
        return;
    }else{
        console.log(data);
        writeFunction("file.txt",data,(err,data)=>{
            if(err!=null){
                console.log("Error in writing data");
                return;
            }else{
                console.log(data);
                uploadFunction("file1.txt","xyz.in",(err,data)=>{
                    if(err!=null){
                        console.log("Error in uploading data");
                        return;
                    }else{
                        console.log(data);
                    }
                })
            }
        })
    }
})