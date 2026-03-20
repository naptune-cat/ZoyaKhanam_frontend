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
    student.totalMarks = total;
    console.log(`${student.name} Total Marks: ${total}`);
  });
}

function calculateAverage(students) {
  students.forEach((student) => {
    let avg = student.totalMarks / student.marks.length;
    student.average = avg;
    console.log(`${student.name} average: ${student.average}`);
  });
}

function getGrade(students) {
  students.forEach((student) => {
    let grade = "";
    let failedSubjects = [];
    student.marks.forEach((subject) => {
      if (subject.score < 40) {
        failedSubjects.push(subject.subject);
      }
    });
    student.failedIn = failedSubjects;
    if (failedSubjects.length > 0) {
      grade = `fail (failed in ${failedSubjects})`;
    } else if (student.attendance < 75) {
      grade = "fail (low attendance)";
    } else {
      if (student.average >= 85) {
        grade = "A";
      } else if (student.average >= 70) {
        grade = "B";
      } else if (student.average >= 50) {
        grade = "C";
      } else {
        grade = "fail";
      }
    }
    student.grade = grade;

    console.log(`${student.name} Grade: ${student.grade}`);
  });
}

console.log("1. Total marks for each student");
calculateTotalMarks(students);

console.log("2. Average marks for each student");
calculateAverage(students);

console.log("5. Grade for each student");
getGrade(students);
