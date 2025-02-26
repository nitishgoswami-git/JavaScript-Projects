const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size dynamically
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let history = [];
let index = -1;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY); 
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3; 
    ctx.lineCap = "round"; 
    ctx.stroke();
});

canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;
    if (e.type != "mouseout"){
    history.push(ctx.getImageData(0,0,canvas.width,canvas.height));
    index ++;
    }
});


//prevents drawing when moving fast 

// canvas.addEventListener("mouseleave", () => {
//     isDrawing = false;
// });


document.querySelector("#clear").addEventListener("click",()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.querySelector("#undo").addEventListener("click",()=>{
    if(index <= 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        history = []; 
        index = -1;
    }
    else{
        history.pop(); 
        index--; 

        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        if (history[index]) {
            ctx.putImageData(history[index], 0, 0); 
        }
    }
});