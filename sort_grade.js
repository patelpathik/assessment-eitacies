let grades = ["A+", "A", "B+", "B", "C"];

let data = [
  { name: "Anam", grade: "A" },
  { name: "Arjun", grade: "A+" },
  { name: "Iram", grade: "B+" },
  { name: "Zia", grade: "C" },
  { name: "Reah", grade: "B" },
  { name: "Karan", grade: "A" },
  { name: "Mithum", grade: "B" },
  { name: "Ankur", grade: "B+" },
];

function sortGrades(x, y) {
  if (grades.indexOf(x.grade) > grades.indexOf(y.grade)) return -1;

  return 1;
}

console.log(data.sort(sortGrades));
