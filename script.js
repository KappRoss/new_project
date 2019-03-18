//const person1 = {
//	name: 'Wow',
//	lastName: 'Tkach'
//}
//
//
//function seyHello(){
//	console.log(`Hello,  ${this.name} ${this.lastName}`)
//}
//
//seyHello.bind(person1)();
//
//function getPerson(name, name2, age){
//	const person = {
//		name: name,
//		name2: name2,
//		age: age,
//	
//		sayHello(){
//			console.log(`Hi, my name is ${this.name} ${this.name2} and i'm ${this.age}`)
//		}	
//	}
//	return person;
//}
//
//const personRostik = getPerson('Rost', 'Kapl', '20');

//personRostik.sayHello()

function Person(name, name2, age){
	this.name = name
	this.name2 = name2
	this.age = age

	this.sayHello = () => {
		console.log(`Hi, my name is ${this.name} ${this.name2} and i'm ${this.age}`)
	} 
}

const dude = new Person ('Rost', 'Kapl', '20');
dude.sayHello()