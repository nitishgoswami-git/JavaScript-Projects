const display = document.querySelector('#count')
let count = 0

document.querySelectorAll('.buttons button').forEach(button  => {
    button.addEventListener('click',(e)=>{
            switch (e.target.id){
                case "increase": count ++;
                break;

                case "decrease": if (count> 0) count-- ;
                break;

                case "reset": count = 0;
                break;
            }
            display.textContent = count;
    });  

});
