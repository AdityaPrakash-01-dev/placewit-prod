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
            console.log("file1.txt");
            res("FileDownloaded")
        },5000);

    })
}
let process=(async (url)=>{
    console.log("starting....");
    await uploadPromise(url).then((data)=>{
    console.log(data)
    })
    console.log("Downloading Started...");
    await downloadPromise(url).then((data)=>{
        console.log(data);

    })
}
)
process("www.google.com");