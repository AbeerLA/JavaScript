const apiKey = "8dbd6d560042befc6fea222b"; // Replace this with your API key
const apiUrl = `https://v6.exchangerate-api.com/v6/8dbd6d560042befc6fea222b/latest/USD`;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");

// Function to fetch currency options from the API
async function fetchCurrencies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);
        
        // Populate dropdowns with currency options
        currencies.forEach(currency => {
            const option1 = document.createElement("option");
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });

        // Set default values
        fromCurrency.value = "USD";
        toCurrency.value = "EUR";
    } catch (error) {
        console.error("Error fetching currencies:", error);
    }
}

// Function to convert currency
async function convertCurrency() {
    try {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const rate = data.conversion_rates[to]; // Get conversion rate
        const convertedAmount = (amount.value * rate).toFixed(2); // Calculate and format result
        result.textContent = `${amount.value} ${from} = ${convertedAmount} ${to}`; // Display result
    } catch (error) {
        console.error("Error converting currency:", error);
    }
}

// Fetch currencies when the page loads
fetchCurrencies();
