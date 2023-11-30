function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
	return this.subject;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		return;
	}
	this.marks.push(...marksToAdd);
	return this.marks;
}



Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}
	return sum / this.marks.length;
}




Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
	return this.excluded
}

let student1 = new Student("Vasilii", "mail", 29);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(5, 5, 5);
console.log(student1.getAverage());
console.log(student1);


let student2 = new Student("Anna", "femail", 35);
student2.setSubject("Geometry");
student2.exclude("Bad marks")
console.log(student2);
  