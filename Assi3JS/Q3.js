function assignPosition(jerseyNumber) {
    let positions = [];

    // Check even jersey numbers for "target attacker"
    if (jerseyNumber % 2 === 0) {
        positions.push("target attacker");

        // Check if the even number is between 50 and 100
        if (jerseyNumber >= 50 && jerseyNumber <= 100) {
            positions.push("has the right to be chosen as team captain");
        }
    } 
    // Check odd jersey numbers for "defender"
    else {
        positions.push("defender");

        // Check if the odd number is over 90
        if (jerseyNumber > 90) {
            positions.push("Playmaker");
        }
        
        // Check if the odd number is a multiple of 3 and 5
        if (jerseyNumber % 3 === 0 && jerseyNumber % 5 === 0) {
            positions.push("keeper");
        }
    }

    // Return the result
    if (positions.length === 0) {
        return "Invalid jersey number.";
    }

    return `The jersey number ${jerseyNumber} is assigned to the positions: ${positions.join(", ")}.`;
}

// Example usage
const jerseyNumbers = [12, 55, 91, 75, 30, 102, 85, 99, 15];

jerseyNumbers.forEach((number) => {
    const result = assignPosition(number);
    console.log(result);
});