function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
//const student1 = new Student();
//const student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};
Student.prototype.addMarks = function (...rest) {
  if (this.marks === undefined) {
    this.marks = [...rest];
  } else {
    this.marks.push(...rest);
  }
};
Student.prototype.getAverage = function () {
  let sum = 0;
  for (let studentMark of this.marks) {
    sum += studentMark;
  }
  avg = sum / this.marks.length;
  return avg;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
