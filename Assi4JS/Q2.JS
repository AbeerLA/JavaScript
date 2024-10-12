var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

// Function to group MotoGP data by winning country
const groupByCountry = (events) => {
    return events.reduce((acc, { winner, circuit, location }) => {
        const country = winner.country;
        const fullName = `${winner.firstName} ${winner.lastName}`;
        const winLocation = `${circuit}, ${location}`;

        // Initialize the country object if it doesn't exist
        if (!acc[country]) {
            acc[country] = { winningCircuits: [], totalwin: 0 };
        }

        // Add winning information
        acc[country].winningCircuits.push({ name: fullName, winLocation });
        acc[country].totalwin++;

        return acc;
    }, {});
};

// Group the MotoGP data
const groupedByCountry = groupByCountry(motoGP);

// Display the grouped data
console.log(JSON.stringify(groupedByCountry, null, 4));