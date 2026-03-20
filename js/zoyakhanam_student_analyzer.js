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
      { subject: "English", score: 99 },
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
      { subject: "Computer", score: 99 },
    ],
    attendance: 75,
  },
  {
    name: "Neha",
    marks: [
      { subject: "Math", score: 38 },
      { subject: "English", score: 33 },
      { subject: "Science", score: 98 },
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

console.log("1. Total marks for each student");
calculateTotalMarks(students);

function calculateAverage(students) {
  students.forEach((student) => {
    let avg = student.totalMarks / student.marks.length;
    student.average = avg;
    console.log(`${student.name} average: ${student.average}`);
  });
}

console.log("2. Average marks for each student");
calculateAverage(students);

function subjectWiseHighest(students) {
  const highestMarks = {};
  students.forEach((student) => {
    student.marks.forEach((subject) => {
      //if the subject is never seen or if the current score is greater than the previous value
      if (
        highestMarks[subject.subject] === undefined ||
        highestMarks[subject.subject].marks < subject.score
      )
        // highestMarks is an object of object
        highestMarks[subject.subject] = {
          name: student.name,
          marks: subject.score,
        };
    });
  });
  return highestMarks;
}
console.log("3. Subject-wise Highest Score in the Class");
const subjectTopper = subjectWiseHighest(students);

//we use for in loop for objects
for (let sub in subjectTopper) {
  console.log(
    `Highest in ${sub} : ${subjectTopper[sub].name} (${subjectTopper[sub].marks})`,
  );
}

function subjectWiseAverageScore(students) {
  const subTotal = {};
  students.forEach((student) => {
    student.marks.forEach((subject) => {
      //if there is no entry of a subject
      if (subTotal[subject.subject] === undefined) {
        subTotal[subject.subject] = subject.score;
      } else {
        subTotal[subject.subject] += subject.score;
      }
    });
  });
  return subTotal;
}
console.log("4. Subject-wise Average Score");
let subjectTotalAvg = subjectWiseAverageScore(students);
subjectTotalAvg = subjectTotalAvg;
let numberOfStudents = students.length;
for (let sub in subjectTotalAvg) {
  let avg = subjectTotalAvg[sub] / numberOfStudents;
  console.log(`Average ${sub} Score: ${avg}`);
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

console.log("6. Grade for each student");
getGrade(students);
