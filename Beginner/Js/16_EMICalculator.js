document.querySelector("#calculate").addEventListener("click", () => {
    const amount = parseFloat(document.querySelector("#loanAmount").value);
    const rate = parseFloat(document.querySelector("#interestRate").value) / 100 / 12; // Convert annual rate to monthly
    const months = parseInt(document.querySelector("#loanTenure").value);

    if (isNaN(amount) || isNaN(rate) || isNaN(months) || amount <= 0 || months <= 0) {
        alert("Please enter valid loan details.");
        return;
    }

    // EMI Formula: E = [P * r * (1+r)^n] / [(1+r)^n - 1]
    const emi = (amount * rate * Math.pow(1 + rate, months)) / 
                (Math.pow(1 + rate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - amount;

    // Display results
    document.querySelector("#emiAmount").innerText = `₹${emi.toFixed(2)}`;
    document.querySelector("#totalInterest").innerText = `₹${totalInterest.toFixed(2)}`;
    document.querySelector("#totalPayment").innerText = `₹${totalPayment.toFixed(2)}`;
});
