window.addEventListener("mousemove",(e)=>{
    document.querySelector(".mouse-event.x").innerHTML = `<div class="mouse-event.x">
        ${e.clientX}
        <h4>Mouse X Prosition(px)</h4>
      </div>`
    document.querySelector(".mouse-event.y").innerHTML = `<div class="mouse-event.x">
        ${e.clientY}
        <h4>Mouse Y Prosition(px)</h4>
      </div>`
})