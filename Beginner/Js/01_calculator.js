const display = document.querySelector('.display')
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click',()=>{
        if (button.innerText === "="){
            display.textContent = Function(`'use strict'; return (${display.textContent})`)();
        }
        else if (button.innerText == "C"){
            display.innerHTML = ""
        }
        else{
            display.innerHTML += button.innerText
        }
    });
});
