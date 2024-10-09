function evaluateCase(criteria) {
    let totalScore = 0;

    // Scoring based on criteria
    if (criteria.cyanideInStomach) {
        totalScore += 50; // a
    }
    if (criteria.cyanideAmount > 50) {
        totalScore += 500; // b
    }
    if (criteria.cctvClear) {
        totalScore += 250; // c
    }
    if (criteria.cctvBlurred) {
        totalScore += 150; // d
    }
    if (criteria.fingerprints >= 2) {
        totalScore += 100; // e
    }
    if (criteria.suspiciousMovements) {
        totalScore += 50; // f
    }
    if (criteria.cyanideInPocket) {
        totalScore += 750; // g
    }

    // Check if the case is a homicide
    if (totalScore > 1300 && criteria.cctvClear && criteria.fingerprints >= 2) {
        return "It is certain that it is a murder.";
    } else {
        return "It is inconclusive whether it is a murder.";
    }
}

// Example usage to try diffrent Scenarios
const criteria = {
    cyanideInStomach: true,
    cyanideAmount: 60, // > 50
    cctvClear: true,
    cctvBlurred: false,
    fingerprints: 2, // two fingerprints
    suspiciousMovements: true,
    cyanideInPocket: true
};

const result = evaluateCase(criteria);
console.log(result);