document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#tempConverter").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const temp = parseFloat(document.querySelector('#temperature').value);
        const unit = document.querySelector('#unit').value;
        let result;

        if (isNaN(temp)) {
            result = "Please enter a valid number!";
        } else {
            if (unit === "celsius") {
                result = (temp * 9/5) + 32;
                result = `${result.toFixed(2)}°F`;
            } else if (unit === "fahrenheit") {
                result = (temp - 32) * 5/9;
                result = `${result.toFixed(2)}°C`;
            } else {
                result = "Invalid Conversion";
            }
        }

        document.querySelector("#result").innerHTML = result;
    });
});
