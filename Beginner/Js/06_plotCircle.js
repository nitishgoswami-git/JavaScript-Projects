const randColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }        
    return color
};
window.addEventListener("click", (e) => {
    console.log(`${e.clientX}, ${e.clientY}`);
    const cir = document.createElement('div');
    cir.classList.add("circle"); // Add the predefined CSS class
    cir.style.top = `${e.clientY - 30}px`;
    cir.style.left = `${e.clientX - 30}px`;
    cir.style.backgroundColor = randColor();
    document.body.appendChild(cir);
});
