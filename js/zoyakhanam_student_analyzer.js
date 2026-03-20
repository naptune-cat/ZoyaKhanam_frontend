const students = [
  {
    name: "Zoya",
    marks: [
      { subject: "Math", score: 96 },
      { subject: "English", score: 82 },
      { subject: "Science", score: 94 },
      { subject: "History", score: 89 },
      { subject: "Computer", score: 90 },
    ],
    attendance: 95,
  },
  {
    name: "Sneha",
    marks: [
      { subject: "Math", score: 95 },
      { subject: "English", score: 92 },
      { subject: "Science", score: 94 },
      { subject: "History", score: 90 },
      { subject: "Computer", score: 97 },
    ],
    attendance: 30,
  },
  {
    name: "Rohit",
    marks: [
      { subject: "Math", score: 32 },
      { subject: "English", score: 45 },
      { subject: "Science", score: 28 },
      { subject: "History", score: 35 },
      { subject: "Computer", score: 40 },
    ],
    attendance: 75,
  },
  {
    name: "Neha",
    marks: [
      { subject: "Math", score: 38 },
      { subject: "English", score: 33 },
      { subject: "Science", score: 41 },
      { subject: "History", score: 29 },
      { subject: "Computer", score: 36 },
    ],
    attendance: 80,
  },
  {
    name: "Vikas",
    marks: [
      { subject: "Math", score: 25 },
      { subject: "English", score: 30 },
      { subject: "Science", score: 22 },
      { subject: "History", score: 27 },
      { subject: "Computer", score: 35 },
    ],
    attendance: 60,
  },
];
function calculateTotalMarks(students) {
  students.forEach((student) => {
    let total = 0;
    student.marks.forEach((mark) => {
      total += mark.score;
    });
    console.log(`${student.name} total marks: ${total}`);
  });
}

console.log("1. Total marks");
calculateTotalMarks(students);
