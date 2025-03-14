async function testDownloadSpeed(){
    const fileSizeInBits = 10 * 1024 * 1024 * 8;
    const startTime = performance.now();

    try{
        const response = await fetch("https://corsproxy.io/?" + encodeURIComponent("https://speed.hetzner.de/10MB.bin"));
        await response.blob();
        const endTime = performance.now();
         

        const durationInSeconds = (endTime - startTime) / 1000;
        const speedMbps = (fileSizeInBits / durationInSeconds) / (1024 * 1024);

        document.getElementById("downloadSpeed").innerText = `${speedMbps.toFixed(2)} Mbps`;
        document.getElementById("downloadProgress").style.width = "100%";
    }catch(e){
        document.getElementById("downloadSpeed").innerText = "Error";
        console.log(e);
    }
}

async function testUploadSpeed() {
    const dataSizeInBytes = 2 * 1024 * 1024;
    const data = new Uint8Array(dataSizeInBytes);
    const startTime = performance.now();

    try {
       await fetch("https://httpbin.org/post", {
            method: "POST",
            body: new Uint8Array(2 * 1024 * 1024), // 2MB data
            headers: { "Content-Type": "application/octet-stream" }
        });
        

        const endTime = performance.now();
        const durationInSeconds = (endTime - startTime) / 1000;
        const speedMbps = (dataSizeInBytes * 8) / (1024 * 1024) / durationInSeconds;

        document.getElementById("uploadSpeed").innerText = `${speedMbps.toFixed(2)}Mbps`
        document.getElementById("uploadProgress").style.width = "100%";
    }
    catch(e){
        document.getElementById("uploadSpeed").innerText = "Error";
        console.log(e)
    }
}

document.querySelector("#start-btn").addEventListener('click', async ()=>{
    document.getElementById('downloadProgress').style.width = "0%";
    document.getElementById('downloadSpeed').innerText = "Testing...";
    document.getElementById('uploadProgress').style.width = "0%";
    document.getElementById('uploadSpeed').innerText = "Testing....";

    await testDownloadSpeed();
    await testUploadSpeed();
})