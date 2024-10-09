const readline = require('readline');

//readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function
function analyzeMafiaMember(name, age, placeToLive, savings) {
    if (age > 40 && (placeToLive === "Nevada" || placeToLive === "New York" || placeToLive === "Havana") && savings > 10000000) {
        return `${name} is likely a mafia member with Don.`;
    } else if (age >= 25 && age <= 40 && (placeToLive === "New Jersey" || placeToLive === "Manhattan" || placeToLive === "Nevada") && savings === 1000000) {
        return `${name} is likely a mafia member with Underboss.`;
    } else if (age >= 18 && age <= 24 && (placeToLive === "California" || placeToLive === "Detroit" || placeToLive === "Boston") && savings < 1000000) {
        return `${name} is likely a mafia member with Capo.`;
    } else {
        return `${name} is not suspicious.`;
    }
}

// reading the user inputs
rl.question('Enter name: ', (name) => {
    rl.question('Enter age: ', (age) => {
        rl.question('Enter place to live: ', (placeToLive) => {
            rl.question('Enter savings in dollars: ', (savings) => {
                const result = analyzeMafiaMember(name, parseInt(age), placeToLive, parseFloat(savings));
                console.log(result);
                rl.close();
            });
        });
    });
});