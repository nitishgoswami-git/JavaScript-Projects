
const form = document.querySelector('form')
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#result');
    let addText = "";

    if (isNaN(height) || height <= 0) {
        res.innerHTML = "Please give a valid height";
        return;
    }
    else if (isNaN(weight) || weight <=0){
        res.innerHTML = "Please give a valid weight";
        return;
    }
    else{
        const bmi = (weight/ ((height *height)/10000)).toFixed(2)
        if (bmi < 18.6){
            addText= `<span> You are UnderWeight</span>`;
        }else if (bmi >= 18.6 && bmi < 24.9){
            addText = `<span> You are in Normal Range</span>`;
        }else{
            addText = `<span>You are OverWeight</span>`;
        }
        res.innerHTML = `<span>Your BMI is : ${bmi}</span> <br>${addText}`;
        res.appendChild(addText);
    }
    

});
