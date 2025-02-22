const body = document.querySelector('body')
        const buttons = document.querySelectorAll('.button')

        buttons.forEach((button) => {
            button.addEventListener('click',(event) =>{
                switch (event.target.id){
                    case "grey": body.style.backgroundColor = event.target.id;
                    break;
                    case "white": body.style.backgroundColor = event.target.id;
                    break;
                    case "blue": body.style.backgroundColor = event.target.id;
                    break;
                    case "yellow": body.style.backgroundColor= event.target.id;
                    break;
                    default: body.style.backgroundColor = "#000"

                }

            }) 
        });
