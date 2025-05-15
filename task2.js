let uploadPromise=(url)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("file1.txt");
            res("FileUploaded")
        },5000);

    })
}
let downloadPromise=(url)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // console.log("file1.txt");
            res("FileDownloaded")
        },6000);

    })
}
let process=(url)=>{
    console.log("starting....");
    uploadPromise(url).then((data)=>{
    console.log(data)
    })
    downloadPromise(url).then((data)=>{
        console.log(data);

    })
}
process("www.google.com");