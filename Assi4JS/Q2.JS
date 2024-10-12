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

// دالة لتجميع بيانات MotoGP حسب الدولة الفائزة
const groupByCountry = (events) => {
    return events.reduce((acc, { winner, circuit, location }) => {
        const country = winner.country;
        const fullName = `${winner.firstName} ${winner.lastName}`;
        const winLocation = `${circuit}, ${location}`;

        // إذا لم تكن الدولة موجودة، قم بإنشائها
        if (!acc[country]) {
            acc[country] = { winningCircuits: [], totalwin: 0 };
        }

        // إضافة معلومات الفوز
        acc[country].winningCircuits.push({ name: fullName, winLocation });
        acc[country].totalwin++;

        return acc;
    }, {});
};

// تجميع بيانات MotoGP
const groupedByCountry = groupByCountry(motoGP);

// عرض البيانات المجمعّة
console.log(JSON.stringify(groupedByCountry, null, 4));