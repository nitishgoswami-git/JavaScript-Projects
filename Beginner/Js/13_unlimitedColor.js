
    const start = document.querySelector('#start')
    const stop = document.querySelector('#stop')



    const randColor = function () {
        const hex = "0123456789ABCDEF"
        let color = '#'
        for (let i=0;i<6;i++){
            color += hex[Math.floor(Math.random()*16)]
        }        
        return color
    };

    const StartchangingColor = function (){
        document.querySelector('body').style.backgroundColor = randColor();
    }



    start.addEventListener('click',()=>{
        changeColor = setInterval(StartchangingColor,1000)
        

    })

    stop.addEventListener('click',()=>{
        clearInterval(changeColor)
        document.querySelector('body').style.backgroundColor = "#fff";

    })
