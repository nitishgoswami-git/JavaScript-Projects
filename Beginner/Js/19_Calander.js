document.addEventListener("DOMContentLoaded", function() {
    const monthYear = document.getElementById("month-year");
    const fullDate = document.getElementById("full-date");
    const datesContainer = document.getElementById("dates");

    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();

    monthYear.innerText = `${currentMonth.toUpperCase()}`;
    fullDate.innerText = today.toDateString();

    function generateCalendar() {
        datesContainer.innerHTML = ""; // Clear previous dates

        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
        const totalDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        const offset = firstDay === 0 ? 6 : firstDay - 1; // Adjust offset (JS Sunday = 0)

        // Empty spaces for previous month's trailing days
        for (let i = 0; i < offset; i++) {
            const emptyDiv = document.createElement("div");
            datesContainer.appendChild(emptyDiv);
        }

        // Generate calendar days
        for (let i = 1; i <= totalDays; i++) {
            const dateDiv = document.createElement("div");
            dateDiv.innerText = i;

            // Highlight today's date
            if (i === currentDay) {
                dateDiv.classList.add("highlight");
            }

            datesContainer.appendChild(dateDiv);
        }
    }

    generateCalendar();
});
