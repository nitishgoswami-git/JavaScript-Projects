async function getInfo() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
        const data = await response.json();

        formatData(data);
    } catch (e) {
        console.log("Error fetching data:", e);
    }
}

// Interacting with the front end
function formatData(info) {
    const cryptoTable = document.getElementById("crypto-table"); // Corrected selector
    // cryptoTable.innerHTML = ""; 

    info.forEach(element => {
        const row = document.createElement("tr"); 

        row.innerHTML = `
            <td>${element.name}</td>
            <td><img src = ${element.image}></td>
            <td>${element.symbol.toUpperCase()}</td>
            <td>$${element.current_price.toLocaleString()}</td>
            <td style="color: ${element.price_change_percentage_24h >= 0 ? 'green' : 'red'};">
                ${element.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>$${element.market_cap.toLocaleString()}</td>
        `;

        cryptoTable.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", getInfo); 


