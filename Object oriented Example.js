var Student = function (fn, Ln, email, sid){

	this.first_name = fn;
	this.last_name = ln;
	this.email = email;
	this.sid = sid;
	this.courses =[];

};

Student.prototype.register = function(course) {
	this.courses.push(course);
	this.notify("You have been enrolled in " + course.name);

};	

Student.protoype.notify = function(message) {
	message.send(this.email);
};

module.exports = Student;

var Seth = new Student("Seth","Herbst", "SH@mail.com", "1234");
var newcourse = new Course ("New Course", "Programming, Spring 16")