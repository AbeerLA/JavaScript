let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name:'Rudi',
        score:80
    },
    {
        name: 'Dira',
        score: 100
    },
]

const findTopStudent = (students) => 
    students.reduce((top, student) => (student.score > top.score ? student : top));

// Get the top student
const { name, score } = findTopStudent(studentsScore);

// Display the result
console.log(`Top student: ${name}, Score: ${score}`);