const students = [
  {
    name: "Sanjana",
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

function calculateAverage(student) {
  let total = 0;
  student.marks.forEach((mark) => {
    total += mark.score;
  });
  return total / student.marks.length;
}
// calling fn
console.log("2. Average marks for each student");
students.forEach((student) => {
  let avg = calculateAverage(student);
  student.average = avg;
  console.log(`${student.name} Average Marks: ${avg}`);
})

function subjectWiseHighest(students) {
  const highestMarks = {};
  students.forEach((student) => {
    student.marks.forEach((subject) => {
      //if the subject is never seen or if the current score is greater than the previous value
      if (
        highestMarks[subject.subject] === undefined ||
        highestMarks[subject.subject].marks < subject.score
      )
        // highestMarks is an object containing arr
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
let subjectTotalAvg = subjectWiseAverageScore(students); //storing the obj returned by our function
let numberOfStudents = students.length;
//for output
for (let sub in subjectTotalAvg) {
  let avg = subjectTotalAvg[sub] / numberOfStudents;
  console.log(`Average ${sub} Score: ${avg.toFixed(1)}`);
}

function getTopper(students) {
  let toppers = []; //using array to store the name and total marks of the toppers
  let maxMark = -1;
  students.forEach((student) => {
    if (student.totalMarks > maxMark) {
      maxMark = student.totalMarks;
      toppers = []; //emptying out arr because any entry before this will have lesser marks than our current entry
      toppers.push({
        name: student.name,
        marks: student.totalMarks,
      });
    } else if (student.totalMarks === maxMark) {
      //if we have more than 1 topper
      toppers.push({
        name: student.name,
        marks: student.totalMarks,
      });
    }
  });
  return toppers;
}
console.log("5. Determine Overall Class Topper");
const topperStudents = getTopper(students); //storing the array returned by our fn
topperStudents.forEach((entry) => {
  console.log(`Class topper : ${entry.name} with ${entry.marks} marks`);
});


function getGrade(students) {
  students.forEach((student) => {
    let avg = calculateAverage(student);
    let grade = "";
    let failedSubjects = []; //failedSubject array to store the multiple subjects in which a student failed in
    student.marks.forEach((subject) => {
      if (subject.score <= 40) {
        failedSubjects.push(subject.subject);
      }
    });
    student.failedIn = failedSubjects; //we are also updating the students array to store failed subject array for future reference
    if (failedSubjects.length > 0) { //if the failedSubject arr is not empty means the student failed in atleast one subject
      grade = `fail (failed in ${failedSubjects})`; //used `` for string interpolation
    } else if (student.attendance < 75) {
      grade = "fail (low attendance)";
    } else {
      if (avg >= 85) {
        grade = "A";
      } else if (avg >= 70) {
        grade = "B";
      } else if (avg >= 50) {
        grade = "C";
      } else {
        grade = "fail";
      }
    }
    //adding the grade to our students array as well
    student.grade = grade;

    console.log(`${student.name} Grade: ${student.grade}`);
  });
}

console.log("6. Grade for each student");
getGrade(students);
