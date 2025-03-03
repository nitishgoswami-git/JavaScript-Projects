document.querySelector("#input-text").addEventListener("input",()=>{
    let len = document.querySelector("#input-text").value.length;
    document.querySelector("#char-count").textContent = len;
    document.querySelector("#remaining-count").textContent = 50 - len;
});
