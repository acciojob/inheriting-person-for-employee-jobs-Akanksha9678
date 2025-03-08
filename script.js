// complete this js code
class Person {
	constructor(name,age){
		this.name=name
		this.age=age
	}
	greet(){
		console.log(`Hello my name is ${this.name}, I am ${this.age} year old.`)
	}
}

class Employee extends Person{
	constructor(jobTitle){
	super(this.name)
	super(this.age)
	this.jobTitle=jobTitle
	}
	super.greet()
	jobGreet(){
			console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my jon title is ${this.jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
