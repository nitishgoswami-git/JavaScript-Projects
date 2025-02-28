document.querySelector("#calculate").addEventListener("click",()=>{
    const bill = parseFloat(document.querySelector("#bill").value);
    const service =parseFloat(document.querySelector("#service").value);
    const people  = parseInt(document.querySelector("#people").value);
    
    const tip = (bill * service) / people;
    const pricePerPerson = (bill + (bill * service))/people;
    
    document.querySelector("#result").innerHTML = `<h6>Tip Amount: ${tip}</h6>
                                                <h6>Bill Per Person: ${pricePerPerson}`;

})